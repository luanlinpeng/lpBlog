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

1.当服务端发送验证码之后需要保存下发送的内容，通常想的是保存在内存当中  但是服务端的代码不一定会只部署在一台机器上，如果存在内存当中的话  如果是分布式的部署的话 其他机器是拿不到它的验证码的（请求打在a机器，验证打在b机器上） 所以生产环境一般会保存在redis里面

练习项目 使用iron-session在nextjs项目中保存一些信息
登录的时候服务端会给前端注册一个sessionId，这个sessionId是保存在cookies中的，后面的请求都会带着这个sessionId发送给服务端，服务端接收到请求后会去匹配这个sessionId，如果匹配到了就是登录态，就校验通过。

2.user表设计： 目前的三方登录基本都是基于 OAuth2.0 的授权码方式来实现的，我们了解基本原理后，再来看 users 表应该如何设计才更具有扩展性。假如我们要接入微信三方登录，那么就需要一张微信用户表，和自己的用户表关联，那么当我们要接入微博三方登录的时候，就要仿照这样，再加一张微博用户表，如果每新增一种登录方式，就要新加多张表的话，系统会变的越来越难以维护，所以我们需要一种抽象度更高的表设计模式。
无论是 username + password，还是 phone + verify_code，或者 access_token 登录方式，本质上，都是一种 用户信息 + 密码 的验证形式。那么我们基于这种模式，可以抽象出两张表：用户基础信息表 和 用户授权信息表。
这个系统最大的特色就是 , 用户信息表不保存任何密码 , 不保存任何登录信息 (如用户名 , 手机号 , 邮箱) , 只留有昵称 , 头像等基础信息 ; 所有和授权相关 (且基本前端展示无关的) , 都放在用户信息授权表 , 用户信息表和用户授权表是一对多的关系

3.如何在next项目中操作数据库：引入typeorm
一种映射关系，可以像管理对象那样管理数据库。(安装typeorm和mysql2 用于连接数据库)

