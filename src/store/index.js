import Vue from 'vue'
import Vuex from 'vuex'
import { getUser,setUser } from '@/utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: getUser() || {}, 
    },
    mutations: {
        setUsers (state, user) {
          state.user = user
          setUser(state.user)
        }
      },
})
export default store
