import { createProxyMiddleware } from "http-proxy-middleware";
module.exports = function expressMiddleware(router) {
  router.use(
    "/api",
    createProxyMiddleware({
      target: "https://my-json-server.typicode.com/dkbrownn/demo/",
      changeOrigin: true,
    })
  );
};
