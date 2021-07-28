/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/src/ink-toner-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./resources/scss/styles.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./resources/scss/styles.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-step {\n  background: #e6e6e6;\n  height: 6rem;\n  line-height: 3rem;\n  vertical-align: middle;\n  display: inline-block;\n  position: relative;\n  margin: 8px 25px 8px 8px; }\n  .search-step:not(.mobile):not(:first-child)::before {\n    content: \"\";\n    position: absolute;\n    right: 100%;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 2rem solid transparent;\n    border-top: 3rem solid #e6e6e6;\n    border-bottom: 3rem solid #e6e6e6; }\n  .search-step:not(.mobile):not(:last-child)::after {\n    content: \"\";\n    position: absolute;\n    left: 100%;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-left: 2rem solid #e6e6e6;\n    border-top: 3rem solid transparent;\n    border-bottom: 3rem solid transparent; }\n  .search-step.done {\n    background: #94ba06; }\n    .search-step.done:not(.mobile):not(:first-child)::before {\n      border-top: 3rem solid #94ba06;\n      border-bottom: 3rem solid #94ba06; }\n    .search-step.done:not(.mobile):not(:last-child)::after {\n      border-left: 2rem solid #94ba06; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/src/ink-toner-search.js":
/*!**********************************************!*\
  !*** ./resources/js/src/ink-toner-search.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/styles.scss */ "./resources/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

Vue.component("ink-toner-search", {
  name: 'InkTonerSearch',
  delimiters: ["((", "))"],
  template: "<div :style=\"cssVars\" class=\"container bg-white p-3\">\n        <div class=\"m-2\">\n            <p class=\"display-3\">((title))</p>\n            <p class=\"my-3\">((description))</p>\n        </div>\n        <div class=\"row search-steps\">\n            <div class=\"search-step col-sm\" :class=\"hasSelection(selectedLevel2Category)\">\n                <div class=\"m-2\">\n                    <p class=\"h4\">1. Marke</p>\n                    <select class=\"custom-select\" v-model=\"selectedLevel2Category\">\n                        <option default :value=\"null\" selected>Bitte w\xE4hlen</option>\n                        <option v-for=\"category in level2Options\" :value=\"category\" :key=\"category.id\">((category.name))</option>\n                </select>\n                </div>\n            </div>\n            <div class=\"search-step col-sm\" :class=\"hasSelection(selectedLevel3Category)\">\n                <div class=\"m-2\">\n                    <p class=\"h4\">2. Suche nach</p>\n                    <select :disabled=\"!selectedLevel2Category\" class=\"custom-select\" v-model=\"selectedLevel3Category\">\n                        <option default :value=\"null\" selected>Bitte w\xE4hlen</option>\n                        <option v-for=\"category in level3Options\" :value=\"category\" :key=\"category.id\">((category.name))</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"search-step col-sm\" :class=\"hasSelection(selectedLevel4Category)\">\n                <div class=\"m-2\">\n                    <p v-if=\"level5Options.length > 0\" class=\"h4\">3. Serie</p>\n                    <p v-else class=\"h4\">3. Bitte w\xE4hlen</p>\n                    <select :disabled=\"!selectedLevel3Category\" class=\"custom-select\" v-model=\"selectedLevel4Category\">\n                        <option default :value=\"null\" selected>Bitte w\xE4hlen</option>\n                        <option v-for=\"category in level4Options\" :value=\"category\" :key=\"category.id\">((category.name))</option>\n                    </select>\n                </div>\n            </div>\n            <div v-if=\"level5Options.length > 0\" class=\"search-step col-sm\" :class=\"hasSelection(selectedLevel5Category)\">\n                <div class=\"m-2\">\n                    <p class=\"h4\">4. Druckermodell</p>\n                    <select :disabled=\"!selectedLevel4Category\" class=\"custom-select\" v-model=\"selectedLevel5Category\">\n                        <option default :value=\"null\" selected>Bitte w\xE4hlen</option>\n                        <option v-for=\"category in level5Options\" :value=\"category\" :key=\"category.id\">((category.name))</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>",
  props: ['title', 'description', 'level1Category', 'level2Categories', 'level3Categories', 'level4Categories', 'level5Categories', 'redirectUrlHash'],
  watch: {
    selectedLevel2Category: function selectedLevel2Category() {
      this.resetLevel3Selection();
      this.resetLevel4Selection();
      this.resetLevel5Selection();
    },
    selectedLevel3Category: function selectedLevel3Category() {
      this.resetLevel4Selection();
      this.resetLevel5Selection();
    },
    selectedLevel4Category: function selectedLevel4Category() {
      this.resetLevel5Selection();
    },
    reachedLastLevel: function reachedLastLevel() {
      if (this.hasNoMoreSelectionOptions) {
        this.redirectToMatchingProducts();
      }
    }
  },
  methods: {
    hasSelection: function hasSelection(category) {
      return category ? 'done' : '';
    },
    resetLevel3Selection: function resetLevel3Selection() {
      this.selectedLevel3Category = null;
    },
    resetLevel4Selection: function resetLevel4Selection() {
      this.selectedLevel4Category = null;
    },
    resetLevel5Selection: function resetLevel5Selection() {
      this.selectedLevel5Category = null;
    },
    redirectToMatchingProducts: function redirectToMatchingProducts() {
      if (this.targetUrl) {
        var url = document.location.origin + this.targetUrl;

        if (this.redirectUrlHash) {
          url += this.redirectUrlHash;
        }

        document.location.href = url;
      }
    }
  },
  data: function data() {
    return {
      selectedLevel2Category: null,
      selectedLevel3Category: null,
      selectedLevel4Category: null,
      selectedLevel5Category: null
    };
  },
  computed: {
    hasNoMoreSelectionOptions: function hasNoMoreSelectionOptions() {
      if (this.selectedLevel2Category && this.level3Options.length === 0) {
        return true;
      }

      if (this.selectedLevel3Category && this.level4Options.length === 0) {
        return true;
      }

      if (this.selectedLevel4Category && this.level5Options.length === 0) {
        return true;
      }

      return !!this.selectedLevel5Category;
    },
    cssVars: function cssVars() {
      return {
        '--primaryColor': "#aa6f28",
        '--secondaryColor': "#c29e9e"
      };
    },
    level2Options: function level2Options() {
      if (this.level1Category) {
        return this.level2Categories.sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      } else {
        return [];
      }
    },
    level3Options: function level3Options() {
      var _this = this;

      if (this.selectedLevel2Category) {
        return this.level3Categories.filter(function (category) {
          return category.parentCategoryId === _this.selectedLevel2Category.id;
        }).sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      } else {
        return [];
      }
    },
    level4Options: function level4Options() {
      var _this2 = this;

      if (this.selectedLevel3Category) {
        return this.level4Categories.filter(function (category) {
          return category.parentCategoryId === _this2.selectedLevel3Category.id;
        }).sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      } else {
        return [];
      }
    },
    level5Options: function level5Options() {
      var _this3 = this;

      if (this.selectedLevel4Category) {
        return this.level5Categories.filter(function (category) {
          return category.parentCategoryId === _this3.selectedLevel4Category.id;
        }).sort(function (a, b) {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      } else {
        return [];
      }
    },
    currentPathName: function currentPathName() {
      return window.location.pathname;
    },
    targetUrl: function targetUrl() {
      var targetUrl = "";

      function concatenateNameUrl(category) {
        targetUrl += "/".concat(category.nameUrl);
      }

      function concatenateNameUrlIfCategorySelected(category) {
        if (category) {
          concatenateNameUrl(category);
        }
      }

      concatenateNameUrl(this.level1Category);
      concatenateNameUrlIfCategorySelected(this.selectedLevel2Category);
      concatenateNameUrlIfCategorySelected(this.selectedLevel3Category);
      concatenateNameUrlIfCategorySelected(this.selectedLevel4Category);
      concatenateNameUrlIfCategorySelected(this.selectedLevel5Category); // Remove leading slash if it is present in the string

      return targetUrl;
    }
  }
});

/***/ }),

/***/ "./resources/scss/styles.scss":
/*!************************************!*\
  !*** ./resources/scss/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./resources/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=ink-toner-search.js.map