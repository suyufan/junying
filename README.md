腾讯云物联网开发平台小程序 SDK Demo
===

腾讯云物联网开发平台小程序 SDK 的使用示例。

> 关于物联网开发平台小程序 SDK 的更多信息，请参见 [自主品牌小程序开发指南](https://cloud.tencent.com/document/product/1081/47686) 以及 [小程序 SDK](https://cloud.tencent.com/document/product/1081/47687)。
> 
> 本 Demo 的具体使用步骤请参见 [自主品牌小程序快速入门](https://cloud.tencent.com/document/product/1081/47685)。

## 使用步骤
1. 前往 [腾讯云物联网开发平台控制台](https://console.cloud.tencent.com/iotexplorer) > 应用开发，获取小程序 AppKey 与 AppSecret。

2. 前往 [微信公众平台](https://mp.weixin.qq.com/) 的小程序后台，配置小程序服务器域名。
   - request 合法域名：`https://iot.cloud.tencent.com`
   - socket 合法域名：`wss://iot.cloud.tencent.com`

3. 下载、导入 Demo 小程序项目到 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。

4. 配置 AppKey 与 AppSecret。
   - `miniprogram/app.js`
     ```js
     const APP_KEY = 'YOUR_APP_KEY_HERE'; // 填写 AppKey
     ```
   - `cloudfunctions/login/index.js`
     ```js
     const APP_KEY = 'YOUR_APP_KEY_HERE'; // 填写 AppKey
     const APP_SECRET = 'YOUR_APP_SECRET_HERE'; // 填写 AppSecret
     ```

5. 开通小程序云开发，创建并部署 `login` 云函数（位于 `cloudfunctions/login` 目录）。

6. 在 `miniprogram` 目录下安装小程序 npm 依赖。
   ```
   cd miniprogram
   npm install
   ```

7. 在微信开发者工具中，选择菜单栏的【工具】>【构建 npm】。

## 注意事项
1. 小程序登录物联网开发平台，需要获取小程序用户信息后，由后台服务器调用相关的应用端 API，请参见 [应用端 API 简介](https://cloud.tencent.com/document/product/1081/40773) 以及 [微信号注册登录](https://cloud.tencent.com/document/product/1081/40781) 应用端 API。

2. 本 Demo 使用小程序云开发部署登录接口。您也可以将登录接口部署到自己的后台服务器，并且修改 `demo/miniprogram/app.js` 中的 `getAccessToken` 函数，以使用自行部署的登录接口。

3. 小程序只能对已关联的产品下的设备进行绑定、控制等操作。要将小程序与产品关联，请前往 [腾讯云物联网开发平台控制台](https://console.cloud.tencent.com/iotexplorer) > 应用开发 > 关联产品。

## Changelog

### v1.1.1 (2021/5/11)
- 修复：`formatDate` 工具函数报错的问题

### v1.1.0 (2021/4/6)
- 调整：登录获取用户信息接口调整为 wx.getUserProfile

  **注意**：由于 [小程序登录、用户信息相关接口调整](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)，存量应用建议参考 [这个 commit](https://github.com/tencentyun/qcloud-iotexplorer-appdev-miniprogram-sdk-demo/commit/5647f4e88c4476c1f1e784b751a86b3f51d7fb9a) 对登录流程的相关代码进行调整
- 修复：一些情况下设备列表变更时不触发 subscribeDevices 订阅设备信息的问题
- 优化：LoRa 设备、BLE 设备不展示为离线状态

## Demo 结构说明
### 页面
- 首页：pages/index
- 设备面板：pages/panel
- Wi-Fi 配网：pages/add-device 目录下各个页面（配网交互共用 wifi-conf 组件）
- 固件升级：pages/firmware-upgrade

### 组件
- 小程序用户授权、登录：components/page-wrapper 
- 配网交互步骤: pages/add-device/components/wifi-conf
- iOS 系统获取 Wi-Fi 列表步骤引导: components/ios-wifi-guide
