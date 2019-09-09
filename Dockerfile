FROM fe/node:12.8

LABEL version="1.0" description="react-ssr"

# 工作目录
WORKDIR /app

# 全局安装pm2模块
RUN npm i -g pm2 \
  # 需要安装pm2-intercom模块，否则log4js日志不输出
  && pm2 install pm2-intercom

# 复制源码，仅复制服务端运行时需要的代码文件即可
COPY server /app/server
COPY app /app/app
COPY build /app/build
COPY dist /app/dist
COPY node_modules /app/node_modules
COPY ecosystem.config.yaml package.json /app/

# 镜像内的服务使用 15100 端口
EXPOSE 15100
# 传递环境变量
ENV NODE_ENV=production PORT=15100

# 使用pm2-docker启动程序
CMD ["pm2-docker", "start", "ecosystem.config.yaml"]
