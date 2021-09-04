(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["debugManifests"] = factory();
	else
		root["debugManifests"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = /manifests\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifests", function() { return getManifests; });
var MANIFESTS_ARRAY = [
  {
    "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
    "alias": "OfficeUIFabricReact",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/office-ui-fabric-react-bundle/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "office-ui-fabric-react-bundle",
      "scriptResources": {
        "office-ui-fabric-react-bundle": {
          "type": "path",
          "path": "office-ui-fabric-react-bundle_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        }
      }
    }
  },
  {
    "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
    "alias": "SPLodashSubset",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-lodash-subset/dist/"
      ],
      "entryModuleId": "sp-lodash-subset",
      "scriptResources": {
        "sp-lodash-subset": {
          "type": "path",
          "path": "sp-lodash-subset_f27338a6e8aa6a7ceda8.js"
        }
      }
    }
  },
  {
    "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
    "alias": "SPCoreLibrary",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-core-library/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-core-library",
      "scriptResources": {
        "sp-core-library": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-core-library_default.js",
            "en-US": "sp-core-library_en-us.js",
            "qps-ploca": "sp-core-library_qps-ploca.js",
            "qps-ploc": "sp-core-library_qps-ploc.js",
            "en-GB": "sp-core-library_en-us.js",
            "en-NZ": "sp-core-library_en-us.js",
            "en-IE": "sp-core-library_en-us.js",
            "en-AU": "sp-core-library_en-us.js",
            "bn": "sp-core-library_en-us.js",
            "chr": "sp-core-library_en-us.js",
            "dv": "sp-core-library_en-us.js",
            "div": "sp-core-library_en-us.js",
            "en": "sp-core-library_en-us.js",
            "fil": "sp-core-library_en-us.js",
            "haw": "sp-core-library_en-us.js",
            "iu": "sp-core-library_en-us.js",
            "lo": "sp-core-library_en-us.js",
            "moh": "sp-core-library_en-us.js",
            "sq": "sp-core-library_en-us.js",
            "am": "sp-core-library_en-us.js",
            "hy": "sp-core-library_en-us.js",
            "mk": "sp-core-library_en-us.js",
            "bs": "sp-core-library_en-us.js",
            "my": "sp-core-library_en-us.js",
            "dz": "sp-core-library_en-us.js",
            "en-CY": "sp-core-library_en-us.js",
            "en-EG": "sp-core-library_en-us.js",
            "en-IL": "sp-core-library_en-us.js",
            "en-IS": "sp-core-library_en-us.js",
            "en-JO": "sp-core-library_en-us.js",
            "en-KE": "sp-core-library_en-us.js",
            "en-KW": "sp-core-library_en-us.js",
            "en-MK": "sp-core-library_en-us.js",
            "en-MT": "sp-core-library_en-us.js",
            "en-PK": "sp-core-library_en-us.js",
            "en-QA": "sp-core-library_en-us.js",
            "en-SA": "sp-core-library_en-us.js",
            "en-LK": "sp-core-library_en-us.js",
            "en-AE": "sp-core-library_en-us.js",
            "en-VN": "sp-core-library_en-us.js",
            "is": "sp-core-library_en-us.js",
            "km": "sp-core-library_en-us.js",
            "kh": "sp-core-library_en-us.js",
            "mt": "sp-core-library_en-us.js",
            "fa": "sp-core-library_en-us.js",
            "gd": "sp-core-library_en-us.js",
            "sr-Cyrl-BA": "sp-core-library_en-us.js",
            "sr-Latn-BA": "sp-core-library_en-us.js",
            "sd": "sp-core-library_en-us.js",
            "si": "sp-core-library_en-us.js",
            "so": "sp-core-library_en-us.js",
            "ti-ET": "sp-core-library_en-us.js",
            "uz": "sp-core-library_en-us.js",
            "en-SG": "sp-core-library_en-us.js",
            "en-HK": "sp-core-library_en-us.js",
            "en-MY": "sp-core-library_en-us.js",
            "en-PH": "sp-core-library_en-us.js",
            "en-TT": "sp-core-library_en-us.js",
            "en-AZ": "sp-core-library_en-us.js",
            "en-BH": "sp-core-library_en-us.js",
            "en-BN": "sp-core-library_en-us.js",
            "en-ID": "sp-core-library_en-us.js",
            "mi": "sp-core-library_en-us.js"
          },
          "defaultPath": "sp-core-library_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
    "alias": "SPDiagnostics",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-diagnostics/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-diagnostics",
      "scriptResources": {
        "sp-diagnostics": {
          "type": "path",
          "path": "sp-diagnostics_none.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "e40f8203-b39d-425a-a957-714852e33b79",
    "alias": "SPDynamicData",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dynamic-data/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-dynamic-data",
      "scriptResources": {
        "sp-dynamic-data": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-dynamic-data_default.js",
            "en-US": "sp-dynamic-data_en-us.js",
            "qps-ploca": "sp-dynamic-data_qps-ploca.js",
            "qps-ploc": "sp-dynamic-data_qps-ploc.js",
            "en-GB": "sp-dynamic-data_en-us.js",
            "en-NZ": "sp-dynamic-data_en-us.js",
            "en-IE": "sp-dynamic-data_en-us.js",
            "en-AU": "sp-dynamic-data_en-us.js",
            "bn": "sp-dynamic-data_en-us.js",
            "chr": "sp-dynamic-data_en-us.js",
            "dv": "sp-dynamic-data_en-us.js",
            "div": "sp-dynamic-data_en-us.js",
            "en": "sp-dynamic-data_en-us.js",
            "fil": "sp-dynamic-data_en-us.js",
            "haw": "sp-dynamic-data_en-us.js",
            "iu": "sp-dynamic-data_en-us.js",
            "lo": "sp-dynamic-data_en-us.js",
            "moh": "sp-dynamic-data_en-us.js",
            "sq": "sp-dynamic-data_en-us.js",
            "am": "sp-dynamic-data_en-us.js",
            "hy": "sp-dynamic-data_en-us.js",
            "mk": "sp-dynamic-data_en-us.js",
            "bs": "sp-dynamic-data_en-us.js",
            "my": "sp-dynamic-data_en-us.js",
            "dz": "sp-dynamic-data_en-us.js",
            "en-CY": "sp-dynamic-data_en-us.js",
            "en-EG": "sp-dynamic-data_en-us.js",
            "en-IL": "sp-dynamic-data_en-us.js",
            "en-IS": "sp-dynamic-data_en-us.js",
            "en-JO": "sp-dynamic-data_en-us.js",
            "en-KE": "sp-dynamic-data_en-us.js",
            "en-KW": "sp-dynamic-data_en-us.js",
            "en-MK": "sp-dynamic-data_en-us.js",
            "en-MT": "sp-dynamic-data_en-us.js",
            "en-PK": "sp-dynamic-data_en-us.js",
            "en-QA": "sp-dynamic-data_en-us.js",
            "en-SA": "sp-dynamic-data_en-us.js",
            "en-LK": "sp-dynamic-data_en-us.js",
            "en-AE": "sp-dynamic-data_en-us.js",
            "en-VN": "sp-dynamic-data_en-us.js",
            "is": "sp-dynamic-data_en-us.js",
            "km": "sp-dynamic-data_en-us.js",
            "kh": "sp-dynamic-data_en-us.js",
            "mt": "sp-dynamic-data_en-us.js",
            "fa": "sp-dynamic-data_en-us.js",
            "gd": "sp-dynamic-data_en-us.js",
            "sr-Cyrl-BA": "sp-dynamic-data_en-us.js",
            "sr-Latn-BA": "sp-dynamic-data_en-us.js",
            "sd": "sp-dynamic-data_en-us.js",
            "si": "sp-dynamic-data_en-us.js",
            "so": "sp-dynamic-data_en-us.js",
            "ti-ET": "sp-dynamic-data_en-us.js",
            "uz": "sp-dynamic-data_en-us.js",
            "en-SG": "sp-dynamic-data_en-us.js",
            "en-HK": "sp-dynamic-data_en-us.js",
            "en-MY": "sp-dynamic-data_en-us.js",
            "en-PH": "sp-dynamic-data_en-us.js",
            "en-TT": "sp-dynamic-data_en-us.js",
            "en-AZ": "sp-dynamic-data_en-us.js",
            "en-BH": "sp-dynamic-data_en-us.js",
            "en-BN": "sp-dynamic-data_en-us.js",
            "en-ID": "sp-dynamic-data_en-us.js",
            "mi": "sp-dynamic-data_en-us.js"
          },
          "defaultPath": "sp-dynamic-data_default.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1e384972-6346-49b4-93c7-b2e6763938e6",
    "alias": "sp-polyfills",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-polyfills/dist/",
        "http://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-polyfills",
      "scriptResources": {
        "sp-polyfills": {
          "type": "path",
          "path": "sp-polyfills_none.js"
        }
      }
    }
  },
  {
    "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
    "alias": "SPHttp",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [],
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-http/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-http",
      "scriptResources": {
        "sp-http": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-http_default.js",
            "en-US": "sp-http_en-us.js",
            "qps-ploca": "sp-http_qps-ploca.js",
            "qps-ploc": "sp-http_qps-ploc.js",
            "en-GB": "sp-http_en-us.js",
            "en-NZ": "sp-http_en-us.js",
            "en-IE": "sp-http_en-us.js",
            "en-AU": "sp-http_en-us.js",
            "bn": "sp-http_en-us.js",
            "chr": "sp-http_en-us.js",
            "dv": "sp-http_en-us.js",
            "div": "sp-http_en-us.js",
            "en": "sp-http_en-us.js",
            "fil": "sp-http_en-us.js",
            "haw": "sp-http_en-us.js",
            "iu": "sp-http_en-us.js",
            "lo": "sp-http_en-us.js",
            "moh": "sp-http_en-us.js",
            "sq": "sp-http_en-us.js",
            "am": "sp-http_en-us.js",
            "hy": "sp-http_en-us.js",
            "mk": "sp-http_en-us.js",
            "bs": "sp-http_en-us.js",
            "my": "sp-http_en-us.js",
            "dz": "sp-http_en-us.js",
            "en-CY": "sp-http_en-us.js",
            "en-EG": "sp-http_en-us.js",
            "en-IL": "sp-http_en-us.js",
            "en-IS": "sp-http_en-us.js",
            "en-JO": "sp-http_en-us.js",
            "en-KE": "sp-http_en-us.js",
            "en-KW": "sp-http_en-us.js",
            "en-MK": "sp-http_en-us.js",
            "en-MT": "sp-http_en-us.js",
            "en-PK": "sp-http_en-us.js",
            "en-QA": "sp-http_en-us.js",
            "en-SA": "sp-http_en-us.js",
            "en-LK": "sp-http_en-us.js",
            "en-AE": "sp-http_en-us.js",
            "en-VN": "sp-http_en-us.js",
            "is": "sp-http_en-us.js",
            "km": "sp-http_en-us.js",
            "kh": "sp-http_en-us.js",
            "mt": "sp-http_en-us.js",
            "fa": "sp-http_en-us.js",
            "gd": "sp-http_en-us.js",
            "sr-Cyrl-BA": "sp-http_en-us.js",
            "sr-Latn-BA": "sp-http_en-us.js",
            "sd": "sp-http_en-us.js",
            "si": "sp-http_en-us.js",
            "so": "sp-http_en-us.js",
            "ti-ET": "sp-http_en-us.js",
            "uz": "sp-http_en-us.js",
            "en-SG": "sp-http_en-us.js",
            "en-HK": "sp-http_en-us.js",
            "en-MY": "sp-http_en-us.js",
            "en-PH": "sp-http_en-us.js",
            "en-TT": "sp-http_en-us.js",
            "en-AZ": "sp-http_en-us.js",
            "en-BH": "sp-http_en-us.js",
            "en-BN": "sp-http_en-us.js",
            "en-ID": "sp-http_en-us.js",
            "mi": "sp-http_en-us.js"
          },
          "defaultPath": "sp-http_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
    "alias": "SPPageContext",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-page-context/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-page-context",
      "scriptResources": {
        "sp-page-context": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-page-context_default.js",
            "en-US": "sp-page-context_en-us.js",
            "qps-ploca": "sp-page-context_qps-ploca.js",
            "qps-ploc": "sp-page-context_qps-ploc.js",
            "en-GB": "sp-page-context_en-us.js",
            "en-NZ": "sp-page-context_en-us.js",
            "en-IE": "sp-page-context_en-us.js",
            "en-AU": "sp-page-context_en-us.js",
            "bn": "sp-page-context_en-us.js",
            "chr": "sp-page-context_en-us.js",
            "dv": "sp-page-context_en-us.js",
            "div": "sp-page-context_en-us.js",
            "en": "sp-page-context_en-us.js",
            "fil": "sp-page-context_en-us.js",
            "haw": "sp-page-context_en-us.js",
            "iu": "sp-page-context_en-us.js",
            "lo": "sp-page-context_en-us.js",
            "moh": "sp-page-context_en-us.js",
            "sq": "sp-page-context_en-us.js",
            "am": "sp-page-context_en-us.js",
            "hy": "sp-page-context_en-us.js",
            "mk": "sp-page-context_en-us.js",
            "bs": "sp-page-context_en-us.js",
            "my": "sp-page-context_en-us.js",
            "dz": "sp-page-context_en-us.js",
            "en-CY": "sp-page-context_en-us.js",
            "en-EG": "sp-page-context_en-us.js",
            "en-IL": "sp-page-context_en-us.js",
            "en-IS": "sp-page-context_en-us.js",
            "en-JO": "sp-page-context_en-us.js",
            "en-KE": "sp-page-context_en-us.js",
            "en-KW": "sp-page-context_en-us.js",
            "en-MK": "sp-page-context_en-us.js",
            "en-MT": "sp-page-context_en-us.js",
            "en-PK": "sp-page-context_en-us.js",
            "en-QA": "sp-page-context_en-us.js",
            "en-SA": "sp-page-context_en-us.js",
            "en-LK": "sp-page-context_en-us.js",
            "en-AE": "sp-page-context_en-us.js",
            "en-VN": "sp-page-context_en-us.js",
            "is": "sp-page-context_en-us.js",
            "km": "sp-page-context_en-us.js",
            "kh": "sp-page-context_en-us.js",
            "mt": "sp-page-context_en-us.js",
            "fa": "sp-page-context_en-us.js",
            "gd": "sp-page-context_en-us.js",
            "sr-Cyrl-BA": "sp-page-context_en-us.js",
            "sr-Latn-BA": "sp-page-context_en-us.js",
            "sd": "sp-page-context_en-us.js",
            "si": "sp-page-context_en-us.js",
            "so": "sp-page-context_en-us.js",
            "ti-ET": "sp-page-context_en-us.js",
            "uz": "sp-page-context_en-us.js",
            "en-SG": "sp-page-context_en-us.js",
            "en-HK": "sp-page-context_en-us.js",
            "en-MY": "sp-page-context_en-us.js",
            "en-PH": "sp-page-context_en-us.js",
            "en-TT": "sp-page-context_en-us.js",
            "en-AZ": "sp-page-context_en-us.js",
            "en-BH": "sp-page-context_en-us.js",
            "en-BN": "sp-page-context_en-us.js",
            "en-ID": "sp-page-context_en-us.js",
            "mi": "sp-page-context_en-us.js"
          },
          "defaultPath": "sp-page-context_default.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
    "alias": "SPComponentBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-component-base/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-component-base",
      "scriptResources": {
        "sp-component-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-component-base_default.js",
            "en-US": "sp-component-base_en-us.js",
            "qps-ploca": "sp-component-base_qps-ploca.js",
            "qps-ploc": "sp-component-base_qps-ploc.js",
            "en-GB": "sp-component-base_en-us.js",
            "en-NZ": "sp-component-base_en-us.js",
            "en-IE": "sp-component-base_en-us.js",
            "en-AU": "sp-component-base_en-us.js",
            "bn": "sp-component-base_en-us.js",
            "chr": "sp-component-base_en-us.js",
            "dv": "sp-component-base_en-us.js",
            "div": "sp-component-base_en-us.js",
            "en": "sp-component-base_en-us.js",
            "fil": "sp-component-base_en-us.js",
            "haw": "sp-component-base_en-us.js",
            "iu": "sp-component-base_en-us.js",
            "lo": "sp-component-base_en-us.js",
            "moh": "sp-component-base_en-us.js",
            "sq": "sp-component-base_en-us.js",
            "am": "sp-component-base_en-us.js",
            "hy": "sp-component-base_en-us.js",
            "mk": "sp-component-base_en-us.js",
            "bs": "sp-component-base_en-us.js",
            "my": "sp-component-base_en-us.js",
            "dz": "sp-component-base_en-us.js",
            "en-CY": "sp-component-base_en-us.js",
            "en-EG": "sp-component-base_en-us.js",
            "en-IL": "sp-component-base_en-us.js",
            "en-IS": "sp-component-base_en-us.js",
            "en-JO": "sp-component-base_en-us.js",
            "en-KE": "sp-component-base_en-us.js",
            "en-KW": "sp-component-base_en-us.js",
            "en-MK": "sp-component-base_en-us.js",
            "en-MT": "sp-component-base_en-us.js",
            "en-PK": "sp-component-base_en-us.js",
            "en-QA": "sp-component-base_en-us.js",
            "en-SA": "sp-component-base_en-us.js",
            "en-LK": "sp-component-base_en-us.js",
            "en-AE": "sp-component-base_en-us.js",
            "en-VN": "sp-component-base_en-us.js",
            "is": "sp-component-base_en-us.js",
            "km": "sp-component-base_en-us.js",
            "kh": "sp-component-base_en-us.js",
            "mt": "sp-component-base_en-us.js",
            "fa": "sp-component-base_en-us.js",
            "gd": "sp-component-base_en-us.js",
            "sr-Cyrl-BA": "sp-component-base_en-us.js",
            "sr-Latn-BA": "sp-component-base_en-us.js",
            "sd": "sp-component-base_en-us.js",
            "si": "sp-component-base_en-us.js",
            "so": "sp-component-base_en-us.js",
            "ti-ET": "sp-component-base_en-us.js",
            "uz": "sp-component-base_en-us.js",
            "en-SG": "sp-component-base_en-us.js",
            "en-HK": "sp-component-base_en-us.js",
            "en-MY": "sp-component-base_en-us.js",
            "en-PH": "sp-component-base_en-us.js",
            "en-TT": "sp-component-base_en-us.js",
            "en-AZ": "sp-component-base_en-us.js",
            "en-BH": "sp-component-base_en-us.js",
            "en-BN": "sp-component-base_en-us.js",
            "en-ID": "sp-component-base_en-us.js",
            "mi": "sp-component-base_en-us.js"
          },
          "defaultPath": "sp-component-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "alias": "SPLoader",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-loader/dist/",
        "https://localhost:54321/dist/"
      ],
      "entryModuleId": "sp-loader",
      "scriptResources": {
        "sp-loader": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-loader_default.js",
            "en-US": "sp-loader_en-us.js",
            "qps-ploca": "sp-loader_qps-ploca.js",
            "qps-ploc": "sp-loader_qps-ploc.js",
            "en-GB": "sp-loader_en-us.js",
            "en-NZ": "sp-loader_en-us.js",
            "en-IE": "sp-loader_en-us.js",
            "en-AU": "sp-loader_en-us.js",
            "bn": "sp-loader_en-us.js",
            "chr": "sp-loader_en-us.js",
            "dv": "sp-loader_en-us.js",
            "div": "sp-loader_en-us.js",
            "en": "sp-loader_en-us.js",
            "fil": "sp-loader_en-us.js",
            "haw": "sp-loader_en-us.js",
            "iu": "sp-loader_en-us.js",
            "lo": "sp-loader_en-us.js",
            "moh": "sp-loader_en-us.js",
            "sq": "sp-loader_en-us.js",
            "am": "sp-loader_en-us.js",
            "hy": "sp-loader_en-us.js",
            "mk": "sp-loader_en-us.js",
            "bs": "sp-loader_en-us.js",
            "my": "sp-loader_en-us.js",
            "dz": "sp-loader_en-us.js",
            "en-CY": "sp-loader_en-us.js",
            "en-EG": "sp-loader_en-us.js",
            "en-IL": "sp-loader_en-us.js",
            "en-IS": "sp-loader_en-us.js",
            "en-JO": "sp-loader_en-us.js",
            "en-KE": "sp-loader_en-us.js",
            "en-KW": "sp-loader_en-us.js",
            "en-MK": "sp-loader_en-us.js",
            "en-MT": "sp-loader_en-us.js",
            "en-PK": "sp-loader_en-us.js",
            "en-QA": "sp-loader_en-us.js",
            "en-SA": "sp-loader_en-us.js",
            "en-LK": "sp-loader_en-us.js",
            "en-AE": "sp-loader_en-us.js",
            "en-VN": "sp-loader_en-us.js",
            "is": "sp-loader_en-us.js",
            "km": "sp-loader_en-us.js",
            "kh": "sp-loader_en-us.js",
            "mt": "sp-loader_en-us.js",
            "fa": "sp-loader_en-us.js",
            "gd": "sp-loader_en-us.js",
            "sr-Cyrl-BA": "sp-loader_en-us.js",
            "sr-Latn-BA": "sp-loader_en-us.js",
            "sd": "sp-loader_en-us.js",
            "si": "sp-loader_en-us.js",
            "so": "sp-loader_en-us.js",
            "ti-ET": "sp-loader_en-us.js",
            "uz": "sp-loader_en-us.js",
            "en-SG": "sp-loader_en-us.js",
            "en-HK": "sp-loader_en-us.js",
            "en-MY": "sp-loader_en-us.js",
            "en-PH": "sp-loader_en-us.js",
            "en-TT": "sp-loader_en-us.js",
            "en-AZ": "sp-loader_en-us.js",
            "en-BH": "sp-loader_en-us.js",
            "en-BN": "sp-loader_en-us.js",
            "en-ID": "sp-loader_en-us.js",
            "mi": "sp-loader_en-us.js"
          },
          "defaultPath": "sp-loader_default.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "id": "e40f8203-b39d-425a-a957-714852e33b79",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "componentType": "Library",
    "id": "44bae1a2-d2eb-4e10-8c21-a1dbdce1036f",
    "alias": "sp-loader-assembly",
    "isInternal": true,
    "version": "1.0.0",
    "rootComponentId": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-loader/dist/"
      ],
      "entryModuleId": "sp-loader-assembly",
      "scriptResources": {
        "sp-loader-assembly": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-loader-assembly_default.js",
            "en-US": "sp-loader-assembly_en-us.js",
            "qps-ploca": "sp-loader-assembly_qps-ploca.js",
            "qps-ploc": "sp-loader-assembly_qps-ploc.js",
            "en-GB": "sp-loader-assembly_en-us.js",
            "en-NZ": "sp-loader-assembly_en-us.js",
            "en-IE": "sp-loader-assembly_en-us.js",
            "en-AU": "sp-loader-assembly_en-us.js",
            "bn": "sp-loader-assembly_en-us.js",
            "chr": "sp-loader-assembly_en-us.js",
            "dv": "sp-loader-assembly_en-us.js",
            "div": "sp-loader-assembly_en-us.js",
            "en": "sp-loader-assembly_en-us.js",
            "fil": "sp-loader-assembly_en-us.js",
            "haw": "sp-loader-assembly_en-us.js",
            "iu": "sp-loader-assembly_en-us.js",
            "lo": "sp-loader-assembly_en-us.js",
            "moh": "sp-loader-assembly_en-us.js",
            "sq": "sp-loader-assembly_en-us.js",
            "am": "sp-loader-assembly_en-us.js",
            "hy": "sp-loader-assembly_en-us.js",
            "mk": "sp-loader-assembly_en-us.js",
            "bs": "sp-loader-assembly_en-us.js",
            "my": "sp-loader-assembly_en-us.js",
            "dz": "sp-loader-assembly_en-us.js",
            "en-CY": "sp-loader-assembly_en-us.js",
            "en-EG": "sp-loader-assembly_en-us.js",
            "en-IL": "sp-loader-assembly_en-us.js",
            "en-IS": "sp-loader-assembly_en-us.js",
            "en-JO": "sp-loader-assembly_en-us.js",
            "en-KE": "sp-loader-assembly_en-us.js",
            "en-KW": "sp-loader-assembly_en-us.js",
            "en-MK": "sp-loader-assembly_en-us.js",
            "en-MT": "sp-loader-assembly_en-us.js",
            "en-PK": "sp-loader-assembly_en-us.js",
            "en-QA": "sp-loader-assembly_en-us.js",
            "en-SA": "sp-loader-assembly_en-us.js",
            "en-LK": "sp-loader-assembly_en-us.js",
            "en-AE": "sp-loader-assembly_en-us.js",
            "en-VN": "sp-loader-assembly_en-us.js",
            "is": "sp-loader-assembly_en-us.js",
            "km": "sp-loader-assembly_en-us.js",
            "kh": "sp-loader-assembly_en-us.js",
            "mt": "sp-loader-assembly_en-us.js",
            "fa": "sp-loader-assembly_en-us.js",
            "gd": "sp-loader-assembly_en-us.js",
            "sr-Cyrl-BA": "sp-loader-assembly_en-us.js",
            "sr-Latn-BA": "sp-loader-assembly_en-us.js",
            "sd": "sp-loader-assembly_en-us.js",
            "si": "sp-loader-assembly_en-us.js",
            "so": "sp-loader-assembly_en-us.js",
            "ti-ET": "sp-loader-assembly_en-us.js",
            "uz": "sp-loader-assembly_en-us.js",
            "en-SG": "sp-loader-assembly_en-us.js",
            "en-HK": "sp-loader-assembly_en-us.js",
            "en-MY": "sp-loader-assembly_en-us.js",
            "en-PH": "sp-loader-assembly_en-us.js",
            "en-TT": "sp-loader-assembly_en-us.js",
            "en-AZ": "sp-loader-assembly_en-us.js",
            "en-BH": "sp-loader-assembly_en-us.js",
            "en-BN": "sp-loader-assembly_en-us.js",
            "en-ID": "sp-loader-assembly_en-us.js",
            "mi": "sp-loader-assembly_en-us.js"
          },
          "defaultPath": "sp-loader-assembly_default.js"
        }
      }
    }
  },
  {
    "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
    "alias": "SPExtensionBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-extension-base/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-extension-base",
      "scriptResources": {
        "sp-extension-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-extension-base_default.js",
            "en-US": "sp-extension-base_en-us.js",
            "qps-ploca": "sp-extension-base_qps-ploca.js",
            "qps-ploc": "sp-extension-base_qps-ploc.js",
            "en-GB": "sp-extension-base_en-us.js",
            "en-NZ": "sp-extension-base_en-us.js",
            "en-IE": "sp-extension-base_en-us.js",
            "en-AU": "sp-extension-base_en-us.js",
            "bn": "sp-extension-base_en-us.js",
            "chr": "sp-extension-base_en-us.js",
            "dv": "sp-extension-base_en-us.js",
            "div": "sp-extension-base_en-us.js",
            "en": "sp-extension-base_en-us.js",
            "fil": "sp-extension-base_en-us.js",
            "haw": "sp-extension-base_en-us.js",
            "iu": "sp-extension-base_en-us.js",
            "lo": "sp-extension-base_en-us.js",
            "moh": "sp-extension-base_en-us.js",
            "sq": "sp-extension-base_en-us.js",
            "am": "sp-extension-base_en-us.js",
            "hy": "sp-extension-base_en-us.js",
            "mk": "sp-extension-base_en-us.js",
            "bs": "sp-extension-base_en-us.js",
            "my": "sp-extension-base_en-us.js",
            "dz": "sp-extension-base_en-us.js",
            "en-CY": "sp-extension-base_en-us.js",
            "en-EG": "sp-extension-base_en-us.js",
            "en-IL": "sp-extension-base_en-us.js",
            "en-IS": "sp-extension-base_en-us.js",
            "en-JO": "sp-extension-base_en-us.js",
            "en-KE": "sp-extension-base_en-us.js",
            "en-KW": "sp-extension-base_en-us.js",
            "en-MK": "sp-extension-base_en-us.js",
            "en-MT": "sp-extension-base_en-us.js",
            "en-PK": "sp-extension-base_en-us.js",
            "en-QA": "sp-extension-base_en-us.js",
            "en-SA": "sp-extension-base_en-us.js",
            "en-LK": "sp-extension-base_en-us.js",
            "en-AE": "sp-extension-base_en-us.js",
            "en-VN": "sp-extension-base_en-us.js",
            "is": "sp-extension-base_en-us.js",
            "km": "sp-extension-base_en-us.js",
            "kh": "sp-extension-base_en-us.js",
            "mt": "sp-extension-base_en-us.js",
            "fa": "sp-extension-base_en-us.js",
            "gd": "sp-extension-base_en-us.js",
            "sr-Cyrl-BA": "sp-extension-base_en-us.js",
            "sr-Latn-BA": "sp-extension-base_en-us.js",
            "sd": "sp-extension-base_en-us.js",
            "si": "sp-extension-base_en-us.js",
            "so": "sp-extension-base_en-us.js",
            "ti-ET": "sp-extension-base_en-us.js",
            "uz": "sp-extension-base_en-us.js",
            "en-SG": "sp-extension-base_en-us.js",
            "en-HK": "sp-extension-base_en-us.js",
            "en-MY": "sp-extension-base_en-us.js",
            "en-PH": "sp-extension-base_en-us.js",
            "en-TT": "sp-extension-base_en-us.js",
            "en-AZ": "sp-extension-base_en-us.js",
            "en-BH": "sp-extension-base_en-us.js",
            "en-BN": "sp-extension-base_en-us.js",
            "en-ID": "sp-extension-base_en-us.js",
            "mi": "sp-extension-base_en-us.js"
          },
          "defaultPath": "sp-extension-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "4958ea79-6ff3-4480-8291-0932dd010869",
    "alias": "SPSearchExtensibility",
    "componentType": "Library",
    "version": "1.12.1",
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-search-extensibility/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-search-extensibility",
      "scriptResources": {
        "sp-search-extensibility": {
          "type": "path",
          "path": "sp-search-extensibility_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
          "version": "1.12.1"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "componentType": "Library",
    "id": "05580011-8e5d-45cc-8488-220e459c5c67",
    "alias": "sp-default-assembly",
    "isInternal": true,
    "version": "1.0.0",
    "rootComponentId": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-application-base/dist/"
      ],
      "entryModuleId": "sp-default-assembly",
      "scriptResources": {
        "sp-default-assembly": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-default-assembly_default.js",
            "en-US": "sp-default-assembly_en-us.js",
            "qps-ploca": "sp-default-assembly_qps-ploca.js",
            "qps-ploc": "sp-default-assembly_qps-ploc.js",
            "en-GB": "sp-default-assembly_en-us.js",
            "en-NZ": "sp-default-assembly_en-us.js",
            "en-IE": "sp-default-assembly_en-us.js",
            "en-AU": "sp-default-assembly_en-us.js",
            "bn": "sp-default-assembly_en-us.js",
            "chr": "sp-default-assembly_en-us.js",
            "dv": "sp-default-assembly_en-us.js",
            "div": "sp-default-assembly_en-us.js",
            "en": "sp-default-assembly_en-us.js",
            "fil": "sp-default-assembly_en-us.js",
            "haw": "sp-default-assembly_en-us.js",
            "iu": "sp-default-assembly_en-us.js",
            "lo": "sp-default-assembly_en-us.js",
            "moh": "sp-default-assembly_en-us.js",
            "sq": "sp-default-assembly_en-us.js",
            "am": "sp-default-assembly_en-us.js",
            "hy": "sp-default-assembly_en-us.js",
            "mk": "sp-default-assembly_en-us.js",
            "bs": "sp-default-assembly_en-us.js",
            "my": "sp-default-assembly_en-us.js",
            "dz": "sp-default-assembly_en-us.js",
            "en-CY": "sp-default-assembly_en-us.js",
            "en-EG": "sp-default-assembly_en-us.js",
            "en-IL": "sp-default-assembly_en-us.js",
            "en-IS": "sp-default-assembly_en-us.js",
            "en-JO": "sp-default-assembly_en-us.js",
            "en-KE": "sp-default-assembly_en-us.js",
            "en-KW": "sp-default-assembly_en-us.js",
            "en-MK": "sp-default-assembly_en-us.js",
            "en-MT": "sp-default-assembly_en-us.js",
            "en-PK": "sp-default-assembly_en-us.js",
            "en-QA": "sp-default-assembly_en-us.js",
            "en-SA": "sp-default-assembly_en-us.js",
            "en-LK": "sp-default-assembly_en-us.js",
            "en-AE": "sp-default-assembly_en-us.js",
            "en-VN": "sp-default-assembly_en-us.js",
            "is": "sp-default-assembly_en-us.js",
            "km": "sp-default-assembly_en-us.js",
            "kh": "sp-default-assembly_en-us.js",
            "mt": "sp-default-assembly_en-us.js",
            "fa": "sp-default-assembly_en-us.js",
            "gd": "sp-default-assembly_en-us.js",
            "sr-Cyrl-BA": "sp-default-assembly_en-us.js",
            "sr-Latn-BA": "sp-default-assembly_en-us.js",
            "sd": "sp-default-assembly_en-us.js",
            "si": "sp-default-assembly_en-us.js",
            "so": "sp-default-assembly_en-us.js",
            "ti-ET": "sp-default-assembly_en-us.js",
            "uz": "sp-default-assembly_en-us.js",
            "en-SG": "sp-default-assembly_en-us.js",
            "en-HK": "sp-default-assembly_en-us.js",
            "en-MY": "sp-default-assembly_en-us.js",
            "en-PH": "sp-default-assembly_en-us.js",
            "en-TT": "sp-default-assembly_en-us.js",
            "en-AZ": "sp-default-assembly_en-us.js",
            "en-BH": "sp-default-assembly_en-us.js",
            "en-BN": "sp-default-assembly_en-us.js",
            "en-ID": "sp-default-assembly_en-us.js",
            "mi": "sp-default-assembly_en-us.js"
          },
          "defaultPath": "sp-default-assembly_default.js"
        }
      }
    }
  },
  {
    "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "alias": "SPApplicationBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [
      "c0c518b8-701b-4f6f-956d-5782772bb731",
      "4958ea79-6ff3-4480-8291-0932dd010869"
    ],
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-application-base/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-application-base",
      "scriptResources": {
        "sp-application-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-application-base_default.js",
            "en-US": "sp-application-base_en-us.js",
            "qps-ploca": "sp-application-base_qps-ploca.js",
            "qps-ploc": "sp-application-base_qps-ploc.js",
            "en-GB": "sp-application-base_en-us.js",
            "en-NZ": "sp-application-base_en-us.js",
            "en-IE": "sp-application-base_en-us.js",
            "en-AU": "sp-application-base_en-us.js",
            "bn": "sp-application-base_en-us.js",
            "chr": "sp-application-base_en-us.js",
            "dv": "sp-application-base_en-us.js",
            "div": "sp-application-base_en-us.js",
            "en": "sp-application-base_en-us.js",
            "fil": "sp-application-base_en-us.js",
            "haw": "sp-application-base_en-us.js",
            "iu": "sp-application-base_en-us.js",
            "lo": "sp-application-base_en-us.js",
            "moh": "sp-application-base_en-us.js",
            "sq": "sp-application-base_en-us.js",
            "am": "sp-application-base_en-us.js",
            "hy": "sp-application-base_en-us.js",
            "mk": "sp-application-base_en-us.js",
            "bs": "sp-application-base_en-us.js",
            "my": "sp-application-base_en-us.js",
            "dz": "sp-application-base_en-us.js",
            "en-CY": "sp-application-base_en-us.js",
            "en-EG": "sp-application-base_en-us.js",
            "en-IL": "sp-application-base_en-us.js",
            "en-IS": "sp-application-base_en-us.js",
            "en-JO": "sp-application-base_en-us.js",
            "en-KE": "sp-application-base_en-us.js",
            "en-KW": "sp-application-base_en-us.js",
            "en-MK": "sp-application-base_en-us.js",
            "en-MT": "sp-application-base_en-us.js",
            "en-PK": "sp-application-base_en-us.js",
            "en-QA": "sp-application-base_en-us.js",
            "en-SA": "sp-application-base_en-us.js",
            "en-LK": "sp-application-base_en-us.js",
            "en-AE": "sp-application-base_en-us.js",
            "en-VN": "sp-application-base_en-us.js",
            "is": "sp-application-base_en-us.js",
            "km": "sp-application-base_en-us.js",
            "kh": "sp-application-base_en-us.js",
            "mt": "sp-application-base_en-us.js",
            "fa": "sp-application-base_en-us.js",
            "gd": "sp-application-base_en-us.js",
            "sr-Cyrl-BA": "sp-application-base_en-us.js",
            "sr-Latn-BA": "sp-application-base_en-us.js",
            "sd": "sp-application-base_en-us.js",
            "si": "sp-application-base_en-us.js",
            "so": "sp-application-base_en-us.js",
            "ti-ET": "sp-application-base_en-us.js",
            "uz": "sp-application-base_en-us.js",
            "en-SG": "sp-application-base_en-us.js",
            "en-HK": "sp-application-base_en-us.js",
            "en-MY": "sp-application-base_en-us.js",
            "en-PH": "sp-application-base_en-us.js",
            "en-TT": "sp-application-base_en-us.js",
            "en-AZ": "sp-application-base_en-us.js",
            "en-BH": "sp-application-base_en-us.js",
            "en-BN": "sp-application-base_en-us.js",
            "en-ID": "sp-application-base_en-us.js",
            "mi": "sp-application-base_en-us.js"
          },
          "defaultPath": "sp-application-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@ms/sp-suite-nav": {
          "type": "component",
          "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219",
          "version": "0.1.0"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@ms/odsp-core-bundle": {
          "type": "component",
          "id": "2e09fb9b-13bb-48f2-859f-97d6fff71176",
          "version": "1.1.13"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
          "version": "1.12.1"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "c0c518b8-701b-4f6f-956d-5782772bb731",
    "alias": "SPDialog",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dialog/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-dialog",
      "scriptResources": {
        "sp-dialog": {
          "type": "path",
          "path": "sp-dialog_none.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
          "version": "1.12.1"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d",
          "version": "0.1.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "29bd516f-4ece-40b7-8028-597cbc65a223",
    "alias": "SpOfficeUIFabricCore",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-office-ui-fabric-core/dist/",
        "http://localhost:4321/dist/"
      ],
      "entryModuleId": "office-ui-fabric-core",
      "scriptResources": {
        "office-ui-fabric-core": {
          "type": "path",
          "path": "office-ui-fabric-core_none.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        }
      }
    }
  },
  {
    "id": "f9e737b7-f0df-4597-ba8c-3060f82380db",
    "alias": "SPPropertyPane",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-property-pane/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-property-pane",
      "scriptResources": {
        "sp-property-pane": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-property-pane_default.js",
            "en-US": "sp-property-pane_en-us.js",
            "qps-ploca": "sp-property-pane_qps-ploca.js",
            "qps-ploc": "sp-property-pane_qps-ploc.js",
            "en-GB": "sp-property-pane_en-us.js",
            "en-NZ": "sp-property-pane_en-us.js",
            "en-IE": "sp-property-pane_en-us.js",
            "en-AU": "sp-property-pane_en-us.js",
            "bn": "sp-property-pane_en-us.js",
            "chr": "sp-property-pane_en-us.js",
            "dv": "sp-property-pane_en-us.js",
            "div": "sp-property-pane_en-us.js",
            "en": "sp-property-pane_en-us.js",
            "fil": "sp-property-pane_en-us.js",
            "haw": "sp-property-pane_en-us.js",
            "iu": "sp-property-pane_en-us.js",
            "lo": "sp-property-pane_en-us.js",
            "moh": "sp-property-pane_en-us.js",
            "sq": "sp-property-pane_en-us.js",
            "am": "sp-property-pane_en-us.js",
            "hy": "sp-property-pane_en-us.js",
            "mk": "sp-property-pane_en-us.js",
            "bs": "sp-property-pane_en-us.js",
            "my": "sp-property-pane_en-us.js",
            "dz": "sp-property-pane_en-us.js",
            "en-CY": "sp-property-pane_en-us.js",
            "en-EG": "sp-property-pane_en-us.js",
            "en-IL": "sp-property-pane_en-us.js",
            "en-IS": "sp-property-pane_en-us.js",
            "en-JO": "sp-property-pane_en-us.js",
            "en-KE": "sp-property-pane_en-us.js",
            "en-KW": "sp-property-pane_en-us.js",
            "en-MK": "sp-property-pane_en-us.js",
            "en-MT": "sp-property-pane_en-us.js",
            "en-PK": "sp-property-pane_en-us.js",
            "en-QA": "sp-property-pane_en-us.js",
            "en-SA": "sp-property-pane_en-us.js",
            "en-LK": "sp-property-pane_en-us.js",
            "en-AE": "sp-property-pane_en-us.js",
            "en-VN": "sp-property-pane_en-us.js",
            "is": "sp-property-pane_en-us.js",
            "km": "sp-property-pane_en-us.js",
            "kh": "sp-property-pane_en-us.js",
            "mt": "sp-property-pane_en-us.js",
            "fa": "sp-property-pane_en-us.js",
            "gd": "sp-property-pane_en-us.js",
            "sr-Cyrl-BA": "sp-property-pane_en-us.js",
            "sr-Latn-BA": "sp-property-pane_en-us.js",
            "sd": "sp-property-pane_en-us.js",
            "si": "sp-property-pane_en-us.js",
            "so": "sp-property-pane_en-us.js",
            "ti-ET": "sp-property-pane_en-us.js",
            "uz": "sp-property-pane_en-us.js",
            "en-SG": "sp-property-pane_en-us.js",
            "en-HK": "sp-property-pane_en-us.js",
            "en-MY": "sp-property-pane_en-us.js",
            "en-PH": "sp-property-pane_en-us.js",
            "en-TT": "sp-property-pane_en-us.js",
            "en-AZ": "sp-property-pane_en-us.js",
            "en-BH": "sp-property-pane_en-us.js",
            "en-BN": "sp-property-pane_en-us.js",
            "en-ID": "sp-property-pane_en-us.js",
            "mi": "sp-property-pane_en-us.js"
          },
          "defaultPath": "sp-property-pane_default.js"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
    "alias": "SPWebPartBase",
    "componentType": "Library",
    "version": "1.12.1",
    "manifestVersion": 2,
    "preloadComponents": [
      "f9e737b7-f0df-4597-ba8c-3060f82380db"
    ],
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-webpart-base/dist/",
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "sp-webpart-base",
      "scriptResources": {
        "sp-webpart-base": {
          "type": "localizedPath",
          "paths": {
            "default": "sp-webpart-base_default.js",
            "en-US": "sp-webpart-base_en-us.js",
            "qps-ploca": "sp-webpart-base_qps-ploca.js",
            "qps-ploc": "sp-webpart-base_qps-ploc.js",
            "en-GB": "sp-webpart-base_en-us.js",
            "en-NZ": "sp-webpart-base_en-us.js",
            "en-IE": "sp-webpart-base_en-us.js",
            "en-AU": "sp-webpart-base_en-us.js",
            "bn": "sp-webpart-base_en-us.js",
            "chr": "sp-webpart-base_en-us.js",
            "dv": "sp-webpart-base_en-us.js",
            "div": "sp-webpart-base_en-us.js",
            "en": "sp-webpart-base_en-us.js",
            "fil": "sp-webpart-base_en-us.js",
            "haw": "sp-webpart-base_en-us.js",
            "iu": "sp-webpart-base_en-us.js",
            "lo": "sp-webpart-base_en-us.js",
            "moh": "sp-webpart-base_en-us.js",
            "sq": "sp-webpart-base_en-us.js",
            "am": "sp-webpart-base_en-us.js",
            "hy": "sp-webpart-base_en-us.js",
            "mk": "sp-webpart-base_en-us.js",
            "bs": "sp-webpart-base_en-us.js",
            "my": "sp-webpart-base_en-us.js",
            "dz": "sp-webpart-base_en-us.js",
            "en-CY": "sp-webpart-base_en-us.js",
            "en-EG": "sp-webpart-base_en-us.js",
            "en-IL": "sp-webpart-base_en-us.js",
            "en-IS": "sp-webpart-base_en-us.js",
            "en-JO": "sp-webpart-base_en-us.js",
            "en-KE": "sp-webpart-base_en-us.js",
            "en-KW": "sp-webpart-base_en-us.js",
            "en-MK": "sp-webpart-base_en-us.js",
            "en-MT": "sp-webpart-base_en-us.js",
            "en-PK": "sp-webpart-base_en-us.js",
            "en-QA": "sp-webpart-base_en-us.js",
            "en-SA": "sp-webpart-base_en-us.js",
            "en-LK": "sp-webpart-base_en-us.js",
            "en-AE": "sp-webpart-base_en-us.js",
            "en-VN": "sp-webpart-base_en-us.js",
            "is": "sp-webpart-base_en-us.js",
            "km": "sp-webpart-base_en-us.js",
            "kh": "sp-webpart-base_en-us.js",
            "mt": "sp-webpart-base_en-us.js",
            "fa": "sp-webpart-base_en-us.js",
            "gd": "sp-webpart-base_en-us.js",
            "sr-Cyrl-BA": "sp-webpart-base_en-us.js",
            "sr-Latn-BA": "sp-webpart-base_en-us.js",
            "sd": "sp-webpart-base_en-us.js",
            "si": "sp-webpart-base_en-us.js",
            "so": "sp-webpart-base_en-us.js",
            "ti-ET": "sp-webpart-base_en-us.js",
            "uz": "sp-webpart-base_en-us.js",
            "en-SG": "sp-webpart-base_en-us.js",
            "en-HK": "sp-webpart-base_en-us.js",
            "en-MY": "sp-webpart-base_en-us.js",
            "en-PH": "sp-webpart-base_en-us.js",
            "en-TT": "sp-webpart-base_en-us.js",
            "en-AZ": "sp-webpart-base_en-us.js",
            "en-BH": "sp-webpart-base_en-us.js",
            "en-BN": "sp-webpart-base_en-us.js",
            "en-ID": "sp-webpart-base_en-us.js",
            "mi": "sp-webpart-base_en-us.js"
          },
          "defaultPath": "sp-webpart-base_default.js"
        },
        "tslib": {
          "type": "component",
          "id": "01c4df03-e775-48cb-aa14-171ee5199a15",
          "version": "1.10.0"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a",
          "version": "0.19.2"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
          "version": "1.12.1"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd",
          "version": "0.1.2"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
          "version": "1.12.1"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  },
  {
    "id": "be7da3c4-4e33-c6e3-5bd6-0783ad8b5989",
    "alias": "Mauri-Ora-Keyword-Feedback-Extension",
    "componentType": "Extension",
    "extensionType": "ApplicationCustomizer",
    "version": "0.0.2",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "loaderConfig": {
      "internalModuleBaseUrls": [
        "https://localhost:4321/dist/"
      ],
      "entryModuleId": "announcements.bundle",
      "scriptResources": {
        "announcements.bundle": {
          "type": "path",
          "path": "announcements.bundle_ae66c3a7a66ed53751b3.js"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db",
          "version": "1.12.1"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
          "version": "1.12.1"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
          "version": "1.12.1"
        },
        "ControlStrings": {
          "type": "localizedPath",
          "paths": {
            "bg-BG": "ControlStrings_bg-bg_7482cf21283057617ad1a517786e12e0.js",
            "ca-ES": "ControlStrings_ca-es_712c5e3d3ce0a1e03809f76dd57fd16d.js",
            "da-DK": "ControlStrings_da-dk_c0f1877aad5445a2bb4e69ad2045b9e1.js",
            "de-DE": "ControlStrings_de-de_2b3985d8813d2096a0651a09d011ad18.js",
            "el-GR": "ControlStrings_el-gr_87a476c4ffedea3ccfb37b5a390572a6.js",
            "en-US": "ControlStrings_en-us_e5014028e88a3dc69aad1863cc2aad73.js",
            "es-ES": "ControlStrings_es-es_6e049a41e9043d87fee1e9b15797f23a.js",
            "et-EE": "ControlStrings_et-ee_459d44758d39c914e20e6b86e598fc60.js",
            "eu-ES": "ControlStrings_eu-es_994f24f3fe2c45fec4c9dfce825a5ffe.js",
            "fi-FI": "ControlStrings_fi-fi_022ffed491a1d559f0b1de0f5d725720.js",
            "fr-CA": "ControlStrings_fr-ca_fb8ec02c383b7de74248e2e9bd56d45a.js",
            "fr-FR": "ControlStrings_fr-fr_fbf24972500169a797d58e90ace5e8bf.js",
            "it-IT": "ControlStrings_it-it_e017d131022b8407e01691a7346ea953.js",
            "ja-JP": "ControlStrings_ja-jp_0e1b87c6cc7a918b92f4c726cf836bc3.js",
            "lt-LT": "ControlStrings_lt-lt_e0af9ccd98d61edb5d53286346486025.js",
            "lv-LV": "ControlStrings_lv-lv_2cd04fde6155e1d82a5be8d87743cd86.js",
            "nb-NO": "ControlStrings_nb-no_9cb641377c3ad2d0c4f8c7fb14c0ac9f.js",
            "nl-NL": "ControlStrings_nl-nl_4b944a5c35894af9261882cfc85f9be6.js",
            "pl-PL": "ControlStrings_pl-pl_e84d47e9b98da62060e027fdbf617f93.js",
            "pt-PT": "ControlStrings_pt-pt_8f35d780e808fa4ea5a4019a4ad32e38.js",
            "ro-RO": "ControlStrings_ro-ro_c2b152e855f44bfb0be34669a312e90f.js",
            "ru-RU": "ControlStrings_ru-ru_6694d1c8296d26f8470f1adb00443696.js",
            "sk-SK": "ControlStrings_sk-sk_466102312c899ad98fe99857d18f5e3b.js",
            "sr-Latn-RS": "ControlStrings_sr-latn-rs_e59e580c715e4bc26b46200fa9dae0d9.js",
            "sv-SE": "ControlStrings_sv-se_223484a7376acb7de6f86760f816beff.js",
            "tr-TR": "ControlStrings_tr-tr_1590938f32cec5cc2f45f141b0cd8f12.js",
            "vi-VN": "ControlStrings_vi-vn_0cc3ed7efd6dc5f8c76f4a3cec5bf175.js",
            "zh-CN": "ControlStrings_zh-cn_5fa8f87e007f204c0e44ca4630f4b920.js",
            "zh-TW": "ControlStrings_zh-tw_036be74901e12e2b831684291d8f17f0.js"
          },
          "defaultPath": "ControlStrings_en-us_e5014028e88a3dc69aad1863cc2aad73.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
          "version": "1.12.1"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
          "version": "1.12.1"
        },
        "react": {
          "type": "component",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "version": "16.9.0"
        },
        "KeywordFeedbackStrings": {
          "type": "localizedPath",
          "paths": {
            "en-NZ": "KeywordFeedbackStrings_en-nz_e61e805ac249fbb5605f25e40f3323a4.js",
            "en-US": "KeywordFeedbackStrings_en-us_e61e805ac249fbb5605f25e40f3323a4.js",
            "fr-FR": "KeywordFeedbackStrings_fr-fr_b9f160b1b19de1cde67be22550b9e1a0.js"
          },
          "defaultPath": "KeywordFeedbackStrings_en-us_e61e805ac249fbb5605f25e40f3323a4.js"
        },
        "react-dom": {
          "type": "component",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "version": "16.9.0"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
          "version": "1.12.1"
        }
      }
    }
  }
];
/**
 * Get the manifest array.
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function getManifests() {
    // tslint:disable-line:export-name
    // Clone manifestsArray
    var manifests = JSON.parse(JSON.stringify(MANIFESTS_ARRAY));
    var manifestsFileUrl = __webpack_require__.p;
    var selectedLocale = getParameterByName('market') || getParameterByName('locale');
    if (selectedLocale) {
        selectedLocale = selectedLocale.toLowerCase();
    }
    if (!manifestsFileUrl) {
        console.error("Unable to determine " + "manifests.js" + " file URL. Using default base URL. " +
            'This is expected if you are running "gulp serve."');
    }
    for (var _i = 0, manifests_1 = manifests; _i < manifests_1.length; _i++) {
        var manifest = manifests_1[_i];
        if (manifestsFileUrl) {
            if (!manifest.loaderConfig.internalModuleBaseUrls ||
                manifest.loaderConfig.internalModuleBaseUrls.length === 0) {
                manifest.loaderConfig.internalModuleBaseUrls = [manifestsFileUrl];
            }
        }
        if (selectedLocale) {
            // tslint:disable-next-line:forin
            for (var scriptResourceName in manifest.loaderConfig.scriptResources) {
                var scriptResource = manifest.loaderConfig.scriptResources[scriptResourceName];
                if (manifest.loaderConfig.scriptResources.hasOwnProperty(scriptResourceName) &&
                    scriptResource.type === 'localizedPath') {
                    // If this is a localized path resource, and a ?locale= or ?market= query parameter has been specified,
                    // only provide that resource
                    var locResource = scriptResource;
                    if (locResource.paths) {
                        for (var localeName in locResource.paths) {
                            if (locResource.paths.hasOwnProperty(localeName) &&
                                localeName.toLowerCase() === selectedLocale) {
                                locResource.defaultPath = locResource.paths[localeName];
                                delete locResource.paths;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return manifests;
}
//# sourceMappingURL=manifestsFile.js.map

/***/ })
/******/ ]);
});