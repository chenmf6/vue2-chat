webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setStorage;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

/**
 * Created by chenmf on 2017/6/26.
 */
var STORAGE_KEY = 'vue2-chat-session';

function setStorage(val) {
  sessionStorage.setItem(STORAGE_KEY, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(val));
}

function getStorage() {
  return sessionStorage.getItem(STORAGE_KEY);
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_SESSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SEND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELECT_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_FILTER_KEY; });
/**
 * Created by chenmf on 2017/6/23.
 */
var SET_SESSIONS = 'SET_SESSIONS';
var SEND_MESSAGE = 'SEND_MESSAGE';
var SELECT_SESSION = 'SELECT_SESSION';
var SET_FILTER_KEY = 'SET_FILTER_KEY';

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_storage__ = __webpack_require__(102);
/**
 * Created by chenmf on 2017/6/23.
 */









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* default */]);
var debug = "production" !== 'production';

var now = new Date();
var state = {
  // 当前用户
  user: {
    name: 'chenmf6',
    img: 'static/img/user-logo.jpg'
  },

  // 会话列表
  sessions: [{
    id: 1,
    user: {
      name: 'YesNo',
      img: 'static/img/yesno-logo.jpg'
    },
    messages: [{
      content: 'Ask me anything, and I will tell you "yes" or "no"',
      date: now
    }, {
      content: 'Questions usually end with a question mark.',
      date: now
    }]
  }, {
    id: 2,
    user: {
      name: 'vue',
      img: 'static/img/vue-logo.png'
    },
    messages: [{
      content: 'Hello!',
      date: now
    }, {
      content: '中文官网:https://cn.vuejs.org/',
      date: now
    }]
  }, {
    id: 3,
    user: {
      name: 'webpack',
      img: 'static/img/webpack-logo.jpg'
    },
    messages: [{
      content: 'http://webpack.github.io/',
      date: now
    }]
  }],

  // 当前会话
  currentSessionId: 1,

  // 筛选会话关键词
  filterKey: ''
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* default */].Store({
  state: state,
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  actions: __WEBPACK_IMPORTED_MODULE_4__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */],
  strict: debug,
  plugins: debug ? [__WEBPACK_IMPORTED_MODULE_2_vuex_dist_logger___default()()] : []
});

store.watch(function (state) {
  return state.sessions;
}, function (val) {
  return val ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_storage__["a" /* setStorage */])(val) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__api_storage__["a" /* setStorage */])([]);
}, {
  deep: true
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(381)
}
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(395),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-fcc0467c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/**
 * Created by chenmf on 2017/7/15.
 */


var baseUrl =  true ? 'https://yesno.wtf' : '';

/* harmony default export */ __webpack_exports__["a"] = ({
  getAnswer: function getAnswer(question, cb) {
    var answer = '';
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(baseUrl + '/api').then(function (res) {
      answer = res.data.answer;
      return cb(answer);
    }).catch(function (error) {
      answer = 'Error! Could not reach the API ' + error;
      return cb(answer);
    });
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(136);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].config.devtools = true;

__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].filter('time', function (date) {
  return new Date(date).toLocaleTimeString();
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */]({
  el: '#app',
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSessions", function() { return initSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSession", function() { return selectSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterKey", function() { return setFilterKey; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_storage__ = __webpack_require__(102);
/**
 * Created by chenmf on 2017/6/21.
 */



var initSessions = function initSessions(_ref) {
  var commit = _ref.commit;

  var data = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_storage__["b" /* getStorage */])());
  if (data && data.length) {
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_SESSIONS */], { sessions: data });
  }
};

var sendMessage = function sendMessage(_ref2, _ref3) {
  var commit = _ref2.commit;
  var content = _ref3.content,
      _ref3$self = _ref3.self,
      self = _ref3$self === undefined ? true : _ref3$self;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SEND_MESSAGE */], { content: content, self: self });
};

var selectSession = function selectSession(_ref4, id) {
  var commit = _ref4.commit;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SELECT_SESSION */], { id: id });
};

var setFilterKey = function setFilterKey(_ref5, key) {
  var commit = _ref5.commit;

  key = key.toLocaleLowerCase();
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* SET_FILTER_KEY */], { key: key });
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredSessions", function() { return filteredSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSession", function() { return currentSession; });
/**
 * Created by chenmf on 2017/6/23.
 */
var filteredSessions = function filteredSessions(state) {
  return state.sessions.filter(function (session) {
    return session.user.name.toLocaleLowerCase().indexOf(state.filterKey) !== -1;
  });
};

var currentSession = function currentSession(state) {
  return state.sessions.find(function (session) {
    return session.id === state.currentSessionId;
  });
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Card__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_SessionList__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_SessionList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_SessionList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Editor__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Message__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Message__);
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: { Card: __WEBPACK_IMPORTED_MODULE_0_components_Card___default.a, SessionList: __WEBPACK_IMPORTED_MODULE_1_components_SessionList___default.a, Editor: __WEBPACK_IMPORTED_MODULE_2_components_Editor___default.a, Message: __WEBPACK_IMPORTED_MODULE_3_components_Message___default.a },
  created: function created() {
    this.$store.dispatch('initSessions');
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(50);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchKey: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* mapState */])(['user']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(['filteredSessions'])),

  watch: {
    searchKey: function searchKey() {
      this.setKey();
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapActions */])(['setFilterKey']), {
    setKey: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function () {
      this.setFilterKey(this.searchKey);
    }, 150)
  })
});

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_yesno_teller__ = __webpack_require__(157);

//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])(['currentSessionId'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])(['sendMessage']), {
    keySend: function keySend(event) {
      if (event.ctrlKey && event.keyCode === 13 && this.content.length) {
        this.sendMessage({ content: this.content });
        // get yesno answer
        if (this.currentSessionId === 1) {
          var vm = this;
          var question = this.content;
          setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2__api_yesno_teller__["a" /* default */].getAnswer(question, function (answer) {
              vm.sendMessage({ content: answer, self: false });
            });
          }, 1000);
        }
        this.content = '';
      }
    }
  })
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iscroll__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iscroll__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Message',
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])(['user']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])({
    session: 'currentSession'
  })),
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this._initScroll();
    });
  },

  methods: {
    _initScroll: function _initScroll() {
      this.messageScroll = new __WEBPACK_IMPORTED_MODULE_2_iscroll___default.a(this.$refs.messageWrapper, {
        click: true
      });
    }
  },
  watch: {
    'session.messages': {
      deep: true,
      handler: function handler() {
        var _this2 = this;

        if (this.messageScroll) {
          this.$nextTick(function () {
            _this2.messageScroll.refresh();
            if (_this2.messageScroll.hasVerticalScroll) {
              var el = _this2.$refs.messageWrapper.querySelector('li:last-child');
              _this2.messageScroll.maxScrollY -= el.clientHeight;
              // this.messageScroll.scrollToElement(el, 300, 0, el.clientHeight);
            }
            _this2.messageScroll.scrollTo(0, _this2.messageScroll.maxScrollY, 300);
          });
        }
      }
    }
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(50);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapActions */])(['selectSession']),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* mapState */])(['currentSessionId']), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['filteredSessions']))
});

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(378)
}
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(392),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-426cdbca",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(377)
}
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(391),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-16110b27",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(380)
}
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(394),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-94575486",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(379)
}
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(393),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7939548a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "placeholder": "按 Ctrl + Enter 发送"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "keydown": _vm.keySend,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('header', [_c('img', {
    staticClass: "avatar",
    attrs: {
      "height": "40",
      "width": "40",
      "alt": _vm.user.name,
      "src": _vm.user.img
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.user.name))])]), _vm._v(" "), _c('footer', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchKey),
      expression: "searchKey"
    }],
    staticClass: "search",
    attrs: {
      "type": "text",
      "placeholder": "搜索会话..."
    },
    domProps: {
      "value": (_vm.searchKey)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchKey = $event.target.value
      }
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_c('ul', _vm._l((_vm.filteredSessions), function(item) {
    return _c('li', {
      key: item.id,
      class: {
        active: item.id === _vm.currentSessionId
      },
      on: {
        "click": function($event) {
          _vm.selectSession(item.id)
        }
      }
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "width": "30",
        "height": "30",
        "alt": item.user.name,
        "src": item.user.img
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.user.name))])])
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "messageWrapper",
    staticClass: "message"
  }, [(_vm.session) ? _c('ul', _vm._l((_vm.session.messages), function(item) {
    return _c('li', {
      ref: "messageList",
      refInFor: true
    }, [_c('p', {
      staticClass: "time"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("time")(item.date)))])]), _vm._v(" "), _c('div', {
      staticClass: "main",
      class: {
        self: item.self
      }
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "width": "30",
        "height": "30",
        "src": item.self ? _vm.user.img : _vm.session.user.img
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "text"
    }, _vm._l((item.content.split('\n')), function(line) {
      return _c('p', {
        staticClass: "line"
      }, [_vm._v("\n            " + _vm._s(line) + "\n          ")])
    }))])])
  })) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "sidebar"
  }, [_c('card'), _vm._v(" "), _c('session-list')], 1), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('message'), _vm._v(" "), _c('editor')], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(103);
/**
 * Created by chenmf on 2017/6/23.
 */


const mutations = {
  // 从localStorage中初始化会话列表
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* SET_SESSIONS */]] (state, {sessions}) {
    state.sessions = sessions;
  },

  // 发送消息
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* SEND_MESSAGE */]] (state, {content, self}) {
    let session = state.sessions.find(item => item.id === state.currentSessionId);
    session.messages.push({
      content: content,
      date: new Date(),
      self: self
    });
  },

  //  选择会话
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SELECT_SESSION */]] (state, {id}) {
    state.currentSessionId = id;
  },

  //  设置筛选关键词
  [__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* SET_FILTER_KEY */]] (state, {key}) {
    state.filterKey = key;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (mutations);


/***/ })

},[158]);
//# sourceMappingURL=app.a292df635f55b7077899.js.map