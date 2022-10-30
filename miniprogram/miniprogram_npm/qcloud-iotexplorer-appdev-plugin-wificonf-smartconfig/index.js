module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1666529690776, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),esptouch_1=require("./esptouch"),qcloud_iotexplorer_appdev_plugin_wificonf_core_1=require("qcloud-iotexplorer-appdev-plugin-wificonf-core"),WifiConfStepCode=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.constants.WifiConfStepCode,WifiConfStepDesp=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.constants.WifiConfStepDesp,SmartConfigWifiConf=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return tslib_1.__extends(e,o),e.prototype.doProtocol=function(o){return tslib_1.__awaiter(this,void 0,void 0,(function(){var e,i,t=this;return tslib_1.__generator(this,(function(n){switch(n.label){case 0:return[4,new esptouch_1.EsptouchTask({apSsid:o.SSID,apBssid:o.BSSID,apPassword:o.password,logger:{info:function(o,e){void 0===e&&(e={}),t.onProgress({code:WifiConfStepCode.PROTOCOL_DETAIL,detail:{message:WifiConfStepCode.PROTOCOL_DETAIL+"("+WifiConfStepDesp[WifiConfStepCode.PROTOCOL_DETAIL]+": "+o+")",data:e}})},error:function(o){void 0===o&&(o={}),t.onError({code:"PROTOCOL_FAIL",detail:{error:o}})}}}).start()];case 1:return e=n.sent(),Array.isArray(e)&&e.length&&(i=e[e.length-1].remoteInfo.address),[2,{address:i}]}}))}))},e}(qcloud_iotexplorer_appdev_plugin_wificonf_core_1.WifiConfProtocolBase),Plugin=function(){function o(){}return o.install=function(o){o.plugins.wifiConfSmartConfig={start:function(e){return new SmartConfigWifiConf(o,tslib_1.__assign({wifiConfType:"SmartConfig"},e)).start()}}},o}();exports.default=Plugin;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./esptouch":1666529690777}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690777, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib");tslib_1.__exportStar(require("./esptouch/EsptouchTask"),exports);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./esptouch/EsptouchTask":1666529690778}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690778, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.EsptouchTask=void 0;var tslib_1=require("tslib"),qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),TouchData_1=require("../protocol/TouchData"),SmartConfig_1=require("./SmartConfig"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,EsptouchTask=function(){function t(t){var s=t.apSsid,e=t.apBssid,i=t.apPassword,r=t.logger,o=t.localIp,a=void 0===o?"192.168.0.1":o;if(this.ssid=new TouchData_1.TouchData(byteUtil.getBytesByString(s)),this.bssid=new TouchData_1.TouchData(byteUtil.parseBssid2bytes(e)),6!==this.bssid.getData().length)throw"Bssid format must be aa:bb:cc:dd:ee:ff";this.password=new TouchData_1.TouchData(byteUtil.getBytesByString(i)),this.localIp=a,this.logger=r||console}return t.prototype.start=function(){var t=this;return new Promise((function(s,e){return tslib_1.__awaiter(t,void 0,void 0,(function(){var t,i;return tslib_1.__generator(this,(function(r){switch(r.label){case 0:if(this.mTask){if(!this.isCancelled())return[2,e({code:3,msg:"已经有任务在进行中，请等待任务结束，或者中断任务"})];this.mTask=null}this.mTask=new SmartConfig_1.SmartConfig(this.ssid,this.bssid,this.password,this.localIp,this.logger),this.logger.info("广播方式"),this.mTask.on("onError",(function(t){e(t)})),r.label=1;case 1:return r.trys.push([1,5,,6]),"android"!==wx.getSystemInfoSync().platform?[3,2]:(this.mTask.on("result",(function(t){s(t)})),this.mTask.startInNoPromise(),[3,4]);case 2:return[4,this.mTask.start()];case 3:(t=r.sent()).length&&s(t),r.label=4;case 4:return[3,6];case 5:return i=r.sent(),e(i),[3,6];case 6:return[2]}}))}))}))},t.prototype.interrupt=function(){var t;null===(t=this.mTask)||void 0===t||t.interrupt(),this.mTask=null},t.prototype.isCancelled=function(){return this.mTask.isCancelled()},t}();exports.EsptouchTask=EsptouchTask;
//# sourceMappingURL=EsptouchTask.js.map
}, function(modId) { var map = {"../protocol/TouchData":1666529690779,"./SmartConfig":1666529690780}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690779, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.TouchData=void 0;var qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,TouchData=function(){function t(t){if(this.mData="","string"==typeof t)this.mData=byteUtil.stringToByteArray(t);else{if(!(t instanceof Int8Array))throw"data cannot be null";this.mData=t}}return t.prototype.getData=function(){return this.mData},t}();exports.TouchData=TouchData;
//# sourceMappingURL=TouchData.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690780, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.SmartConfig=void 0;var tslib_1=require("tslib"),qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),qcloud_iotexplorer_appdev_plugin_wificonf_core_1=require("qcloud-iotexplorer-appdev-plugin-wificonf-core"),esptouchTaskParameter_1=require("../base/esptouchTaskParameter"),EsptouchGenerator_1=require("../protocol/EsptouchGenerator"),UDPSocketClient=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.UDPSocketClient,UDPSocketServer=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.UDPSocketServer,parseInetAddr=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.parseInetAddr,byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,SmartConfig=function(e){function t(t,r,s,i,o,a){var n=e.call(this)||this;return n.TAG="SmartConfig",n.ONE_DATA_LEN=3,n.mIsSuc=!1,n.mIsInterrupt=!1,n.mIsExecuted=!1,n.mEncryptor=a,n.mApSsid=t.getData(),n.mApPassword=s.getData(),n.mApBssid=r.getData(),n.mIsCancelled=!1,n.mParameter=esptouchTaskParameter_1.esptouchTaskParameter,n.mSocketClient=new UDPSocketClient(n.mParameter.getPortListening()),n.mSocketServer=new UDPSocketServer(n.mSocketClient.mSocket,n.mParameter.getWaitUdpTotalMillisecond(),n.mParameter.getEsptouchResultTotalLen()),n.mSocketClient.on("udpSocketError",(function(e){var t=e.errMsg;n.emit("onError",{code:"UDP_ERROR",errMsg:t}),n.interrupt()})),n.mEsptouchResultList=[],n.mBssidTaskSucCountMap={},n.mLocalIp=i,n.logger=o,n.logger.info("Welcome Esptouch smartconfig in weapp"),n}return tslib_1.__extends(t,e),t.prototype.__checkTaskValid=function(){return this.mIsExecuted?(this.logger.error({msg:"the Esptouch task could be executed only once"}),!1):(this.mIsExecuted=!0,!0)},t.prototype.start=function(e){return void 0===e&&(e=1),tslib_1.__awaiter(this,void 0,void 0,(function(){var t,r;return tslib_1.__generator(this,(function(s){switch(s.label){case 0:if(!this.__checkTaskValid())return[2];this.mParameter.setExpectTaskResultCount(e),this.logger.info("start smartconfig in promise settimeout"),t=new EsptouchGenerator_1.EsptouchGenerator(this.mApSsid,this.mApBssid,this.mApPassword,this.mLocalIp,this.mEncryptor),this.mSocketServer.startServer(),this.__listenAsyn(this.mParameter.getEsptouchResultTotalLen()),!1,r=0,s.label=1;case 1:return r<this.mParameter.getTotalRepeatTime()?[4,this.__execute(t)]:[3,4];case 2:if(s.sent())return[2,this.__getEsptouchResultList()];s.label=3;case 3:return r++,[3,1];case 4:return this.mIsInterrupt?[3,6]:[4,qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.delay(this.mParameter.getWaitUdpReceivingMillisecond())];case 5:s.sent(),this.mIsSuc||this.emit("onError",{code:"PROTOCOL_TIMEOUT"}),this.interrupt(),s.label=6;case 6:return[2,this.__getEsptouchResultList()]}}))}))},t.prototype.startInNoPromise=function(e){var t=this;if(void 0===e&&(e=1),this.__checkTaskValid()){this.mParameter.setExpectTaskResultCount(e),this.logger.info("start smartconfig in no promise settimeout");var r=new EsptouchGenerator_1.EsptouchGenerator(this.mApSsid,this.mApBssid,this.mApPassword,this.mLocalIp,this.mEncryptor);this.mSocketServer.startServer(),this.__listenAsyn(this.mParameter.getEsptouchResultTotalLen()),this.__executeInNoPromise(r),setTimeout((function(){t.mIsSuc||t.emit("onError",{code:"PROTOCOL_TIMEOUT"}),t.emit("result",t.__getEsptouchResultList()),t.interrupt()}),this.mParameter.getWaitUdpTotalMillisecond())}},t.prototype.__executeInNoPromise=function(e){var t=this,r=Date.now(),s=r-this.mParameter.getTimeoutTotalCodeMillisecond(),i=0,o=e.getGCBytes2(),a=e.getDCBytes2(),n=function(){if(!t.mIsInterrupt&&Date.now()-r<t.mParameter.getTimeoutGuideCodeMillisecond())return t.mSocketClient.sendDataSideBySide(o,0,o.length,t.mParameter.getTargetHostname(),t.mParameter.getTargetPort(),t.mParameter.getIntervalGuideCodeMillisecond(),n);c()},c=function(){t.mIsInterrupt?t.emit("result",t.__getEsptouchResultList()):(r-s>=t.mParameter.getTimeoutDataCodeMillisecond()?(t.logger.info("send gc code "),n(),s=r):(t.mSocketClient.sendDataSideBySide(a,i,t.ONE_DATA_LEN,t.mParameter.getTargetHostname(),t.mParameter.getTargetPort(),t.mParameter.getIntervalDataCodeMillisecond(),c),i=(i+t.ONE_DATA_LEN)%a.length),r=Date.now())};c(),setTimeout((function(){t.interrupt()}),this.mParameter.getWaitUdpSendingMillisecond())},t.prototype.__execute=function(e){return tslib_1.__awaiter(this,void 0,void 0,(function(){var t,r,s,i,o,a;return tslib_1.__generator(this,(function(n){switch(n.label){case 0:t=Date.now(),s=(r=t)-this.mParameter.getTimeoutTotalCodeMillisecond(),i=e.getGCBytes2(),o=e.getDCBytes2(),a=0,n.label=1;case 1:if(this.mIsInterrupt)return[3,8];if(!(r-s>=this.mParameter.getTimeoutDataCodeMillisecond()))return[3,5];this.logger.info("send gc code "),n.label=2;case 2:return!this.mIsInterrupt&&Date.now()-r<this.mParameter.getTimeoutGuideCodeMillisecond()?[4,this.mSocketClient.sendData(i,0,i.length,this.mParameter.getTargetHostname(),this.mParameter.getTargetPort(),this.mParameter.getIntervalGuideCodeMillisecond())]:[3,4];case 3:return n.sent(),Date.now()-t>this.mParameter.getWaitUdpSendingMillisecond()?[3,4]:[3,2];case 4:return s=r,[3,7];case 5:return[4,this.mSocketClient.sendData(o,a,this.ONE_DATA_LEN,this.mParameter.getTargetHostname(),this.mParameter.getTargetPort(),this.mParameter.getIntervalDataCodeMillisecond())];case 6:n.sent(),a=(a+this.ONE_DATA_LEN)%o.length,n.label=7;case 7:return(r=Date.now())-t>this.mParameter.getWaitUdpSendingMillisecond()?[3,8]:[3,1];case 8:return[2,this.mIsSuc]}}))}))},t.prototype.__listenAsyn=function(){var e=this;this.logger.info("__listenAsyn() start");var t=this.mApSsid,r=this.mApPassword,s=Date.now(),i=byteUtil.convertUint8toByte(t.length+r.length+9);this.logger.info("expectOneByte: "+i);this.mSocketServer.on("recieveCorrectMsg",(function(t){e.mIsInterrupt||(e.logger.info("RECIEVE_MSG",t),function(t){var r=t.message,o=t.remoteInfo,a=-1,n=new Int8Array(r);if(e.logger.info("Int8Array",{data:n}),a=n?tslib_1.__read(n,1)[0]:-1,e.logger.info("receiveOneByte: "+a),a!==i)e.logger.info("receive rubbish message, just ignore");else{e.logger.info("receive correct broadcast");var c=Date.now()-s,l=Number(e.mParameter.getWaitUdpTotalMillisecond()-c);if(l<0)e.logger.error({msg:"esptouch  receive timeout"});else if(e.logger.info("mSocketServer's new timeout is "+l+" milliseconds"),e.logger.info("receive correct broadcast"),n){var u=byteUtil.parseBssid(n,e.mParameter.getEsptouchResultOneLen(),e.mParameter.getEsptouchResultMacLen()),m=parseInetAddr(n,e.mParameter.getEsptouchResultOneLen()+e.mParameter.getEsptouchResultMacLen(),e.mParameter.getEsptouchResultIpLen());e.__putEsptouchResult(!0,u,m,o)}}}(t),e.mIsSuc=e.mEsptouchResultList.length>=e.mParameter.getExpectTaskResultCount(),e.mIsSuc&&(e.logger.info("__listenAsyn() finish"),e.interrupt()))}))},t.prototype.__putEsptouchResult=function(e,t,r,s){var i,o,a=this.mBssidTaskSucCountMap[t];if(void 0===a&&(a=0),++a,this.logger.info("PUT_ESPTOUCH_RESULT:__putEsptouchResult(): count = "+a),this.mBssidTaskSucCountMap[t]=a,a>=this.mParameter.getThresholdSucBroadcastCount()){var n=!1;try{for(var c=tslib_1.__values(this.mEsptouchResultList),l=c.next();!l.done;l=c.next()){if(l.value.bssid===t){n=!0;break}}}catch(e){i={error:e}}finally{try{l&&!l.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}if(!n){this.logger.info("PUT_ESPTOUCH_RESULT:put one more result bssid = "+t+",\n      address = "+r+",\n      the remoteInfo from weapp"+JSON.stringify(s)+"\n      ");var u={isSuc:e,bssid:t,inetAddress:r,remoteInfo:s};this.mEsptouchResultList.push(u)}}else this.logger.info("PUT_ESPTOUCH_RESULT:__putEsptouchResult(): count = "+a+", isn't enough")},t.prototype.__getEsptouchResultList=function(){return this.logger.info("GET_RESULT",{data:this.mEsptouchResultList}),this.mEsptouchResultList},t.prototype.interrupt=function(){return tslib_1.__awaiter(this,void 0,void 0,(function(){return tslib_1.__generator(this,(function(e){return this.mIsInterrupt||(this.mIsCancelled=!0,this.mIsInterrupt=!0,this.mSocketClient.interrupt(),delete this.mSocketClient),[2]}))}))},t.prototype.isCancelled=function(){return this.mIsCancelled},t.prototype.setPackageBroadcast=function(e){this.mParameter.setBroadcast(e)},t}(qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.EventEmitter);exports.SmartConfig=SmartConfig;
//# sourceMappingURL=SmartConfig.js.map
}, function(modId) { var map = {"../base/esptouchTaskParameter":1666529690781,"../protocol/EsptouchGenerator":1666529690782}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690781, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.esptouchTaskParameter=exports.EsptouchTaskParameter=void 0;var EsptouchTaskParameter=function(){function t(){this.mBroadcast=!0,this.mIntervalGuideCodeMillisecond=20,this.mIntervalDataCodeMillisecond=20,this.mTimeoutGuideCodeMillisecond=1500,this.mTimeoutDataCodeMillisecond=5e3,this.mTotalRepeatTime=1,this.mEsptouchResultOneLen=1,this.mEsptouchResultMacLen=6,this.mEsptouchResultIpLen=4,this.mEsptouchResultTotalLen=11,this.mPortListening=18266,this.mTargetPort=7001,this.mWaitUdpReceivingMilliseond=25e3,this.mWaitUdpSendingMillisecond=45e3,this.mThresholdSucBroadcastCount=1,this.mExpectTaskResultCount=1,this._datagramCount=0}return t.prototype.getIntervalGuideCodeMillisecond=function(){return this.mIntervalGuideCodeMillisecond},t.prototype.getIntervalDataCodeMillisecond=function(){return this.mIntervalDataCodeMillisecond},t.prototype.getTimeoutGuideCodeMillisecond=function(){return this.mTimeoutGuideCodeMillisecond},t.prototype.getTimeoutDataCodeMillisecond=function(){return this.mTimeoutDataCodeMillisecond},t.prototype.getTimeoutTotalCodeMillisecond=function(){return this.mTimeoutGuideCodeMillisecond+this.mTimeoutDataCodeMillisecond},t.prototype.getTotalRepeatTime=function(){return this.mTotalRepeatTime},t.prototype.getEsptouchResultOneLen=function(){return this.mEsptouchResultOneLen},t.prototype.getEsptouchResultMacLen=function(){return this.mEsptouchResultMacLen},t.prototype.getEsptouchResultIpLen=function(){return this.mEsptouchResultIpLen},t.prototype.getEsptouchResultTotalLen=function(){return this.mEsptouchResultTotalLen},t.prototype.getPortListening=function(){return this.mPortListening},t.prototype.getTargetHostname=function(){if(this.mBroadcast)return"255.255.255.255";var t=this.__getNextDatagramCount();return"234."+t+"."+t+"."+t},t.prototype.getTargetPort=function(){return this.mTargetPort},t.prototype.getWaitUdpReceivingMillisecond=function(){return this.mWaitUdpReceivingMilliseond},t.prototype.getWaitUdpSendingMillisecond=function(){return this.mWaitUdpSendingMillisecond},t.prototype.getWaitUdpTotalMillisecond=function(){return this.mWaitUdpReceivingMilliseond+this.mWaitUdpSendingMillisecond},t.prototype.setWaitUdpTotalMillisecond=function(t){if(t<this.mWaitUdpReceivingMilliseond+this.getTimeoutTotalCodeMillisecond())throw new Error("waitUdpTotalMillisecod is less than \n      "+this.mWaitUdpReceivingMilliseond+" "+this.getTimeoutTotalCodeMillisecond()+"\n      ");this.mWaitUdpSendingMillisecond=t-this.mWaitUdpReceivingMilliseond},t.prototype.getThresholdSucBroadcastCount=function(){return this.mThresholdSucBroadcastCount},t.prototype.getExpectTaskResultCount=function(){return this.mExpectTaskResultCount},t.prototype.setExpectTaskResultCount=function(t){this.mExpectTaskResultCount=t},t.prototype.setBroadcast=function(t){this.mBroadcast=t},t.prototype.__getNextDatagramCount=function(){return 1+this._datagramCount++%100},t}();exports.EsptouchTaskParameter=EsptouchTaskParameter,exports.esptouchTaskParameter=new EsptouchTaskParameter;
//# sourceMappingURL=esptouchTaskParameter.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690782, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.EsptouchGenerator=void 0;var qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),DatumCode_1=require("./DatumCode"),GuideCode_1=require("./GuideCode"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,EsptouchGenerator=function(){function e(e,t,r,o,s){console.log("inetAddress",o);var i=(new GuideCode_1.GuideCode).getU8s();this.mGcBytes2=new Array(i.length);for(var u=0;u<this.mGcBytes2.length;u++)this.mGcBytes2[u]=byteUtil.getSpecBytesFromChar(i[u]);var d=new DatumCode_1.DatumCode(e,t,r,o,s).getU8s();this.mDcBytes2=new Array(d.length);for(u=0;u<this.mDcBytes2.length;u++)this.mDcBytes2[u]=byteUtil.getSpecBytesFromChar(d[u])}return e.prototype.getGCBytes2=function(){return this.mGcBytes2},e.prototype.getDCBytes2=function(){return this.mDcBytes2},e}();exports.EsptouchGenerator=EsptouchGenerator;
//# sourceMappingURL=EsptouchGenerator.js.map
}, function(modId) { var map = {"./DatumCode":1666529690783,"./GuideCode":1666529690785}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690783, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.DatumCode=void 0;var tslib_1=require("tslib"),qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),qcloud_iotexplorer_appdev_plugin_wificonf_core_1=require("qcloud-iotexplorer-appdev-plugin-wificonf-core"),DataCode_1=require("./DataCode"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,CRC8=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.CRC8,formatInetAddr=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.formatInetAddr,DatumCode=function(){function t(t,e,o,a,r){this.EXTRA_LEN=40,this.EXTRA_HEAD_LEN=5,this.DATA_CODE_LEN=6;var i=0,n=o.length,s=new CRC8;s.update(t);var d=byteUtil.convertNumberToChar(s.getValue());s.reset(),s.update(e);var l=byteUtil.convertNumberToChar(s.getValue()),_=t.length,u=formatInetAddr(a),h=u.length,C=byteUtil.convertNumberToChar(this.EXTRA_HEAD_LEN+h+n+_);this.mDataCodes=[],this.mDataCodes.push(new DataCode_1.DataCode(C,0)),i^=C,this.mDataCodes.push(new DataCode_1.DataCode(n,1)),i^=n,this.mDataCodes.push(new DataCode_1.DataCode(d,2)),i^=d,this.mDataCodes.push(new DataCode_1.DataCode(l,3)),i^=l;for(var p=0;p<h;++p){i^=v=byteUtil.convertByte2Uint8(u[p]),this.mDataCodes.push(new DataCode_1.DataCode(v,p+this.EXTRA_HEAD_LEN))}for(p=0;p<o.length;p++){i^=v=byteUtil.convertByte2Uint8(o[p]),this.mDataCodes.push(new DataCode_1.DataCode(v,p+this.EXTRA_HEAD_LEN+h))}for(p=0;p<t.length;p++){i^=v=byteUtil.convertByte2Uint8(t[p]),this.mDataCodes.push(new DataCode_1.DataCode(v,p+this.EXTRA_HEAD_LEN+h+n))}this.mDataCodes.splice(4,0,new DataCode_1.DataCode(i,4));var D=this.EXTRA_HEAD_LEN;for(p=0;p<e.length;p++){var c=C+p,v=byteUtil.convertByte2Uint8(e[p]),y=new DataCode_1.DataCode(v,c);D>=this.mDataCodes.length?this.mDataCodes.push(y):this.mDataCodes.splice(D,0,y),D+=4}}return t.prototype.getBytes=function(){var t=new Int8Array(this.mDataCodes.length*this.DATA_CODE_LEN),e=0;return this.mDataCodes.forEach((function(o){o.getBytes().forEach((function(o){t[e++]=o}))})),t},t.prototype.toString=function(){var t,e,o="",a=this.getBytes();try{for(var r=tslib_1.__values(a),i=r.next();!i.done;i=r.next()){var n=i.value,s=byteUtil.convertByte2HexString(n);o+="0x",1===s.length&&(o+="0"),o=o+s+" "}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}return o},t.prototype.getU8s=function(){for(var t,e,o=this.getBytes(),a=o.length/2,r=new Uint16Array(a),i=0;i<a;i++)t=o[2*i],e=o[2*i+1],r[i]=byteUtil.convertNumberToChar(byteUtil.combine2bytesToU16(t,e)+this.EXTRA_LEN);return r},t}();exports.DatumCode=DatumCode;
//# sourceMappingURL=DatumCode.js.map
}, function(modId) { var map = {"./DataCode":1666529690784}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690784, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.DataCode=void 0;var qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),qcloud_iotexplorer_appdev_plugin_wificonf_core_1=require("qcloud-iotexplorer-appdev-plugin-wificonf-core"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,CRC8=qcloud_iotexplorer_appdev_plugin_wificonf_core_1.utils.CRC8,DataCode=function(){function t(t,e){if(this.DATA_CODE_LEN=6,this.INDEX_MAX=127,e>this.INDEX_MAX)throw"index > INDEX_MAX";var o=byteUtil.splitUint8To2bytes(t);this.mDataHigh=o[0],this.mDataLow=o[1];var i=new CRC8;i.update(byteUtil.convertUint8toByte(t)),i.update(e);var r=byteUtil.splitUint8To2bytes(byteUtil.convertNumberToChar(i.getValue()));this.mCrcHigh=r[0],this.mCrcLow=r[1],this.mSeqHeader=byteUtil.convertNumberToByte(e)}return t.prototype.getBytes=function(){var t=new Int8Array(this.DATA_CODE_LEN);return t[0]=0,t[1]=byteUtil.combine2bytesToOne(this.mCrcHigh,this.mDataHigh),t[2]=1,t[3]=this.mSeqHeader,t[4]=0,t[5]=byteUtil.combine2bytesToOne(this.mCrcLow,this.mDataLow),t},t.prototype.toString=function(){for(var t="",e=this.getBytes(),o=0;o<this.DATA_CODE_LEN;o++){var i=byteUtil.convertByte2HexString(e[o]);t+="0x",1===i.length&&(t+="0"),t=t+i+" "}return t},t.prototype.getU8s=function(){throw"DataCode don't support getU8s()"},t}();exports.DataCode=DataCode;
//# sourceMappingURL=DataCode.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1666529690785, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.GuideCode=void 0;var qcloud_iotexplorer_appdev_sdk_1=require("qcloud-iotexplorer-appdev-sdk"),byteUtil=qcloud_iotexplorer_appdev_sdk_1.AppDevSdk.utils.byteUtil,GuideCode=function(){function e(){this.GUIDE_CODE_LEN=4}return e.prototype.toString=function(){for(var e="",t=this.getU8s(),o=0;o<this.GUIDE_CODE_LEN;o++){e=(e+="0x")+byteUtil.convertU8ToHexString(t[o])+" "}return e},e.prototype.getU8s=function(){var e=new Uint16Array(this.GUIDE_CODE_LEN);return e[0]=515,e[1]=514,e[2]=513,e[3]=512,e},e}();exports.GuideCode=GuideCode;
//# sourceMappingURL=GuideCode.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1666529690776);
})()
//# sourceMappingURL=index.js.map