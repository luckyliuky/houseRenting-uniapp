"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    common_vendor.wx$1.login({
      success: (res) => {
        if (res.code) {
          common_vendor.wx$1.request({
            url: "http://localhost:3000/api/auth/wxLogin",
            method: "POST",
            data: {
              code: res.code
            },
            success: (result) => {
              const {
                token
              } = result.data.data;
              common_vendor.wx$1.setStorageSync("token", token);
            },
            fail: (error) => {
              console.error("登录失败：", error);
            }
          });
        }
      }
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/desktop/work/houseRenting-uniapp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
