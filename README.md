#cnode-club-ionic2 - cnode社区客户端app
-----
作者：hao5743@163.com

使用angular2+typescript+ionic2开发的cnode社区客户端，支持android和ios，欢迎提出bug,改进建议到邮箱。

如果对你有用的话，请给个star O(∩_∩)O~。开源地址[https://github.com/hao5743/cnode-club-ionic2.git](https://github.com/hao5743/cnode-club-ionic2.git)

## 基本功能
* 话题列表、详情
* 评论查看、发表，点赞
* 查看用户资料
* 消息查看、标记已读
* 查看个人发表、参与的话题
* 等等

## 附加功能

* 缓存。话题列表、详情离线缓存，用户资料离线缓存，方便离线使用
* 草稿。未登录、离线时可以保存草稿到本地，以后再发布。
* 登录历史。保存登录历史，方便再次登录，避免重复输入token

## 环境

请自行安装最新的`nodejs`,`ionic`,`cordova`

```bash
$ npm install -g ionic cordova
```

## 安装使用步骤

```bash
$ git clone https://github.com/hao5743/cnode-club-ionic2.git
$ npm install
$ ionic serve
# 或者
$ cordova platform add ios/android
$ ionic run ios/android
```

## 开发环境

这是我的开发环境，测试可以正常运行。（环境不同有可能会遇到不同的问题）

```
Cordova CLI: 6.4.0 
Ionic CLI Version: 2.1.18
Ionic App Lib Version: 2.1.9
ios-deploy version: 1.9.0 
ios-sim version: 5.0.11 
OS: macOS Sierra
Node Version: v7.2.0
Xcode version: Xcode 8.2.1 Build version 8C1002
```

## 下一步改进

* 二维码扫描登录
* 修复android启动缓慢问题
* 消息通知推送
* 上线AppStore、豌豆荚

* 此项目仅限学习交流使用，不允许用于商业用途

## 联系
* hao5743@163.com
* qq 310741531

### 截图

 话题列表

 ![topiclist.jpeg](http://ol1ftyec4.bkt.clouddn.com/cnode-main.JPG)

 话题详情

 ![topic.jpeg](http://ol1ftyec4.bkt.clouddn.com/cnode-topic.JPG) 

 回复

 ![reply.jpeg](http://ol1ftyec4.bkt.clouddn.com/cnode-reply.JPG)
 
