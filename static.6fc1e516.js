(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(15);

var _reactHelmet = __webpack_require__(53);

var _browser = __webpack_require__(13);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(28));

var _RouteData = _interopRequireWildcard(__webpack_require__(54));

var _SiteData = _interopRequireWildcard(__webpack_require__(55));

var _Prefetch = _interopRequireDefault(__webpack_require__(56));

var _Routes = _interopRequireDefault(__webpack_require__(30));

var _Root = _interopRequireDefault(__webpack_require__(57));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export languageList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLanguageFromPathname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return replaceLanguageInPathname; });
// we assume all language codes are 2 characters long.
// if this changes we will need to update our logic.
var languageList=["en","fr"];function getLanguageFromPathname(pathname){var code=pathname.slice(1,3);if(languageList.indexOf(code)===-1){console.warn("Unrecognized language code in pathname (".concat(pathname,")"));// fallback to English
return"en";}return code;}function replaceLanguageInPathname(pathname,code){return"/".concat(code,"/").concat(pathname.slice(4));}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(48);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(50);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(51);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(5);

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(2);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/Clearfix.css
var Clearfix = __webpack_require__(91);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/Clearfix.jsx
/* harmony default export */ var containers_Clearfix = (function(){return external_react_default.a.createElement("div",{className:"clearfix"});});
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(4);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/utils.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/PrevNextLinks.css
var PrevNextLinks = __webpack_require__(92);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/PrevNextLinks.jsx
/* harmony default export */ var containers_PrevNextLinks = (function(_ref){var prevPages=_ref.prevPages,nextPages=_ref.nextPages;if(!prevPages){// not on a sequence page
return null;}return external_react_default.a.createElement(router_["Location"],null,function(_ref2){var location=_ref2.location;var pathname=location.pathname;var languageCode=Object(utils["a" /* getLanguageFromPathname */])(pathname);var prevPage=prevPages[languageCode];var nextPage=nextPages[languageCode];return external_react_default.a.createElement("div",{className:"prev-next-wrapper"},prevPage?external_react_default.a.createElement(router_["Link"],{to:prevPage.route},"<"," ",prevPage.name):null,nextPage?external_react_default.a.createElement(router_["Link"],{to:nextPage.route},nextPage.name," ",">"):null);});});
// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/TableOfContents.jsx
var TableOfContents = __webpack_require__(16);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/DownloadZines.jsx
var DownloadZines = __webpack_require__(19);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/Footer.jsx
/* harmony default export */ var Footer = (function(_ref){var prevPages=_ref.prevPages,nextPages=_ref.nextPages;return external_react_default.a.createElement("div",{style:{marginBottom:"2rem"}},external_react_default.a.createElement(containers_PrevNextLinks,{prevPages:prevPages,nextPages:nextPages}),external_react_default.a.createElement(TableOfContents["a" /* default */],null),external_react_default.a.createElement(DownloadZines["a" /* default */],null));});
// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/ContentWrapper.css
var ContentWrapper = __webpack_require__(95);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/ContentWrapper.jsx
/* harmony default export */ var containers_ContentWrapper = __webpack_exports__["a"] = (Object(lib["withRouteData"])(function(_ref){var title=_ref.title,contents=_ref.contents,prevPages=_ref.prevPages,nextPages=_ref.nextPages,header=_ref.header,type=_ref.type,_ref$containerClassNa=_ref.containerClassName,containerClassName=_ref$containerClassNa===void 0?"":_ref$containerClassNa,_ref$headerClassName=_ref.headerClassName,headerClassName=_ref$headerClassName===void 0?"":_ref$headerClassName,_ref$contentClassName=_ref.contentClassName,contentClassName=_ref$contentClassName===void 0?"":_ref$contentClassName,children=_ref.children;return external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement(lib["Head"],{title:"".concat(external_i18next_default.a.t("site_title")," - ").concat(title)},external_react_default.a.createElement("meta",{property:"og:title",content:"".concat(type==="unionfaqs"?external_i18next_default.a.t("unionfaqs_prefix")+" ":"").concat(title)})),external_react_default.a.createElement("div",{style:{width:"100%"}},external_react_default.a.createElement("div",{style:{width:"100%",position:"relative"}},external_react_default.a.createElement("div",{className:"nav_sidebar"},external_react_default.a.createElement(TableOfContents["a" /* default */],null))),external_react_default.a.createElement("div",{className:"page ".concat(containerClassName)},header?header(title):external_react_default.a.createElement("h2",{className:headerClassName},title),children||external_react_default.a.createElement("div",{className:"page-content ".concat(contentClassName),dangerouslySetInnerHTML:{__html:contents}}),external_react_default.a.createElement(containers_Clearfix,null)),external_react_default.a.createElement(Footer,{prevPages:prevPages,nextPages:nextPages})));}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _axios = _interopRequireDefault(__webpack_require__(24));

var _utils = __webpack_require__(15);

var _Visibility = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 43;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context2.next = 42;
              break;
            }

            return _context2.abrupt("return", getRouteInfo('404', {
              priority: priority
            }));

          case 42:
            return _context2.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return");

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (routeInfo) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return");

          case 12:
            if (!(routeInfo && !routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 21;
              break;
            }

            if (!priority) {
              _context5.next = 18;
              break;
            }

            _context5.next = 16;
            return Template.preload();

          case 16:
            _context5.next = 20;
            break;

          case 18:
            _context5.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context5.abrupt("return", Template);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            _context6.next = 16;
            break;

          case 9:
            if (!(type === 'template')) {
              _context6.next = 14;
              break;
            }

            _context6.next = 12;
            return prefetchTemplate(path, options);

          case 12:
            _context6.next = 16;
            break;

          case 14:
            _context6.next = 16;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 16:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _swimmer = __webpack_require__(45);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _TableOfContents_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93);
/* harmony import */ var _TableOfContents_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TableOfContents_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony default export */ __webpack_exports__["a"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withSiteData"])(function(_ref){var tableOfContents=_ref.tableOfContents;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"toc-wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Location"],null,function(_ref2){var location=_ref2.location;var languageCode=Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getLanguageFromPathname */ "a"])(location.pathname);var contents=tableOfContents[languageCode];return contents.map(function(_ref3){var route=_ref3.route,title=_ref3.title,articleType=_ref3.articleType;var maybeUnionfaqs=articleType==="unionfaqs"?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"toc-unionfaqs"},i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t("unionfaqs_prefix")," "):null;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"toc-item",key:route},location.pathname===route||location.pathname===route+"/"?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"toc-item-active"},maybeUnionfaqs,title):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:route},maybeUnionfaqs,title));});}));}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(49)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _DownloadZines_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var _DownloadZines_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DownloadZines_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony default export */ __webpack_exports__["a"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Location"],null,function(_ref){var location=_ref.location;var pathname=location.pathname;var languageCode=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* getLanguageFromPathname */ "a"])(pathname);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"downloadzines-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{title:i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("download_zine"),href:"https://gameworkers.github.io/zine-gdc-2019/ZineRemaster_2020/GWUZine_Remaster.pdf"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"downloadzines-cover",src:"/images/cover_thumb_2020.jpg"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://gameworkers.github.io/zine-gdc-2019/ZineRemaster_2020/GWUZine_Remaster.pdf"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("download_zine"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/".concat(languageCode,"/endnotes")},i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("references_page"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/".concat(languageCode,"/how-to-print")},i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("printing_hints"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"/".concat(languageCode,"/older-versions")},i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("older_versions")))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"tc downloadzines-gwuintl"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://gameworkersunite.org"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("gwu_international")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{title:i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("gwu_international"),className:"gwu-intl-image",src:"/images/gwu-logo.svg"}))));});});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(17);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"C:/Users/robot/Documents/GitHub/zine-gdc-2019-site",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(46); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 32))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(32);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Article",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Article */).then(__webpack_require__.bind(null, 33))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Article');},resolve:function resolve(){return /*require.resolve*/(33);},chunkName:function chunkName(){return"src-containers-Article";}}),universalOptions);var t_2=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Redirect",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Redirect */).then(__webpack_require__.bind(null, 34))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Redirect');},resolve:function resolve(){return /*require.resolve*/(34);},chunkName:function chunkName(){return"src-containers-Redirect";}}),universalOptions);var t_3=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/BareArticle",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-BareArticle */).then(__webpack_require__.bind(null, 35))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/BareArticle');},resolve:function resolve(){return /*require.resolve*/(35);},chunkName:function chunkName(){return"src-containers-BareArticle";}}),universalOptions);var t_4=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Map",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Map */).then(__webpack_require__.bind(null, 36))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Map');},resolve:function resolve(){return /*require.resolve*/(36);},chunkName:function chunkName(){return"src-containers-Map";}}),universalOptions);var t_5=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/UnionFAQs",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-UnionFAQs */).then(__webpack_require__.bind(null, 37))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/UnionFAQs');},resolve:function resolve(){return /*require.resolve*/(37);},chunkName:function chunkName(){return"src-containers-UnionFAQs";}}),universalOptions);var t_6=C_Users_robot_Documents_GitHub_zine_gdc_2019_site_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/OpeningStatement",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-OpeningStatement */).then(__webpack_require__.bind(null, 38))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/OpeningStatement');},resolve:function resolve(){return /*require.resolve*/(38);},chunkName:function chunkName(){return"src-containers-OpeningStatement";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../src/pages/404.js':t_0,'../src/containers/Article':t_1,'../src/containers/Redirect':t_2,'../src/containers/BareArticle':t_3,'../src/containers/Map':t_4,'../src/containers/UnionFAQs':t_5,'../src/containers/OpeningStatement':t_6});var notFoundTemplate="../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(13);

var _StaticInfo = __webpack_require__(18);

var _utils = __webpack_require__(15);

var _Location = _interopRequireDefault(__webpack_require__(31));

var _Spinner = _interopRequireDefault(__webpack_require__(21));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;
var componentCache = new WeakMap();

function with404Prop(Component) {
  // If the wrapped Component is currently in cached, return it from cache.
  if (componentCache.has(Component)) {
    return componentCache.get(Component);
  } // Otherwise, create a new wrapped Component...


  var WrappedComponent = function WrappedComponent(props) {
    return _react.default.createElement(Component, _extends({
      is404: true
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }; // ...and cache it


  componentCache.set(Component, WrappedComponent);
  return WrappedComponent;
}

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getComponentForPath", function (routePath) {
      var Loader = _this.props.Loader; // Clean the path

      routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

      var Comp = _.templatesByPath[routePath]; // Detect a 404

      var is404 = routePath === '404'; // Detect a failed template

      if (_.templateErrorByPath[routePath]) {
        is404 = true;
        Comp = _.templatesByPath['404'];
      } // Detect an unloaded template
      // TODO:suspense - This will become a suspense resource


      if (!Comp) {
        if (is404) {
          throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
        }

        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return Loader;
      }

      return is404 ? with404Prop(Comp) : Comp;
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();
      var Comp = this.getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: this.getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(componentCache, "componentCache", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(with404Prop, "with404Prop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("404_message")));});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Article; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
function Article(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],null);}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(/*#__PURE__*/function(_React$PureComponent){_inherits(_class,_React$PureComponent);function _class(){_classCallCheck(this,_class);return _possibleConstructorReturn(this,_getPrototypeOf(_class).apply(this,arguments));}_createClass(_class,[{key:"componentDidMount",value:function componentDidMount(){// for Firefox which disabled meta http-equiv redirects
window.location.pathname=this.props.redirectPath;}},{key:"render",value:function render(){var redirectPath=this.props.redirectPath;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"refresh",content:"0; url=".concat(redirectPath)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Redirecting..."));}}]);return _class;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent)));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BareArticle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/** A component without a border, similar to the landing page. */function BareArticle(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{containerClassName:"bare-container",contentClassName:"bare-container-body",header:function header(){return null;}});}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameworkers_chapter_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _gameworkers_chapter_map_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gameworkers_chapter_map_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _Map_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96);
/* harmony import */ var _Map_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Map_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}window.WORLD_110M_JSON_PATH="/world-110m.json";window.WORLD_50M_JSON_PATH="/world-50m.json";var Map=/*#__PURE__*/function(_React$Component){_inherits(Map,_React$Component);function Map(props){var _this;_classCallCheck(this,Map);_this=_possibleConstructorReturn(this,_getPrototypeOf(Map).call(this,props));_this.state={zoom:0.9};_this.handleZoomIn=_this.handleZoomIn.bind(_assertThisInitialized(_this));_this.handleZoomOut=_this.handleZoomOut.bind(_assertThisInitialized(_this));return _this;}_createClass(Map,[{key:"handleZoomIn",value:function handleZoomIn(){this.setState(function(state){return{zoom:Math.min(state.zoom+0.5,20)};});}},{key:"handleZoomOut",value:function handleZoomOut(){this.setState(function(state){return{zoom:Math.max(state.zoom-0.5,1)};});}},{key:"render",value:function render(){var zoom=this.state.zoom;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentWrapper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{containerClassName:"map_container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"100%",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{position:"absolute",right:10,top:10,display:"flex",flexDirection:"column"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{disabled:zoom>=20,style:{marginBottom:10,opacity:zoom>=20?0.3:1},onClick:this.handleZoomIn},"\u2795"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{disabled:zoom<=1,style:{opacity:zoom<=1?0.3:1},onClick:this.handleZoomOut},"\u2796"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gameworkers_chapter_map_component__WEBPACK_IMPORTED_MODULE_1___default.a,{className:"chapter_map",centerLat:18,centerLng:13,height:450,markerScale:0.1,scale:205,width:780,enablePanning:true,zoom:this.state.zoom,tooltipClassName:"chapter_map_tooltip"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{style:{textAlign:"center",fontSize:"1.4rem",marginTop:"1rem"}},i18next__WEBPACK_IMPORTED_MODULE_2___default.a.t("find_local_chapter"))));}}]);return Map;}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnionFAQs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _UnionFAQs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _UnionFAQs_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UnionFAQs_css__WEBPACK_IMPORTED_MODULE_3__);
function UnionFAQs(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentWrapper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{containerClassName:"unionfaqs-container",contentClassName:"unionfaqs-container-body",header:function header(title){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"unionfaqs-header"},i18next__WEBPACK_IMPORTED_MODULE_1___default.a.t("unionfaqs_title")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,title));}});}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_TableOfContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _containers_DownloadZines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _OpeningStatement_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98);
/* harmony import */ var _OpeningStatement_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_OpeningStatement_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var openingStatement=_ref.openingStatement;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Location"],null,function(_ref2){var location=_ref2.location,navigate=_ref2.navigate;var pathname=location.pathname;var languageCode=Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* getLanguageFromPathname */ "a"])(pathname);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"],{title:i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t("site_title")}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"intro-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{alt:"Isabelle: Unionize!",className:"intro-image",src:"/images/isabelle-clearbg-inlined.svg"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:openingStatement.contents}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/".concat(languageCode,"/intro")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"intro-readzine"},i18next__WEBPACK_IMPORTED_MODULE_3___default.a.t("read_the_zine"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_TableOfContents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_DownloadZines__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null)));});}));

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-headroom");

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = {"meta":{"title":"Game Workers Unite Zine - GDC 2019","description":"Read the latest zine from Game Workers Unite!"},"404_message":"404! Couldn't find that page.","read_the_zine":"Read the Zine!","site_title":"GWU GDC 2019 Zine","header_title":"GDC 2019 Zine","unionfaqs_prefix":"UnionFAQs:","unionfaqs_title":"UnionFAQs","download_zine":"Download the printable PDF version to share with your coworkers and friends!","references_page":"Links and references for the print version","printing_hints":"Printing hints","older_versions":"Previous editions","gwu_international":"Game Workers Unite International","find_local_chapter":"Find your local chapter and get involved!"};

/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = {"meta":{"title":"Game Workers Unite Zine - GDC 2019","description":"Lisez le dernier zine de Game Workers Unite!"},"404_message":"404! Cette page est introuvable.","read_the_zine":"Lisez le Zine!","site_title":"Zine GWU GDC 2019","header_title":"Zine GDC 2019","unionfaqs_prefix":"UnionFAQs:","unionfaqs_title":"UnionFAQs","download_zine":"Téléchargez le zine!","references_page":"Page de référence","printing_hints":"Astuces pour l'impression","older_versions":"Éditions précédentes","gwu_international":"Game Workers Unite International","find_local_chapter":"Trouvez votre chapitre local et engagez vous!"};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@gameworkers/chapter-map-component");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(47);
module.exports = __webpack_require__(52);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(23).default;

var _require = __webpack_require__(13),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\robot\\Documents\\GitHub\\zine-gdc-2019-site\\artifacts\\react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(23).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(26),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(13),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\robot\\Documents\\GitHub\\zine-gdc-2019-site\\artifacts\\react-static-templates.js", function () {
    var _require3 = __webpack_require__(26),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 17,
	"./": 17,
	"./index": 17,
	"./index.js": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 49;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(18));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(99).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(13);

var _Spinner = _interopRequireDefault(__webpack_require__(21));

var _StaticInfo = __webpack_require__(18);

var _Routes = __webpack_require__(30);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo and its shared data yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (shouldLoadData(routeInfo)) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)
      // and merge it with the shared data


      var fullData = _objectSpread({}, routeInfo.data, routeInfo.sharedData);

      return children(fullData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));

function shouldLoadData(routeInfo) {
  if (!routeInfo || !routeInfo.data) {
    return true;
  }

  return shouldLoadSharedData(routeInfo);
}

function shouldLoadSharedData(routeInfo) {
  return hasPropHashes(routeInfo) && !routeInfo.sharedData;
}

function hasPropHashes(routeInfo) {
  return routeInfo.sharedHashesByProp && Object.keys(routeInfo.sharedHashesByProp).length > 0;
}

var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadData, "shouldLoadData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadSharedData, "shouldLoadSharedData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(hasPropHashes, "hasPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(24));

var _Spinner = _interopRequireDefault(__webpack_require__(21));

var _StaticInfo = __webpack_require__(18);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(14));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(15);

var _ = __webpack_require__(13);

var _Visibility = _interopRequireDefault(__webpack_require__(25));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(4);

var _ = __webpack_require__(13);

var _utils = __webpack_require__(15);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(58));

var _HashScroller = _interopRequireDefault(__webpack_require__(59));

var _StaticInfo = __webpack_require__(18);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template); // For a 404 route we will register the current route as invalid

      if (path === '404') {
        var currentPath = (0, _.getCurrentRoutePath)(); // As long as we didn't navigate to the 404.html page directly

        if (currentPath !== '404') {
          _.routeErrorByPath[currentPath] = true;
          _.templateErrorByPath[currentPath] = true;
        }
      }
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(15);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(9);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(29));

var _Location = _interopRequireDefault(__webpack_require__(31));

var _scrollTo = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".header-logo-image {\r\n  max-height: 3.5rem;\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.header-after-logo {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 568px) {\r\n  .header-after-logo {\r\n    display: unset;\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n.head {\r\n  min-height: 4rem;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.head a {\r\n  font-size: 1.5rem;\r\n  text-decoration: none;\r\n}\r\n\r\n.head-right {\r\n  margin-left: auto;\r\n  margin-right: 10px;\r\n}\r\n\r\n.headroom-wrapper {\r\n  margin-top: 30px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.headroom {\r\n  -webkit-transition: -webkit-box-shadow 0.5s ease-out;\r\n  transition: -webkit-box-shadow 0.5s ease-out;\r\n  -o-transition: box-shadow 0.5s ease-out;\r\n  transition: box-shadow 0.5s ease-out;\r\n  transition: box-shadow 0.5s ease-out, -webkit-box-shadow 0.5s ease-out;\r\n  background-color: #eee;\r\n}\r\n\r\n.headroom--pinned {\r\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);\r\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, "/* begin reboot */\r\n/* stylelint-disable */\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -ms-overflow-style: scrollbar;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\narticle,\r\naside,\r\ndialog,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: #eee;\r\n  font-family: \"ProspectusS\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #101316;\r\n  text-align: left;\r\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; */\r\n  /* background-color: #fff; */\r\n}\r\n\r\n[tabindex=\"-1\"]:focus {\r\n  outline: none !important;\r\n}\r\n\r\nhr {\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  height: 0;\r\n  overflow: visible;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nabbr[title],\r\nabbr[data-original-title] {\r\n  text-decoration: underline;\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n  cursor: help;\r\n  border-bottom: 0;\r\n}\r\n\r\naddress {\r\n  margin-bottom: 1rem;\r\n  font-style: normal;\r\n  line-height: inherit;\r\n}\r\n\r\nol,\r\nul,\r\ndl {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndt {\r\n  font-weight: 700;\r\n}\r\n\r\ndd {\r\n  margin-bottom: 0.5rem;\r\n  margin-left: 0;\r\n}\r\n\r\nblockquote {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\npre,\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\npre {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  overflow: auto;\r\n  -ms-overflow-style: scrollbar;\r\n}\r\n\r\nfigure {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\nimg {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\na,\r\narea,\r\nbutton,\r\n[role=\"button\"],\r\ninput:not([type=\"range\"]),\r\nlabel,\r\nselect,\r\nsummary,\r\ntextarea {\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\ncaption {\r\n  padding-top: 0.75rem;\r\n  padding-bottom: 0.75rem;\r\n  color: #868e96;\r\n  text-align: left;\r\n  caption-side: bottom;\r\n}\r\n\r\nth {\r\n  text-align: inherit;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nbutton {\r\n  border-radius: 0;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\noptgroup,\r\ntextarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\ninput[type=\"date\"],\r\ninput[type=\"time\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"month\"] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n\r\nfieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\nlegend {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding: 0;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n  color: inherit;\r\n  white-space: normal;\r\n}\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type=\"search\"] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\r\n}\r\n\r\noutput {\r\n  display: inline-block;\r\n}\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n", ""]);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Imports
var urlEscape = __webpack_require__(63);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(65));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(66));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(67));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(68));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(69));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(70));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(71));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(72));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(73));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(74));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(75));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(76));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(77));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(78));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(79));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(80));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(81));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(82));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(83));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(84));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(85));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(86));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(87));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(88));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(89));

// Module
exports.push([module.i, "@font-face {\r\n  font-family: \"ProspectusS\";\r\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___1___ + ") format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ProspectusS\";\r\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ProspectusS\";\r\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___5___ + ") format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Liberation Mono\";\r\n  src: url(" + ___CSS_LOADER_URL___6___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___7___ + ") format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Liberation Mono\";\r\n  src: url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Liberation Mono\";\r\n  src: url(" + ___CSS_LOADER_URL___10___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___11___ + ") format(\"woff\");\r\n  font-weight: bold;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Liberation Mono\";\r\n  src: url(" + ___CSS_LOADER_URL___12___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___13___ + ") format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\");\r\n  font-weight: 100;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___16___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___17___ + ") format(\"woff\");\r\n  font-weight: 100;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___18___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___19___ + ") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___20___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___21___ + ") format(\"woff\");\r\n  font-weight: 400;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___22___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___23___ + ") format(\"woff\");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Metropolis\";\r\n  src: url(" + ___CSS_LOADER_URL___24___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL___25___ + ") format(\"woff\");\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Reg.58389eb5.woff2";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Reg.419b2025.woff";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Italic.1ac62f23.woff2";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Italic.4f65767d.woff";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Bold.c6ddf65c.woff2";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-ProspectusS-Bold.9e282fa4.woff";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-Bold.de351e0b.woff2";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-Bold.409791f4.woff";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-Italic.60795d7f.woff2";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-Italic.59de95c0.woff";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-BoldItalic.03b83fb4.woff2";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono-BoldItalic.1b829035.woff";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono.91dae36b.woff2";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-LiberationMono.0afe386d.woff";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-light.28d23b22.woff2";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-light.6f7c67aa.woff";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-lightitalic.52a02f70.woff2";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-lightitalic.cf1951e4.woff";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-medium.a75481b9.woff2";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-medium.050f7768.woff";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-mediumitalic.45c897e4.woff2";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-mediumitalic.e5ce899e.woff";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-bold.cf5060dd.woff2";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-bold.7a4a3035.woff";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-bolditalic.2e0cc256.woff2";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/subset-Metropolis-bolditalic.b0aa83a2.woff";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, "a {\r\n  color: unset;\r\n}\r\n\r\n.flex-wrap {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 0 2px;\r\n}\r\n\r\n.page {\r\n  margin-bottom: 20px;\r\n  padding: 5px;\r\n  background: rgb(252, 252, 254);\r\n  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n@media (min-width: 568px) {\r\n  .container {\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .page {\r\n    padding: 50px;\r\n  }\r\n}\r\n\r\n/* below should only apply to endnotes page, but no time to\r\n * make a new component right now so commenting it out\r\n */\r\n/* .page-content ol > li {\r\n  margin-left: -0.5rem;\r\n}\r\n\r\n.page-content ol > li > * {\r\n  margin-left: 0.5rem;\r\n} */\r\n\r\n.page-content > *:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (min-width: 808px) {\r\n  .container {\r\n    width: 800px;\r\n  }\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\n.flex {\r\n  -ms-flex: 1 1;\r\n      flex: 1 1;\r\n}\r\n.tl {\r\n  text-align: left;\r\n}\r\n\r\n.tc {\r\n  text-align: center;\r\n}\r\n\r\n.tr {\r\n  text-align: right;\r\n}\r\n\r\n.head,\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: \"Metropolis\";\r\n  font-weight: normal;\r\n}\r\n\r\n.page > h2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n/* classes for images in markdown files */\r\n\r\n.md-img {\r\n  text-align: center;\r\n}\r\n\r\n.md-img::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 1px;\r\n  height: var(--offset);\r\n  margin-right: 1px;\r\n}\r\n\r\n.md-img.off-1::before {\r\n  height: 1em;\r\n}\r\n.md-img.off-2::before {\r\n  height: 2em;\r\n}\r\n.md-img.off-3::before {\r\n  height: 3em;\r\n}\r\n.md-img.off-4::before {\r\n  height: 4em;\r\n}\r\n.md-img.off-5::before {\r\n  height: 5em;\r\n}\r\n.md-img.off-6::before {\r\n  height: 6em;\r\n}\r\n.md-img.off-7::before {\r\n  height: 7em;\r\n}\r\n.md-img.off-8::before {\r\n  height: 8em;\r\n}\r\n.md-img.off-9::before {\r\n  height: 9em;\r\n}\r\n.md-img.off-10::before {\r\n  height: 10em;\r\n}\r\n\r\n.md-img img {\r\n  max-width: 80%;\r\n  max-height: 400px;\r\n  margin-bottom: 20px;\r\n  clear: both;\r\n}\r\n\r\n@media (min-width: 720px) {\r\n  .md-img.left::before {\r\n    float: left;\r\n  }\r\n\r\n  .md-img.right::before {\r\n    float: right;\r\n  }\r\n\r\n  .md-img.left img,\r\n  .md-img.right img {\r\n    max-width: 40%;\r\n  }\r\n\r\n  .md-img.left img {\r\n    float: left;\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .md-img.right img {\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n  }\r\n}\r\n\r\nblockquote {\r\n  margin: 0 0 1rem 1rem;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.md-attribution {\r\n  text-align: right;\r\n  font-size: 80%;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.md-margin {\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.md-flex-group {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.md-flex-group > a {\r\n  width: 150px;\r\n  margin: 20px;\r\n}\r\n\r\n.md-flex-group > a > img {\r\n  max-width: 100%;\r\n}\r\n", ""]);



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".clearfix {\r\n  clear: both;\r\n}\r\n", ""]);



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".prev-next-wrapper {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n}\r\n", ""]);



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".toc-wrapper {\r\n  margin: 30px 0;\r\n  padding: 20px;\r\n  background-color: #eae0e0;\r\n  text-align: center;\r\n}\r\n\r\n.toc-item {\r\n  display: inline-block;\r\n}\r\n\r\n.toc-item:not(:last-child)::after {\r\n  margin: 0 10px;\r\n  content: \"·\";\r\n}\r\n\r\n.toc-item-active {\r\n  font-weight: bold;\r\n}\r\n\r\n.toc-unionfaqs {\r\n  font-family: \"Metropolis\";\r\n  font-size: 80%;\r\n  color: rgb(0, 0, 196);\r\n}\r\n", ""]);



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".downloadzines-cover {\r\n  max-width: 160px;\r\n  margin: 0 1rem 0 0.5rem;\r\n}\r\n\r\n.downloadzines-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  max-width: 470px;\r\n  padding: 10px;\r\n  margin: 0 auto 1rem;\r\n  border-radius: 5px;\r\n  background-color: rgb(246, 246, 255);\r\n  -webkit-box-shadow: 0 0 1px rgb(0, 0, 255);\r\n          box-shadow: 0 0 1px rgb(0, 0, 255);\r\n}\r\n\r\n.downloadzines-info {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.gwu-intl-image {\r\n  max-height: 5rem;\r\n  margin: 0.5em auto 1em;\r\n  display: block;\r\n}\r\n", ""]);



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".nav_sidebar .toc-wrapper {\r\n  display: none;\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item::after {\r\n  content: \"\";\r\n  margin: 0;\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item > span {\r\n  font-weight: normal !important;\r\n  display: block;\r\n  position: relative;\r\n  -webkit-transition: -webkit-transform 0.2s ease;\r\n  transition: -webkit-transform 0.2s ease;\r\n  -o-transition: transform 0.2s ease;\r\n  transition: transform 0.2s ease;\r\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item > span::before {\r\n  content: \"\\25b6\";\r\n  position: absolute;\r\n  left: -1.2em;\r\n  top: 0.2em;\r\n  font-size: 0.8em;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  -webkit-transition: opacity 0.2s ease;\r\n  -o-transition: opacity 0.2s ease;\r\n  transition: opacity 0.2s ease;\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item > span.toc-item-active {\r\n  -webkit-transform: translateX(0.9em);\r\n      -ms-transform: translateX(0.9em);\r\n          transform: translateX(0.9em);\r\n}\r\n\r\n.nav_sidebar .toc-wrapper .toc-item > span.toc-item-active::before {\r\n  opacity: 0.75;\r\n}\r\n\r\n@media (min-width: 1450px) {\r\n  .nav_sidebar .toc-wrapper {\r\n    display: initial;\r\n    position: absolute;\r\n    left: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 50px;\r\n    margin-left: 1rem;\r\n    background: transparent;\r\n    text-align: left;\r\n    width: 300px;\r\n  }\r\n}\r\n", ""]);



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".chapter_map {\r\n  width: 100% !important;\r\n  height: 0 !important;\r\n  padding-bottom: 58%;\r\n  -ms-touch-action: none;\r\n      touch-action: none;\r\n}\r\n\r\n.map_container {\r\n  width: 100%;\r\n}\r\n\r\n.chapter_map_tooltip {\r\n  max-width: 220px;\r\n}\r\n", ""]);



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".page.unionfaqs-container {\r\n  border-radius: 5px;\r\n  background-color: rgb(246, 246, 255);\r\n  -webkit-box-shadow: 0 0 1px rgb(0, 0, 255);\r\n          box-shadow: 0 0 1px rgb(0, 0, 255);\r\n}\r\n\r\n.unionfaqs-container-body {\r\n  font-family: \"Liberation Mono\";\r\n}\r\n\r\n.unionfaqs-header {\r\n  font-weight: bold;\r\n  color: rgb(0, 0, 196);\r\n  margin-bottom: 0.2rem;\r\n}\r\n", ""]);



/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, ".intro-container h2 {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  margin-bottom: 1.6rem;\r\n}\r\n\r\n.intro-image {\r\n  margin-left: 15px;\r\n  float: right;\r\n  max-width: 40%;\r\n}\r\n\r\n.intro-readzine {\r\n  text-align: center;\r\n}\r\n", ""]);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(22);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(5);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(4);

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(2);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "react-headroom"
var external_react_headroom_ = __webpack_require__(39);
var external_react_headroom_default = /*#__PURE__*/__webpack_require__.n(external_react_headroom_);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/utils.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/Header.css
var Header = __webpack_require__(60);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/containers/Header.jsx
/* harmony default export */ var containers_Header = (function(){return external_react_default.a.createElement(router_["Location"],null,function(_ref){var location=_ref.location,navigate=_ref.navigate;var pathname=location.pathname;var languageCode=Object(utils["a" /* getLanguageFromPathname */])(pathname);return external_react_default.a.createElement(external_react_headroom_default.a,null,external_react_default.a.createElement("div",{className:"container"},external_react_default.a.createElement("nav",{className:"head"},external_react_default.a.createElement("div",null,external_react_default.a.createElement(router_["Link"],{to:"/".concat(languageCode)},external_react_default.a.createElement("img",{alt:"Game Workers Unite",className:"header-logo-image",src:"/images/gwu-mag-logo.svg"}),external_react_default.a.createElement("span",{className:"header-after-logo"},external_i18next_default.a.t("header_title")))),external_react_default.a.createElement("div",{className:"head-right"},external_react_default.a.createElement("select",{value:languageCode,onChange:function onChange(e){var code=e.target.value;external_i18next_default.a.changeLanguage(code);navigate(Object(utils["b" /* replaceLanguageInPathname */])(pathname,code));},name:"language",id:"lang-select"},external_react_default.a.createElement("option",{value:"en"},"EN"),external_react_default.a.createElement("option",{value:"fr"},"FR"))))));});});
// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/reboot.css
var reboot = __webpack_require__(61);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/fontface.css
var fontface = __webpack_require__(62);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/app.css
var app = __webpack_require__(90);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/languages/en.json
var en = __webpack_require__(40);

// EXTERNAL MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/languages/fr.json
var fr = __webpack_require__(41);

// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/App.jsx
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var App_App=/*#__PURE__*/function(_React$PureComponent){_inherits(App,_React$PureComponent);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));var languageCode=Object(utils["a" /* getLanguageFromPathname */])(_this.props.location.pathname);external_i18next_default.a.init({lng:languageCode,resources:{en:{translation:en},fr:{translation:fr}}});return _this;}_createClass(App,[{key:"render",value:function render(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement(lib["Head"],{title:external_i18next_default.a.t("meta.title")},external_react_default.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),external_react_default.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),external_react_default.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),external_react_default.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),external_react_default.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),external_react_default.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),external_react_default.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),external_react_default.a.createElement("meta",{name:"description",content:external_i18next_default.a.t("meta.description")}),external_react_default.a.createElement("meta",{property:"og:title",content:external_i18next_default.a.t("meta.title")}),external_react_default.a.createElement("meta",{property:"og:description",content:external_i18next_default.a.t("meta.description")})),external_react_default.a.createElement(containers_Header,null),external_react_default.a.createElement("div",{className:"container"},external_react_default.a.createElement(lib["Routes"],null)));}}]);return App;}(external_react_default.a.PureComponent);function AppWithLocation(props){return external_react_default.a.createElement(router_["Location"],null,function(locationProps){return external_react_default.a.createElement(App_App,_extends({},props,locationProps));});}
// CONCATENATED MODULE: C:/Users/robot/Documents/GitHub/zine-gdc-2019-site/src/index.js
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (AppWithLocation);if(typeof document!=="undefined"){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById("root"));};src_render(AppWithLocation);if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.6fc1e516.js.map