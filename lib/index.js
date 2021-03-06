'use strict';

export default {
  install: function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var _this = this;

        var filters = this.$options.filters;

        var assets = function assets(name) {
          if (typeof filters[name] === 'undefined') {
            filters[name] = function () {
              for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
              }

              return (_this.$i18n && _this['$' + name]) ? _this['$' + name].apply(_this, arg) : arg[0];
            };
          }
        };
        assets('t');
        assets('tc');
        assets('te');
      },
      beforeDestroy: function beforeDestroy() {
        var filters = this.$options.filters;

        if (filters.t) { delete filters.t; }
        if (filters.te) { delete filters.te; }
        if (filters.tc) { delete filters.tc; }
      }
    });
  }
};
