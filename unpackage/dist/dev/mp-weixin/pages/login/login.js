"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const wxLogin = () => {
      common_vendor.wx$1.login({
        success: (res) => {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_0,
        c: common_vendor.o(wxLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "E:/desktop/work/houseRenting-uniapp/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
