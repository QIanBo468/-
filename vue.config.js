
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://qiaoshui.qdunzi.cn/",
        changeOrigin: true,
        ws: true,
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
