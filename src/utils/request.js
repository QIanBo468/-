import axios from 'axios'
import {
  Toast
} from 'vant';
import store from '@/store'
import router from '../router'
import { removeUser } from "@/utils/auth";
// 显示错误
function errorLog(message) {
  // 显示提示
  Toast(message);
  return
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: 'http://qiaoshui.qdunzi.cn/portal',
  timeout: 50000 // 请求超时时间
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    // console.log('config', config)
    // // 在请求发送之前做一些Token处理
    const {
      user
    } = store.state
    let token = user
    if (token && token !== 'undefined') {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    // 发送失败
    console.log('接口发送失败:', error)
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(

  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    const {
      code
    } = dataAxios
    // 根据 code 进行判断
    if (code === undefined) {
      return dataAxios
    } else {
      switch (code) {
        case 0:
          return dataAxios.data ||dataAxios
        case 4700:
          // 登录失效
          Toast('登陆信息已过期,请重新登陆!');
          removeUser('user')
          router.push({
            path: "/login"
          })
          // 删除Token
          // 跳转登录页面
          return Promise.reject(dataAxios)
        case 4800:
          // 用户可见错误  这里可以进行认证的一些判断
          errorLog(dataAxios.message)
          return Promise.reject(dataAxios)
        case 4500:
          // 用户可见错误
          return Promise.reject(dataAxios)
        default:
          errorLog('网络异常，请稍后..')
          return Promise.reject(dataAxios)
      }
    }
  },
  error => {
    console.log('错误信息:', error)
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break
        case 401:
          error.message = '未授权，请登录';
          break
        case 403:
          error.message = '拒绝访问';
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break
        case 408:
          error.message = '请求超时';
          break
        case 500:
          error.message = '服务器内部错误';
          break
        case 501:
          error.message = '服务未实现';
          break
        case 502:
          error.message = '网关错误';
          break
        case 503:
          error.message = '服务不可用';
          break
        case 504:
          error.message = '网关超时';
          break
        case 505:
          error.message = 'HTTP版本不受支持';
          break
        case ECONNABORTED:
          error.message = '请求超时';
          break
        default:
          break
      }
    } else {
      error.message = '数据请求超时';
    }
    errorLog(error.message)
    return Promise.reject(error)
  }
)
export function get(params) {
  return service({
    method: 'get',
    url,
    params: params,
  })
}
//post请求
export function post(params) {
  return service({
    method: 'post',
    data: {
      source: 'web',
      version: 'v1',
      module: params.module,
      interface: params.interface,
      data: params.data,
    }
  })
}