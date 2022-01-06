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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jeg-elementor-kit/assets/dev/js/sticky-element.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jeg-elementor-kit/assets/dev/js/sticky-element.js":
/*!***********************************************************!*\
  !*** ./jeg-elementor-kit/assets/dev/js/sticky-element.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class JKitStickyElement extends elementorModules.frontend.handlers.Base {\n  bindEvents() {\n    const $ = jQuery,\n          el = this.$element,\n          settings = el.data('settings'),\n          trigger = el.hasClass('jkit-sticky-element-on--down') ? 'down' : el.hasClass('jkit-sticky-element-on--up') ? 'up' : 'both',\n          stickyPosition = el.hasClass('jkit-sticky-position--fixed') ? 'fixed' : 'sticky';\n    let stickyTop = el.offset().top;\n    $(window).on('load resize scroll', function () {\n      const windowScroll = trigger === 'down' ? $(this).scrollTop() : $(this).scrollTop() + $(this).height(),\n            stickyOffset = trigger === 'down' ? stickyTop : stickyTop + el.outerHeight(true),\n            parentWidth = stickyPosition === 'fixed' ? el.parent().width() + 'px' : 'unset';\n\n      if (!el.hasClass('sticky-pinned')) {\n        stickyTop = el.offset().top;\n\n        if (settings !== undefined) {\n          if (settings.jkit_sticky_top_position !== undefined) {\n            stickyTop -= settings.jkit_sticky_top_position.size;\n          }\n\n          if (settings.jkit_sticky_bottom_position !== undefined) {\n            stickyTop += settings.jkit_sticky_bottom_position.size;\n          }\n        }\n      }\n\n      if (!el.hasClass('elementor-column')) {\n        el.css('width', parentWidth);\n      }\n\n      if (trigger === 'down' && stickyOffset < windowScroll) {\n        el.css('position', stickyPosition);\n        el.addClass('sticky-pinned');\n      } else if (trigger === 'up' && stickyOffset > windowScroll) {\n        el.css('position', stickyPosition);\n        el.addClass('sticky-pinned');\n      } else if (trigger === 'both' && stickyPosition === 'sticky') {\n        el.css('position', stickyPosition);\n        el.addClass('sticky-pinned');\n      } else {\n        el.css('position', 'relative');\n        el.removeClass('sticky-pinned');\n      }\n    });\n  }\n\n}\n\njQuery(window).on('elementor/frontend/init', () => {\n  const addHandler = $element => {\n    if ($element.hasClass('jkit-sticky-element--enabled')) {\n      elementorFrontend.elementsHandler.addHandler(JKitStickyElement, {\n        $element\n      });\n    }\n  };\n\n  elementorFrontend.hooks.addAction('frontend/element_ready/section', addHandler);\n  elementorFrontend.hooks.addAction('frontend/element_ready/column', addHandler);\n});\n\n//# sourceURL=webpack:///./jeg-elementor-kit/assets/dev/js/sticky-element.js?");

/***/ })

/******/ });