This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
nextjs中文件即路由


## 点击登录服务端如何校验输入的验证码是它发送给你的验证码

当服务端发送验证码之后需要保存下发送的内容，通常想的是保存在内存当中  但是服务端的代码不一定会只部署在一台机器上，如果存在内存当中的话  如果是分布式的部署的话 其他机器是拿不到它的验证码的（请求打在a机器，验证打在b机器上） 所以生产环境一般会保存在redis里面

//练习项目 使用iron-session在nextjs项目中保存一些信息
//登录的时候服务端会给前端注册一个sessionId，这个sessionId是保存在cookies中的，后面的请求都会带着这个sessionId发送给服务端，服务端接收到请求后会去匹配这个sessionId，如果匹配到了就是登录态，就校验通过。
