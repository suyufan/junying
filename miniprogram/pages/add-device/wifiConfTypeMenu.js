const addDeviceByQrCode = require('./qrCode');

module.exports = (redirect = false) => {
  wx.showActionSheet({
    itemList: ['Wi-Fi 配网','扫码绑定设备'],
    success: ({ tapIndex }) => {
      const navigate = redirect ? wx.redirectTo : wx.navigateTo;
      switch (tapIndex) {
        case 0:
          navigate({
            url: '/pages/add-device/smart-config/smart-config',
          });
          break;
        case 1:
          addDeviceByQrCode();
          break;
      }
    },
    fail(err) {
      console.log('fail', err);
    }
  });
};
