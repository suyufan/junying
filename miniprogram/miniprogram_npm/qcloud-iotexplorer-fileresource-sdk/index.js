module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1657335106949, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileSdkForH5=exports.FileSdkForMiniProgram=void 0;var FileSdkForH5_1=require("./FileSdkForH5");Object.defineProperty(exports,"FileSdkForH5",{enumerable:!0,get:function(){return FileSdkForH5_1.FileSdkForH5}});var FileSdkForMiniprogram_1=require("./FileSdkForMiniprogram");Object.defineProperty(exports,"FileSdkForMiniProgram",{enumerable:!0,get:function(){return FileSdkForMiniprogram_1.FileSdkForMiniProgram}});
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./FileSdkForH5":1657335106950,"./FileSdkForMiniprogram":1657335106952}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1657335106950, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileSdkForH5=void 0;var tslib_1=require("tslib"),FileSdk_1=tslib_1.__importDefault(require("./FileSdk")),spark_md5_1=tslib_1.__importDefault(require("spark-md5")),FileSdkForH5=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.appGetResourceUploadURL=function(t){return tslib_1.__awaiter(this,void 0,void 0,(function(){var r,i,s=this;return tslib_1.__generator(this,(function(o){switch(o.label){case 0:return t?(r=this.getfileHash(t),i="",[4,r.then((function(r){return tslib_1.__awaiter(s,void 0,void 0,(function(){var s;return tslib_1.__generator(this,(function(o){switch(o.label){case 0:return[4,e.prototype.getResourceUploadURL.call(this,t,r,this.sdk.productId)];case 1:return s=o.sent(),this.handleUpload(null==s?void 0:s.UploadUrl,t,r),i=null==s?void 0:s.ResourceName,[2]}}))}))}))]):(this.sdk.tips.showError("请先选择文件"),[2]);case 1:return o.sent(),[2,{ResourceName:i}]}}))}))},t.prototype.handleUpload=function(t,r,i){var s=this,o=new XMLHttpRequest;o.open("PUT",t,!0),o.onreadystatechange=function(){return tslib_1.__awaiter(s,void 0,void 0,(function(){var t;return tslib_1.__generator(this,(function(s){switch(s.label){case 0:if(4!==o.readyState||200!==o.status)return[3,4];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,e.prototype.createResource.call(this,r,i,this.sdk.productId)];case 2:return s.sent().ResourceName&&this.sdk.tips.showSuccess("文件上传成功"),[3,4];case 3:return t=s.sent(),this.sdk.tips.showError("上传失败,"+t.msg),[3,4];case 4:return[2]}}))}))},o.send(r)},t.prototype.getfileHash=function(e){var t=this;return new Promise((function(r){var i=new spark_md5_1.default.ArrayBuffer,s=new FileReader;s.onload=function(e){if(null==e?void 0:e.target){var t=e.target.result;i.append(t),r(i.end())}},s.onerror=function(){t.sdk.tips.showError("上传文件错误"+s.error)},s.readAsArrayBuffer(e)}))},t.prototype.handelDownToDevice=function(t){return tslib_1.__awaiter(this,void 0,void 0,(function(){return tslib_1.__generator(this,(function(r){switch(r.label){case 0:return[4,e.prototype.controlDeviceResource.call(this,t,this.sdk.deviceId)];case 1:return r.sent(),this.sdk.tips.showLoading("文件下发中",{type:"loading",canBeReplace:!0,duration:0,delayDuration:200,canClickClose:!1}),[2,e.prototype.getDeviceResource.call(this,t,this.sdk.deviceId)]}}))}))},t}(FileSdk_1.default);exports.FileSdkForH5=FileSdkForH5;
//# sourceMappingURL=FileSdkForH5.js.map
}, function(modId) { var map = {"./FileSdk":1657335106951}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1657335106951, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),FileSdk=function(){function e(e){var t=this;this.sdk=e,this.request=function(e,r){return t.sdk.requestTokenApi?t.sdk.requestTokenApi(e,r):t.sdk.requestApi(e,r)}}return e.prototype.getResourceUploadURL=function(e,t,r){return tslib_1.__awaiter(this,void 0,void 0,(function(){return tslib_1.__generator(this,(function(s){try{return[2,this.request("AppGetResourceUploadURL",{ProductId:r,UserResourceName:t,FileSize:e.size,ResourceVer:"0.0.1",ReadProtect:1})]}catch(e){console.log("AppGetResourceUploadURL错误")}return[2]}))}))},e.prototype.createResource=function(e,t,r){return tslib_1.__awaiter(this,void 0,void 0,(function(){return tslib_1.__generator(this,(function(s){return[2,this.request("AppCreateProductResource",{ProductId:r,UserResourceName:t,FileSize:e.size,ResourceVer:"0.0.1",FileHash:t,ResourceType:"FILE",ReadProtect:1})]}))}))},e.prototype.getDeviceResource=function(e,t){var r=this,s=Date.now()/1e3,i="";return new Promise((function(o){return tslib_1.__awaiter(r,void 0,void 0,(function(){var r,n,u,c=this;return tslib_1.__generator(this,(function(a){switch(a.label){case 0:r=Date.now()/1e3,n={DeviceId:t,ResourceName:e},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.request("AppDescribeDeviceResource",n)];case 2:return i=a.sent().Resource,[3,4];case 3:return a.sent(),[3,4];case 4:return i?o(i):u=setInterval((function(){return tslib_1.__awaiter(c,void 0,void 0,(function(){return tslib_1.__generator(this,(function(e){switch(e.label){case 0:r=Date.now()/1e3,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.request("AppDescribeDeviceResource",n)];case 2:return i=e.sent().Resource,[3,4];case 3:return e.sent(),[3,4];case 4:return(i||r-s>36)&&(clearInterval(u),o(i)),[2]}}))}))}),5e3),[2]}}))}))}))},e.prototype.controlDeviceResource=function(e,t){return tslib_1.__awaiter(this,void 0,void 0,(function(){var r;return tslib_1.__generator(this,(function(s){switch(s.label){case 0:return r={DeviceId:t,ResourceName:e,ResourceVer:"0.0.1",Method:"update"},[4,this.request("AppControlDeviceResource",r)];case 1:return s.sent(),[2]}}))}))},e}();exports.default=FileSdk;
//# sourceMappingURL=FileSdk.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1657335106952, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileSdkForMiniProgram=void 0;var tslib_1=require("tslib"),FileSdk_1=tslib_1.__importDefault(require("./FileSdk")),spark_md5_1=tslib_1.__importDefault(require("spark-md5")),FileSdkForMiniProgram=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(r,e),r.prototype.handleUpload=function(r,t){var i=this;return new Promise((function(s,a){var n=wx.getFileSystemManager();n.readFile({filePath:r.path,success:function(o){return tslib_1.__awaiter(i,void 0,void 0,(function(){var i,u,l,c=this;return tslib_1.__generator(this,(function(d){switch(d.label){case 0:return(i=new spark_md5_1.default.ArrayBuffer).append(o.data),u=i.end(!1),[4,e.prototype.getResourceUploadURL.call(this,r,u,t)];case 1:return l=d.sent().UploadUrl,wx.request({url:l,method:"PUT",data:n.readFileSync(r.path),success:function(){return tslib_1.__awaiter(c,void 0,void 0,(function(){var i,n;return tslib_1.__generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,e.prototype.createResource.call(this,r,u,t)];case 1:return(i=o.sent().ResourceName)&&(wx.showToast({title:"文件上传成功",icon:"success",duration:5e3}),s(i)),[3,3];case 2:return n=o.sent(),a(n.msg),wx.showToast({title:""+n.msg,icon:"error",duration:5e3}),[3,3];case 3:return[2]}}))}))}}),[2]}}))}))}})}))},r}(FileSdk_1.default);exports.FileSdkForMiniProgram=FileSdkForMiniProgram;
//# sourceMappingURL=FileSdkForMiniprogram.js.map
}, function(modId) { var map = {"./FileSdk":1657335106951}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1657335106949);
})()
//# sourceMappingURL=index.js.map