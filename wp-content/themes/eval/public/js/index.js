/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/es6-simple-carousel/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Slider", ({
  enumerable: true,
  get: function get() {
    return _core["default"];
  }
}));

var _core = _interopRequireDefault(__webpack_require__(/*! ./scripts/core */ "./node_modules/es6-simple-carousel/dist/scripts/core.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/core.js":
/*!***************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/core.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

var _partial = __webpack_require__(/*! ./sliderArrows/partial */ "./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/partial.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ./sliderDots/index */ "./node_modules/es6-simple-carousel/dist/scripts/sliderDots/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./slideTrailer/index */ "./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/index.js"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ./sliderArrows/index */ "./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ./dragEvent/index */ "./node_modules/es6-simple-carousel/dist/scripts/dragEvent/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SliderCore = /*#__PURE__*/function () {
  function SliderCore(config) {
    var _this = this;

    _classCallCheck(this, SliderCore);

    _defineProperty(this, "setConfig", function (customConfig) {
      var slider = customConfig.slider,
          _customConfig$infinit = customConfig.infinite,
          infinite = _customConfig$infinit === void 0 ? false : _customConfig$infinit,
          _customConfig$horizon = customConfig.horizontal,
          horizontal = _customConfig$horizon === void 0 ? "default" : _customConfig$horizon,
          _customConfig$respons = customConfig.responsive,
          responsive = _customConfig$respons === void 0 ? {
        0: {
          items: 1
        }
      } : _customConfig$respons,
          _customConfig$prevArr = customConfig.prevArrow,
          prevArrow = _customConfig$prevArr === void 0 ? null : _customConfig$prevArr,
          _customConfig$nextArr = customConfig.nextArrow,
          nextArrow = _customConfig$nextArr === void 0 ? null : _customConfig$nextArr,
          _customConfig$customA = customConfig.customArrow,
          customArrow = _customConfig$customA === void 0 ? false : _customConfig$customA,
          _customConfig$nav = customConfig.nav,
          nav = _customConfig$nav === void 0 ? false : _customConfig$nav,
          _customConfig$dots = customConfig.dots,
          dots = _customConfig$dots === void 0 ? false : _customConfig$dots,
          _customConfig$autoPla = customConfig.autoPlay,
          autoPlay = _customConfig$autoPla === void 0 ? false : _customConfig$autoPla,
          _customConfig$rtl = customConfig.rtl,
          rtl = _customConfig$rtl === void 0 ? false : _customConfig$rtl,
          _customConfig$drag = customConfig.drag,
          drag = _customConfig$drag === void 0 ? true : _customConfig$drag,
          _customConfig$autoWid = customConfig.autoWidth,
          autoWidth = _customConfig$autoWid === void 0 ? false : _customConfig$autoWid,
          _customConfig$nextSpe = customConfig.nextSpeed,
          nextSpeed = _customConfig$nextSpe === void 0 ? 2000 : _customConfig$nextSpe,
          _customConfig$thresho = customConfig.threshold,
          threshold = _customConfig$thresho === void 0 ? 50 : _customConfig$thresho,
          _customConfig$freeScr = customConfig.freeScroll,
          freeScroll = _customConfig$freeScr === void 0 ? false : _customConfig$freeScr,
          _customConfig$paginat = customConfig.paginationWrapper,
          paginationWrapper = _customConfig$paginat === void 0 ? null : _customConfig$paginat,
          _customConfig$callBac = customConfig.callBack,
          callBack = _customConfig$callBac === void 0 ? function () {} : _customConfig$callBac,
          _customConfig$beforeC = customConfig.beforeChange,
          beforeChange = _customConfig$beforeC === void 0 ? function () {} : _customConfig$beforeC;
      _this.config = {
        slider: slider,
        infinite: infinite,
        responsive: responsive,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        customArrow: customArrow,
        nav: nav,
        dots: dots,
        autoPlay: autoPlay,
        rtl: rtl,
        drag: drag,
        autoWidth: autoWidth,
        nextSpeed: nextSpeed,
        threshold: threshold,
        horizontal: horizontal,
        freeScroll: freeScroll,
        callBack: callBack,
        paginationWrapper: paginationWrapper,
        beforeChange: beforeChange
      };
    });

    _defineProperty(this, "getConfig", function () {
      return _this.config;
    });

    _defineProperty(this, "setSlider", function (slider) {
      _this.slider = slider;
    });

    _defineProperty(this, "getSlider", function () {
      return _this.slider;
    });

    _defineProperty(this, "setPosX1", function (posX1) {
      _this.posX1 = posX1;
    });

    _defineProperty(this, "getPosX1", function () {
      return _this.posX1;
    });

    _defineProperty(this, "setIntervalId", function (intervalId) {
      _this.intervalId = intervalId;
    });

    _defineProperty(this, "getIntervalId", function () {
      return _this.intervalId;
    });

    _defineProperty(this, "setInfinite", function (infinite) {
      _this.infinite = infinite;
    });

    _defineProperty(this, "getInfinite", function () {
      return _this.infinite;
    });

    _defineProperty(this, "setDrag", function (drag) {
      _this.drag = drag;
    });

    _defineProperty(this, "getDrag", function () {
      return _this.drag;
    });

    _defineProperty(this, "setPosX2", function (posX2) {
      _this.posX2 = posX2;
    });

    _defineProperty(this, "getPosX2", function () {
      return _this.posX2;
    });

    _defineProperty(this, "setPerSlide", function (perSlide) {
      _this.perSlide = perSlide;
    });

    _defineProperty(this, "getPerSlide", function () {
      return _this.perSlide;
    });

    _defineProperty(this, "setSliderItems", function (sliderItems) {
      _this.sliderItems = sliderItems;
    });

    _defineProperty(this, "getSliderItems", function () {
      return _this.sliderItems;
    });

    _defineProperty(this, "setPosInitial", function (posInitial) {
      _this.posInitial = posInitial;
    });

    _defineProperty(this, "getPosInitial", function () {
      return _this.posInitial;
    });

    _defineProperty(this, "setPosFinal", function (posFinal) {
      _this.posFinal = posFinal;
    });

    _defineProperty(this, "getPosFinal", function () {
      return _this.posFinal;
    });

    _defineProperty(this, "setSlidesLength", function (slidesLength) {
      _this.slidesLength = slidesLength;
    });

    _defineProperty(this, "getSlidesLength", function () {
      return _this.slidesLength;
    });

    _defineProperty(this, "setSliderMainWidth", function (sliderMainWidth) {
      _this.sliderMainWidth = sliderMainWidth;
    });

    _defineProperty(this, "getSliderMainWidth", function () {
      return _this.sliderMainWidth;
    });

    _defineProperty(this, "setOrginSlider", function (orginSlider) {
      _this.orginSlider = orginSlider;
    });

    _defineProperty(this, "getOrginSlider", function () {
      return _this.orginSlider;
    });

    _defineProperty(this, "setSlideSize", function (slideSize) {
      _this.slideSize = slideSize;
    });

    _defineProperty(this, "getSlideSize", function () {
      return _this.slideSize;
    });

    _defineProperty(this, "setSliderItemWidth", function (sliderItemWidth) {
      _this.sliderItemWidth = sliderItemWidth;
    });

    _defineProperty(this, "getSliderItemWidth", function () {
      return _this.sliderItemWidth;
    });

    _defineProperty(this, "setIndex", function (index) {
      _this.index = index;
    });

    _defineProperty(this, "getIndex", function () {
      return _this.index;
    });

    _defineProperty(this, "setAllowShift", function (allowShift) {
      _this.allowShift = allowShift;
    });

    _defineProperty(this, "getAllowShift", function () {
      return _this.allowShift;
    });

    _defineProperty(this, "initialize", function () {
      var _this$getConfig = _this.getConfig(),
          slider = _this$getConfig.slider,
          infinite = _this$getConfig.infinite,
          responsive = _this$getConfig.responsive,
          nav = _this$getConfig.nav,
          dots = _this$getConfig.dots,
          autoPlay = _this$getConfig.autoPlay,
          rtl = _this$getConfig.rtl,
          drag = _this$getConfig.drag,
          nextSpeed = _this$getConfig.nextSpeed,
          customArrow = _this$getConfig.customArrow,
          autoWidth = _this$getConfig.autoWidth,
          horizontal = _this$getConfig.horizontal,
          paginationWrapper = _this$getConfig.paginationWrapper; // reset Slider


      var mainSlider = slider;
      var mainSliderClone = mainSlider.cloneNode(true);

      _this.setSlider(mainSliderClone);

      (0, _utils.removeAllChildren)({
        wrapper: slider,
        className: "clone"
      }); // ----------- start init variables  -----

      _this.setSlider(slider);

      var sliderClienWidth = _this.getSlider().getBoundingClientRect().width;

      _this.setSliderMainWidth(sliderClienWidth);

      var sliderSlidesSelector = (0, _utils.childFider)({
        wrapper: slider,
        className: ".slides"
      });

      _this.setSliderItems(sliderSlidesSelector);

      var sliderChildWidth = (0, _utils.calcSliderChildWidth)({
        responsiveItemCount: (0, _utils.responsiveItemCount)(responsive),
        slider: _this.getSlider()
      });

      _this.setSlideSize(sliderChildWidth);

      var sliderItemWidth = (0, _utils.calcSliderChildWidth)({
        responsiveItemCount: (0, _utils.responsiveItemCount)(responsive),
        slider: _this.getSlider()
      });

      _this.setSliderItemWidth(sliderItemWidth); // init slider for start


      var slides = (0, _utils.vdomArrayConvertor)(sliderSlidesSelector.children);
      var sliderLength = slides.length;

      _this.setSlidesLength(sliderLength);

      var perSlide = (0, _utils.switchInfiniteResponsiveCount)((0, _utils.truncResponsiveItemCount)(responsive), infinite);

      _this.setPerSlide(perSlide);

      var infCheck = (0, _utils.infiniteChecker)({
        infinite: infinite,
        perSlide: perSlide,
        sliderLength: sliderLength
      });

      _this.setInfinite(infCheck);

      var dragCheck = (0, _utils.dragChecker)({
        drag: drag,
        perSlide: (0, _utils.truncResponsiveItemCount)(responsive),
        sliderLength: sliderLength
      });

      _this.setDrag(dragCheck); // set init index


      if (infCheck) {
        _this.setIndex(perSlide + 1);
      } else {
        _this.setIndex(0);
      }

      if (rtl) {
        var classItemParams = {
          item: slider,
          className: "slider-rtl"
        };
        (0, _utils.addClassToElement)(classItemParams);
      }

      if (nav) {
        if (!customArrow) {
          (0, _utils.elementCreator)({
            tag: "Span",
            wrapper: slider,
            className: "control next"
          });
          (0, _utils.elementCreator)({
            tag: "Span",
            wrapper: slider,
            className: "control prev"
          });
        }

        _this.sliderArrows = new _index3["default"]({
          core: _this
        });

        var index = _this.getIndex();

        if (sliderLength <= (0, _utils.truncResponsiveItemCount)(responsive) || autoWidth && (0, _utils.calcAutoWidthAllSliderItems)(_this.sliderItems) <= _this.sliderMainWidth) {
          (0, _utils.prevNone)(slider);
          (0, _utils.nextNone)(slider);
        }

        if (!infCheck) {
          if (index === 0) {
            (0, _utils.prevNone)(slider);
          }
        }
      }

      if (dots || paginationWrapper && paginationWrapper.current) {
        if (dots) {
          (0, _utils.elementCreator)({
            tag: "Ul",
            wrapper: slider,
            className: "dots"
          });
        }

        _this.sliderDots = new _index["default"]({
          core: _this
        });
      }

      if (autoPlay) {
        var isIntervalRunning = false;
        var time = nextSpeed || 2000;

        var intervalNext = function intervalNext() {
          isIntervalRunning = true;

          _this.next();
        };

        var intervalPlay = function intervalPlay() {
          clearInterval(_this.getIntervalId()); // Clearing interval if for some reason it has not been cleared yet

          if (!isIntervalRunning) {
            _this.setIntervalId(setInterval(intervalNext, time));
          }
        };

        var intervalPause = function intervalPause() {
          clearInterval(_this.getIntervalId()); // Clearing interval on window blur

          isIntervalRunning = false;
        }; // toggle on mouseHover


        slider.addEventListener("touchstart", intervalPause);
        slider.addEventListener("touchmove", intervalPause);
        slider.addEventListener("mouseover", intervalPause);
        slider.addEventListener("mouseout", intervalPlay); // toggle on blur and focus browser window tab

        window.addEventListener("blur", intervalPause);
        window.addEventListener("focus", intervalPlay);

        if (!_this.getIntervalId()) {
          intervalPlay();
        }
      }

      _this.sliderTrailer = new _index2["default"]({
        core: _this
      }); // action drag event

      _this.dragEvent = new _index4["default"]({
        core: _this
      });
      sliderSlidesSelector.addEventListener("transitionend", function (e) {
        if (e.target !== sliderSlidesSelector) return;

        _this.transitionendWatcherCall();
      }); // active center mode

      if (horizontal === "center" && sliderLength < (0, _utils.truncResponsiveItemCount)(responsive)) {
        var freeItems = (0, _utils.truncResponsiveItemCount)(responsive) - sliderLength;
        var freeSpace = (0, _utils.directionSetter)({
          rtl: rtl,
          input: freeItems * sliderItemWidth / 2
        });
        _this.sliderItems.style.transform = (0, _utils.setTranslate3d)(freeSpace);
      }

      _this.windowResizeWatcher();
    });

    _defineProperty(this, "transitionendWatcherCall", function () {
      var _this$config = _this.config,
          slider = _this$config.slider,
          responsive = _this$config.responsive,
          dots = _this$config.dots,
          nav = _this$config.nav,
          rtl = _this$config.rtl,
          autoWidth = _this$config.autoWidth,
          infinite = _this$config.infinite,
          freeScroll = _this$config.freeScroll,
          callBack = _this$config.callBack,
          beforeChange = _this$config.beforeChange,
          index = _this.index,
          sliderItems = _this.sliderItems,
          slideSize = _this.slideSize,
          sliderMainWidth = _this.sliderMainWidth,
          slidesLength = _this.slidesLength,
          sliderItemWidth = _this.sliderItemWidth,
          setIndex = _this.setIndex,
          setAllowShift = _this.setAllowShift;
      (0, _utils.transitionendWatcher)({
        responsive: responsive,
        infinite: infinite,
        slider: slider,
        rtl: rtl,
        index: index,
        sliderItems: sliderItems,
        slideSize: slideSize,
        sliderMainWidth: sliderMainWidth,
        dots: dots,
        slidesLength: slidesLength,
        sliderItemWidth: sliderItemWidth,
        nav: nav,
        autoWidth: autoWidth,
        freeScroll: freeScroll,
        setAllowShift: setAllowShift,
        setIndex: setIndex,
        callBack: callBack,
        beforeChange: beforeChange
      });
    });

    _defineProperty(this, "windowResizeWatcher", function () {
      var resizeTimer;

      window.onresize = function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          _this.initialize();
        }, 250);
      };
    });

    this.setConfig(config);
    this.initialize();
  }

  _createClass(SliderCore, [{
    key: "goToShowingSlide",
    value: function goToShowingSlide(newPosition) {
      var _this$config2 = this.config,
          responsive = _this$config2.responsive,
          rtl = _this$config2.rtl,
          infinite = _this$config2.infinite,
          slider = _this$config2.slider,
          nav = _this$config2.nav,
          autoWidth = _this$config2.autoWidth,
          getSliderItems = this.getSliderItems,
          transitionendWatcherCall = this.transitionendWatcherCall,
          getSliderItemWidth = this.getSliderItemWidth,
          setIndex = this.setIndex,
          setPosInitial = this.setPosInitial,
          getSlidesLength = this.getSlidesLength,
          slideSize = this.slideSize,
          sliderMainWidth = this.sliderMainWidth,
          perSlide = this.perSlide;

      if (getSlidesLength() <= (0, _utils.responsiveItemCount)(responsive)) {
        return false;
      }

      var sliderItems = getSliderItems();
      var newIndex = infinite ? newPosition + (0, _utils.responsiveItemCount)(responsive) + 1 : newPosition;
      var result = (0, _utils.directionSetter)({
        rtl: rtl,
        input: -getSliderItemWidth() * newIndex
      });
      var finalItemPosition = (0, _utils.calcFinalItemPosition)({
        indexItem: newIndex,
        slideSize: slideSize,
        sliderItems: sliderItems,
        sliderMainWidth: sliderMainWidth,
        perSlide: perSlide,
        slidesLength: getSlidesLength(),
        infinite: infinite,
        slider: slider,
        nav: nav,
        rtl: rtl,
        autoWidth: autoWidth
      });

      if (Math.abs(result) < Math.abs(finalItemPosition)) {
        sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
        setIndex(newIndex);
        setPosInitial(result);
        setTimeout(function () {
          transitionendWatcherCall();
        }, 0);
        return newIndex;
      }

      sliderItems.style.transform = (0, _utils.setTranslate3d)(-finalItemPosition);
      setIndex(newIndex);
      setPosInitial(-finalItemPosition);
      setTimeout(function () {
        transitionendWatcherCall();
      }, 0);
      return newIndex;
    }
  }, {
    key: "refresh",
    value: function refresh(flag) {
      if (flag) {
        this.initialize();
      }
    }
  }, {
    key: "next",
    value: function next() {
      var sliderItems = this.sliderItems,
          index = this.index,
          perSlide = this.perSlide,
          slideSize = this.slideSize,
          slidesLength = this.slidesLength,
          sliderMainWidth = this.sliderMainWidth,
          getInfinite = this.getInfinite,
          _this$config3 = this.config,
          slider = _this$config3.slider,
          responsive = _this$config3.responsive,
          rtl = _this$config3.rtl,
          autoWidth = _this$config3.autoWidth;
      var classItemParams = {
        item: (0, _utils.childFider)({
          wrapper: slider,
          className: ".slides"
        }),
        className: "shifting"
      };
      (0, _utils.addClassToElement)(classItemParams);
      this.setIndex((0, _partial.shiftSlideIsDir)({
        sliderItems: sliderItems,
        index: index,
        perSlide: perSlide,
        slideSize: slideSize,
        slidesLength: slidesLength,
        sliderMainWidth: sliderMainWidth,
        responsiveItem: (0, _utils.responsiveItemCount)(responsive),
        infinite: getInfinite(),
        slider: slider,
        rtl: rtl,
        autoWidth: autoWidth
      }));
    }
  }]);

  return SliderCore;
}();

var _default = SliderCore;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/dragEvent/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/dragEvent/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _partial = __webpack_require__(/*! ./partial */ "./node_modules/es6-simple-carousel/dist/scripts/dragEvent/partial.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DragEvent = /*#__PURE__*/function () {
  function DragEvent(params) {
    _classCallCheck(this, DragEvent);

    var core = params.core;
    this.setCore(core);
    this.initialize();
  }

  _createClass(DragEvent, [{
    key: "setCore",
    value: function setCore(core) {
      this.core = core;
    }
  }, {
    key: "getCore",
    value: function getCore() {
      return this.core;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this$core = this.core,
          _this$core$config = _this$core.config,
          responsive = _this$core$config.responsive,
          threshold = _this$core$config.threshold,
          rtl = _this$core$config.rtl,
          nav = _this$core$config.nav,
          autoWidth = _this$core$config.autoWidth,
          freeScroll = _this$core$config.freeScroll,
          getDrag = _this$core.getDrag,
          getInfinite = _this$core.getInfinite,
          getSliderItems = _this$core.getSliderItems,
          setPosInitial = _this$core.setPosInitial,
          setPosX1 = _this$core.setPosX1,
          getPosX1 = _this$core.getPosX1,
          setPosX2 = _this$core.setPosX2,
          getPosX2 = _this$core.getPosX2,
          getSlider = _this$core.getSlider,
          getPerSlide = _this$core.getPerSlide,
          getSlidesLength = _this$core.getSlidesLength,
          getIndex = _this$core.getIndex,
          getSlideSize = _this$core.getSlideSize,
          getSliderMainWidth = _this$core.getSliderMainWidth,
          getSliderItemWidth = _this$core.getSliderItemWidth,
          setIndex = _this$core.setIndex,
          setPosFinal = _this$core.setPosFinal,
          getPosFinal = _this$core.getPosFinal,
          setAllowShift = _this$core.setAllowShift,
          transitionendWatcherCall = _this$core.transitionendWatcherCall;
      var infinite = getInfinite();
      var sliderItems = getSliderItems();
      var drag = getDrag();
      var startTrans = null;

      var dragEndCall = function dragEndCall() {
        var dragStartParams = {
          sliderItems: getSliderItems(),
          slidesLength: getSlidesLength(),
          slideSize: getSlideSize(),
          sliderMainWidth: getSliderMainWidth(),
          slider: getSlider(),
          posFinal: getPosFinal(),
          threshold: threshold,
          responsive: responsive,
          infinite: infinite,
          rtl: rtl,
          nav: nav,
          autoWidth: autoWidth,
          setIndex: setIndex,
          setPosFinal: setPosFinal,
          transitionendWatcherCall: transitionendWatcherCall,
          dragAction: _partial.dragAction,
          drag: drag,
          setPosInitial: setPosInitial,
          setPosX1: setPosX1,
          setAllowShift: setAllowShift,
          index: getIndex(),
          sliderItemWidth: getSliderItemWidth(),
          freeScroll: freeScroll,
          startTrans: startTrans
        };
        (0, _partial.dragEnd)(dragStartParams);
      };

      var dragActionCall = function dragActionCall(e) {
        var dragActionParams = {
          e: e,
          getPosX1: getPosX1,
          setPosX1: setPosX1,
          setPosX2: setPosX2,
          setPosInitial: setPosInitial,
          getSliderItems: getSliderItems,
          threshold: threshold,
          rtl: rtl,
          autoWidth: autoWidth,
          getPosX2: getPosX2,
          getSlidesLength: getSlidesLength,
          getPerSlide: getPerSlide,
          responsive: responsive,
          getSlider: getSlider,
          infinite: infinite,
          getSlideSize: getSlideSize,
          getSliderMainWidth: getSliderMainWidth
        };
        (0, _partial.dragAction)(dragActionParams);
      };

      var dragStartCall = function dragStartCall(e) {
        var dragStartParams = {
          e: e,
          sliderItems: sliderItems,
          setPosInitial: setPosInitial,
          setPosX1: setPosX1,
          dragEndCall: dragEndCall,
          dragActionCall: dragActionCall,
          sliderMainWidth: getSliderMainWidth(),
          rtl: rtl,
          autoWidth: autoWidth
        };
        startTrans = (0, _utils.getTranslate3d)(sliderItems);
        (0, _partial.dragStart)(dragStartParams);
      }; // Mouse events


      sliderItems.addEventListener("mousedown", dragStartCall); // Touch events

      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, "passive", {
          // eslint-disable-next-line getter-return
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts); // eslint-disable-next-line no-empty
      } catch (e) {}

      sliderItems.addEventListener("touchstart", dragStartCall, supportsPassive ? {
        passive: true
      } : false);
      sliderItems.addEventListener("touchend", dragEndCall);
      sliderItems.addEventListener("touchmove", dragActionCall);
    }
  }]);

  return DragEvent;
}();

exports["default"] = DragEvent;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/dragEvent/partial.js":
/*!****************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/dragEvent/partial.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mouseEventNull = exports.dragStart = exports.dragEnd = exports.dragActionTouchmovePosX2 = exports.dragActionTouchmovePosX1 = exports.dragActionMousemovePosX1 = exports.dragActionMousemove = exports.dragActionCalcPosition = exports.dragAction = exports.directionTouchClientX = exports.directionClientX = exports.caroueslTouchStart = exports.caroueslDragStart = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

var directionTouchClientX = function directionTouchClientX(params) {
  var rtl = params.rtl,
      e = params.e,
      sliderMainWidth = params.sliderMainWidth;
  if (rtl) return sliderMainWidth - e.touches[0].clientX;
  return e.touches[0].clientX;
};

exports.directionTouchClientX = directionTouchClientX;

var caroueslTouchStart = function caroueslTouchStart(params) {
  return directionTouchClientX(params);
};

exports.caroueslTouchStart = caroueslTouchStart;

var dragActionTouchmovePosX2 = function dragActionTouchmovePosX2(params) {
  var e = params.e,
      posX1 = params.posX1,
      rtl = params.rtl,
      sliderMainWidth = params.sliderMainWidth;
  return posX1 - directionTouchClientX({
    rtl: rtl,
    e: e,
    sliderMainWidth: sliderMainWidth
  });
};

exports.dragActionTouchmovePosX2 = dragActionTouchmovePosX2;

var dragActionTouchmovePosX1 = function dragActionTouchmovePosX1(params) {
  return directionTouchClientX(params);
};

exports.dragActionTouchmovePosX1 = dragActionTouchmovePosX1;

var directionClientX = function directionClientX(params) {
  var rtl = params.rtl,
      e = params.e,
      sliderMainWidth = params.sliderMainWidth;
  if (rtl) return sliderMainWidth - e.clientX;
  return e.clientX;
};

exports.directionClientX = directionClientX;

var caroueslDragStart = function caroueslDragStart(params) {
  var e = params.e,
      dragEndCall = params.dragEndCall,
      dragActionCall = params.dragActionCall,
      sliderMainWidth = params.sliderMainWidth,
      rtl = params.rtl;
  document.onmouseup = dragEndCall;
  document.onmousemove = dragActionCall;
  return directionClientX({
    rtl: rtl,
    e: e,
    sliderMainWidth: sliderMainWidth
  });
};

exports.caroueslDragStart = caroueslDragStart;

var dragActionMousemove = function dragActionMousemove(params) {
  var posX1 = params.posX1,
      e = params.e,
      rtl = params.rtl,
      sliderMainWidth = params.sliderMainWidth;
  return posX1 - directionClientX({
    rtl: rtl,
    e: e,
    sliderMainWidth: sliderMainWidth
  });
};

exports.dragActionMousemove = dragActionMousemove;

var dragActionMousemovePosX1 = function dragActionMousemovePosX1(_ref) {
  var rtl = _ref.rtl,
      e = _ref.e,
      sliderMainWidth = _ref.sliderMainWidth;
  return directionClientX({
    rtl: rtl,
    e: e,
    sliderMainWidth: sliderMainWidth
  });
}; // eslint-disable-next-line consistent-return


exports.dragActionMousemovePosX1 = dragActionMousemovePosX1;

var dragActionCalcPosition = function dragActionCalcPosition(params) {
  var sliderItems = params.sliderItems,
      posX2 = params.posX2,
      rtl = params.rtl,
      slidesLength = params.slidesLength,
      sliderItemWidth = params.sliderItemWidth,
      perSlide = params.perSlide,
      slideSize = params.slideSize,
      sliderMainWidth = params.sliderMainWidth,
      infinite = params.infinite,
      threshold = params.threshold,
      autoWidth = params.autoWidth;

  var posX2New = function posX2New() {
    if (rtl) return -posX2;
    return posX2;
  };

  var thresholdNew = function thresholdNew() {
    if (rtl) return -threshold;
    return threshold;
  };

  var sliderItemWidthNew = function sliderItemWidthNew() {
    if (rtl) return sliderItemWidth;
    return -sliderItemWidth;
  };

  var finalItemPosition = (0, _utils.directionSetter)({
    rtl: rtl,
    input: (0, _utils.calcFinalItemPosition)({
      slideSize: slideSize,
      slidesLength: slidesLength,
      sliderMainWidth: sliderMainWidth,
      perSlide: perSlide,
      infinite: infinite,
      autoWidth: autoWidth,
      sliderItems: sliderItems
    })
  }); // when slidesLength <= perSlide dragEvent is disable

  if (slidesLength <= perSlide) {
    return false;
  }

  if (!infinite && !rtl) {
    // stop drag when firstItem go to lastItem on drag
    var firstTolastDrag = (0, _utils.getTranslate3d)(sliderItems) - posX2New() > sliderItemWidthNew() * perSlide + thresholdNew(); // stop drag when lastItem go to fistItem on drag

    var lastToFirstDrag = (0, _utils.getTranslate3d)(sliderItems) - posX2New() <= finalItemPosition - thresholdNew();

    if (firstTolastDrag || lastToFirstDrag) {
      return false;
    }
  }

  if (infinite && !rtl) {
    // stop drag when firstItem go to lastItem on drag
    var _firstTolastDrag = (0, _utils.getTranslate3d)(sliderItems) - posX2New() > 0; // stop drag when lastItem go to fistItem on drag


    var _lastToFirstDrag = (0, _utils.getTranslate3d)(sliderItems) - posX2New() + 5 < sliderItemWidthNew() * (slidesLength + perSlide + 1);

    if (_firstTolastDrag || _lastToFirstDrag) {
      return false;
    }
  }

  if (!infinite && rtl) {
    // stop drag when firstItem go to lastItem on drag
    var _firstTolastDrag2 = (0, _utils.getTranslate3d)(sliderItems) - posX2New() < sliderItemWidthNew() * perSlide + thresholdNew(); // stop drag when lastItem go to fistItem on drag


    var _lastToFirstDrag2 = (0, _utils.getTranslate3d)(sliderItems) - posX2New() >= finalItemPosition - thresholdNew();

    if (_firstTolastDrag2 || _lastToFirstDrag2) {
      return false;
    }
  }

  if (infinite && rtl) {
    // stop drag when firstItem go to lastItem on drag
    var _firstTolastDrag3 = (0, _utils.getTranslate3d)(sliderItems) - posX2New() < 0; // stop drag when lastItem go to fistItem on drag


    var _lastToFirstDrag3 = (0, _utils.getTranslate3d)(sliderItems) - posX2New() - 5 > sliderItemWidthNew() * (slidesLength + perSlide + 1);

    if (_firstTolastDrag3 || _lastToFirstDrag3) {
      return false;
    }
  }

  var result = function result() {
    return (0, _utils.getTranslate3d)(sliderItems) - posX2New();
  };

  sliderItems.style.transform = (0, _utils.setTranslate3d)(result());
};

exports.dragActionCalcPosition = dragActionCalcPosition;

var mouseEventNull = function mouseEventNull() {
  document.onmouseup = null;
  document.onmousemove = null;
};

exports.mouseEventNull = mouseEventNull;

var dragStart = function dragStart(params) {
  var e = params.e;
  var sliderItems = params.sliderItems,
      dragEndCall = params.dragEndCall,
      dragActionCall = params.dragActionCall,
      setPosInitial = params.setPosInitial,
      setPosX1 = params.setPosX1,
      sliderMainWidth = params.sliderMainWidth,
      rtl = params.rtl;
  e = e || window.event;
  var posInitial = (0, _utils.getTranslate3d)(sliderItems);

  if (e.type === "touchstart") {
    setPosInitial(posInitial);
    setPosX1(caroueslTouchStart({
      e: e,
      rtl: rtl,
      sliderMainWidth: sliderMainWidth
    }));
  } else {
    e.preventDefault();
    var dragActionParams = {
      e: e,
      rtl: rtl,
      dragEndCall: dragEndCall,
      dragActionCall: dragActionCall,
      sliderMainWidth: sliderMainWidth
    };
    setPosInitial(posInitial);
    setPosX1(caroueslDragStart(dragActionParams));
  }
}; // eslint-disable-next-line consistent-return


exports.dragStart = dragStart;

var dragAction = function dragAction(params) {
  var e = params.e;
  var getPosX1 = params.getPosX1,
      setPosX1 = params.setPosX1,
      setPosX2 = params.setPosX2,
      rtl = params.rtl,
      getSliderItems = params.getSliderItems,
      threshold = params.threshold,
      getPosX2 = params.getPosX2,
      getSlidesLength = params.getSlidesLength,
      getPerSlide = params.getPerSlide,
      responsive = params.responsive,
      getSlider = params.getSlider,
      infinite = params.infinite,
      getSlideSize = params.getSlideSize,
      getSliderMainWidth = params.getSliderMainWidth,
      autoWidth = params.autoWidth;
  var sliderMainWidth = getSliderMainWidth();
  e = e || window.event;
  var clientXParams = {
    e: e,
    rtl: rtl,
    sliderMainWidth: sliderMainWidth
  };
  var perSlide = (0, _utils.truncResponsiveItemCount)(responsive); // when drag false or slidesLength <= perSlide dragEvent is disable

  if (getSlidesLength() <= perSlide) {
    return false;
  }

  if (autoWidth) {
    if ((0, _utils.calcAutoWidthAllSliderItems)(getSliderItems()) <= sliderMainWidth) {
      return false;
    }
  }

  var startAvoidClicks = function startAvoidClicks(Posx) {
    if (Math.abs(Posx) > 2) {
      (0, _utils.addClassToElement)({
        item: getSliderItems(),
        className: "avoid-clicks"
      });
    }

    return Posx;
  };

  if (e.type === "touchmove") {
    var dragActionTouchmovePosX2Params = {
      posX1: getPosX1(),
      e: e,
      rtl: rtl,
      sliderMainWidth: sliderMainWidth
    };
    setPosX2(dragActionTouchmovePosX2(dragActionTouchmovePosX2Params));
    setPosX1(dragActionTouchmovePosX1(clientXParams));
    startAvoidClicks(dragActionTouchmovePosX2(dragActionTouchmovePosX2Params));
  } else {
    var dragActionMousemoveParams = {
      posX1: getPosX1(),
      e: e,
      rtl: rtl,
      sliderMainWidth: sliderMainWidth
    };
    setPosX2(dragActionMousemove(dragActionMousemoveParams));
    setPosX1(dragActionMousemovePosX1(clientXParams));
    startAvoidClicks(dragActionMousemove(dragActionMousemoveParams));
  }

  var dragActionCalcPositionParams = {
    sliderItems: getSliderItems(),
    posX2: getPosX2(),
    slidesLength: getSlidesLength(),
    perSlide: getPerSlide(),
    sliderItemWidth: (0, _utils.calcSliderChildWidth)({
      responsiveItemCount: (0, _utils.responsiveItemCount)(responsive),
      slider: getSlider()
    }),
    slideSize: getSlideSize(),
    sliderMainWidth: sliderMainWidth,
    infinite: infinite,
    threshold: threshold,
    rtl: rtl,
    autoWidth: autoWidth
  };
  dragActionCalcPosition(dragActionCalcPositionParams);
}; // eslint-disable-next-line consistent-return


exports.dragAction = dragAction;

var dragEnd = function dragEnd(params) {
  var sliderItems = params.sliderItems,
      threshold = params.threshold,
      slidesLength = params.slidesLength,
      responsive = params.responsive,
      infinite = params.infinite,
      slideSize = params.slideSize,
      sliderMainWidth = params.sliderMainWidth,
      sliderItemWidth = params.sliderItemWidth,
      setIndex = params.setIndex,
      transitionendWatcherCall = params.transitionendWatcherCall,
      slider = params.slider,
      setPosFinal = params.setPosFinal,
      getPosFinal = params.getPosFinal,
      nav = params.nav,
      rtl = params.rtl,
      autoWidth = params.autoWidth,
      freeScroll = params.freeScroll,
      index = params.index,
      startTrans = params.startTrans;
  (0, _utils.removeClassFromElement)({
    item: sliderItems,
    className: "avoid-clicks"
  });
  var perSlide = (0, _utils.truncResponsiveItemCount)(responsive); // when drag false or slidesLength <= perSlide dragEvent is disable

  if (slidesLength <= perSlide) {
    mouseEventNull();
    return false;
  }

  if (autoWidth) {
    if ((0, _utils.calcAutoWidthAllSliderItems)(sliderItems) <= sliderMainWidth) {
      return false;
    }
  }

  var thresholdNew = function thresholdNew() {
    if (rtl) return -threshold;
    return threshold;
  };

  var finalItemPosition = (0, _utils.directionSetter)({
    rtl: rtl,
    input: (0, _utils.calcFinalItemPosition)({
      slideSize: slideSize,
      slidesLength: slidesLength,
      sliderMainWidth: sliderMainWidth,
      perSlide: perSlide,
      infinite: infinite,
      autoWidth: autoWidth,
      sliderItems: sliderItems
    })
  });
  setPosFinal((0, _utils.getTranslate3d)(sliderItems));
  var calcIndex = (0, _utils.calcCurrentIndex)({
    sliderItems: sliderItems,
    infinite: infinite,
    perSlide: perSlide,
    slideSize: slideSize,
    sliderMainWidth: sliderMainWidth,
    slidesLength: slidesLength,
    freeScroll: freeScroll,
    autoWidth: autoWidth,
    index: index,
    responsiveItemCount: (0, _utils.responsiveItemCount)(responsive)
  });
  var currentPosition = (0, _utils.getTranslate3d)(sliderItems);
  setIndex(calcIndex);

  if (!infinite && calcIndex > slidesLength && calcIndex < slidesLength + perSlide || infinite && calcIndex + perSlide === perSlide) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)(finalItemPosition);
  }

  if (!infinite && nav) {
    (0, _utils.prevBlock)(slider);
    (0, _utils.nextBlock)(slider);
  }

  if (!infinite && calcIndex === slidesLength + perSlide) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)(getPosFinal() - sliderItems.children[0].clientWidth);
  }

  if (!infinite && (0, _utils.getTranslate3d)(sliderItems) <= thresholdNew() && (0, _utils.getTranslate3d)(sliderItems) >= 0 || rtl && (0, _utils.getTranslate3d)(sliderItems) <= 0) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)(0);

    if (nav) {
      (0, _utils.prevNone)(slider);
      (0, _utils.nextBlock)(slider);
    }
  }

  if (!infinite && !rtl && (0, _utils.getTranslate3d)(sliderItems) <= finalItemPosition) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)(finalItemPosition);

    if (nav) {
      (0, _utils.nextNone)(slider);
      (0, _utils.prevBlock)(slider);
    }
  }

  if (!infinite && rtl && (0, _utils.getTranslate3d)(sliderItems) >= finalItemPosition) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)(finalItemPosition);

    if (nav) {
      (0, _utils.nextNone)(slider);
      (0, _utils.prevBlock)(slider);
    }
  }

  if (!infinite && Math.abs(currentPosition) < Math.abs(finalItemPosition) && currentPosition > 0 && startTrans !== currentPosition && !freeScroll && !autoWidth) {
    (0, _utils.addClassToElement)({
      item: sliderItems,
      className: "soft-transition"
    });
    var result = (0, _utils.directionSetter)({
      rtl: rtl,
      input: -sliderItemWidth * calcIndex
    });
    sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
    setTimeout(function () {
      (0, _utils.removeClassFromElement)({
        item: sliderItems,
        className: "soft-transition"
      });
    }, 300);
  }

  mouseEventNull();
  transitionendWatcherCall();
};

exports.dragEnd = dragEnd;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

var _partial = __webpack_require__(/*! ./partial */ "./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/partial.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderTrailer = /*#__PURE__*/function () {
  function SliderTrailer(params) {
    _classCallCheck(this, SliderTrailer);

    var core = params.core;
    this.setCore(core);
    this.initialize();
  }

  _createClass(SliderTrailer, [{
    key: "setCore",
    value: function setCore(core) {
      this.core = core;
    }
  }, {
    key: "getCore",
    value: function getCore() {
      return this.core;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this$core = this.core,
          _this$core$config = _this$core.config,
          responsive = _this$core$config.responsive,
          slider = _this$core$config.slider,
          rtl = _this$core$config.rtl,
          autoWidth = _this$core$config.autoWidth,
          freeScroll = _this$core$config.freeScroll,
          getInfinite = _this$core.getInfinite,
          getSliderItems = _this$core.getSliderItems,
          getSlidesLength = _this$core.getSlidesLength,
          getSliderItemWidth = _this$core.getSliderItemWidth,
          getPerSlide = _this$core.getPerSlide,
          getSlideSize = _this$core.getSlideSize,
          getSliderMainWidth = _this$core.getSliderMainWidth,
          getIndex = _this$core.getIndex,
          setIndex = _this$core.setIndex;
      var infinite = getInfinite();
      var sliderItems = getSliderItems();
      var slidesLength = getSlidesLength();
      var slideSize = getSlideSize();
      var sliderItemWidth = getSliderItemWidth();
      var perSlide = getPerSlide();
      var sliderMainWidth = getSliderMainWidth();
      var index = getIndex(); // set width per slide

      (0, _utils.setSliderItemsChildWidth)({
        sliderItems: sliderItems,
        slider: slider,
        responsive: responsive,
        autoWidth: autoWidth
      }); // init slider position

      setIndex((0, _utils.setSliderItemsPosition)({
        indexItem: index,
        sliderItemWidth: sliderItemWidth,
        sliderItems: sliderItems,
        rtl: rtl
      }));

      if (!autoWidth) {
        (0, _partial.setPageNumberOnChild)({
          sliderItems: sliderItems,
          responsive: responsive
        }); // Clone group of slide from infinite carousel

        if (infinite) {
          var cloneNodeGeneratorParams = {
            perSlide: perSlide,
            sliderItems: sliderItems,
            wrapper: slider
          };
          (0, _partial.cloneNodeGenerator)(cloneNodeGeneratorParams);
        }

        (0, _utils.setActiveclassToCurrent)({
          sliderItems: sliderItems,
          perSlide: perSlide,
          slideSize: slideSize,
          sliderMainWidth: sliderMainWidth,
          index: getIndex(),
          infinite: infinite,
          slidesLength: slidesLength,
          autoWidth: autoWidth,
          freeScroll: freeScroll
        });
      } // add loaded class to main slide after init


      var classItemParams = {
        item: slider,
        className: "loaded"
      };
      (0, _utils.addClassToElement)(classItemParams);
    }
  }]);

  return SliderTrailer;
}();

exports["default"] = SliderTrailer;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/partial.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/slideTrailer/partial.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setPageNumberOnChild = exports.cloneNodeInsertBefore = exports.cloneNodeGenerator = exports.cloneNodeAppendChild = exports.addCloneClass = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setPageNumberOnChild = function setPageNumberOnChild(params) {
  var sliderItems = params.sliderItems,
      responsive = params.responsive;
  var perSlide = (0, _utils.truncResponsiveItemCount)(responsive);
  var newArrChild = [];
  (0, _utils.vdomArrayConvertor)(sliderItems.children).forEach(function (item, itemIndex) {
    item.setAttribute('data-page', Math.trunc(itemIndex / perSlide) + 1);
    newArrChild.push(item.getAttribute('data-page'));
  });
  return newArrChild;
};

exports.setPageNumberOnChild = setPageNumberOnChild;

var addCloneClass = function addCloneClass(item) {
  item.classList.add('clone');
  return item;
};

exports.addCloneClass = addCloneClass;

var cloneNodeGenerator = function cloneNodeGenerator(params) {
  var perSlide = params.perSlide,
      sliderItems = params.sliderItems;
  var sliderItemsChildren = (0, _utils.vdomArrayConvertor)(sliderItems.children);

  var deepCloneSliderItemsChildren = _toConsumableArray(sliderItemsChildren);

  var cloneNodeParams = {
    perSlide: perSlide,
    deepCloneSliderItemsChildren: deepCloneSliderItemsChildren,
    sliderItems: sliderItems
  };
  cloneNodeAppendChild(cloneNodeParams);
  cloneNodeInsertBefore(cloneNodeParams);
};

exports.cloneNodeGenerator = cloneNodeGenerator;

var cloneNodeAppendChild = function cloneNodeAppendChild(params) {
  var perSlide = params.perSlide,
      deepCloneSliderItemsChildren = params.deepCloneSliderItemsChildren,
      sliderItems = params.sliderItems;
  var newArrChild = [];
  deepCloneSliderItemsChildren.forEach(function (element, index) {
    if (index <= perSlide) {
      var cln = element.cloneNode(true);
      addCloneClass(cln);
      newArrChild.push(index);
      sliderItems.appendChild(cln);
    }
  });
  return newArrChild;
};

exports.cloneNodeAppendChild = cloneNodeAppendChild;

var cloneNodeInsertBefore = function cloneNodeInsertBefore(params) {
  var perSlide = params.perSlide,
      deepCloneSliderItemsChildren = params.deepCloneSliderItemsChildren,
      sliderItems = params.sliderItems;
  var itemsChildrenLength = deepCloneSliderItemsChildren.length - perSlide - 1;
  deepCloneSliderItemsChildren.forEach(function (element, index) {
    if (index >= itemsChildrenLength) {
      var cln = element.cloneNode(true);
      addCloneClass(cln);
      sliderItems.insertBefore(cln, deepCloneSliderItemsChildren[0]);
    }
  });
};

exports.cloneNodeInsertBefore = cloneNodeInsertBefore;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

var _partial = __webpack_require__(/*! ./partial */ "./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/partial.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderArrows = /*#__PURE__*/function () {
  function SliderArrows(params) {
    _classCallCheck(this, SliderArrows);

    var core = params.core;
    this.setCore(core);
    this.initialize();
  }

  _createClass(SliderArrows, [{
    key: "setCore",
    value: function setCore(core) {
      this.core = core;
    }
  }, {
    key: "getCore",
    value: function getCore() {
      return this.core;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var _this$core = this.core,
          slider = _this$core.config.slider,
          getSliderItems = _this$core.getSliderItems,
          setAllowShift = _this$core.setAllowShift;
      var prevSelector = (0, _utils.childFider)({
        wrapper: slider,
        className: '.prev'
      });
      var nextSelector = (0, _utils.childFider)({
        wrapper: slider,
        className: '.next'
      }); // Click events

      prevSelector.addEventListener('click', function () {
        return _this.shiftSlide(-1);
      });
      nextSelector.addEventListener('click', function () {
        return _this.shiftSlide(1);
      }); // remove shifting class and allowSHift permission

      var itemClassParams = {
        item: getSliderItems(),
        className: 'shifting'
      };
      (0, _utils.removeClassFromElement)(itemClassParams);
      setAllowShift(true);
    }
  }, {
    key: "shiftSlide",
    value: function shiftSlide(dir, action) {
      var _this$core2 = this.core,
          _this$core2$config = _this$core2.config,
          responsive = _this$core2$config.responsive,
          rtl = _this$core2$config.rtl,
          autoWidth = _this$core2$config.autoWidth,
          getInfinite = _this$core2.getInfinite,
          getSliderItems = _this$core2.getSliderItems,
          setPosInitial = _this$core2.setPosInitial,
          getSlideSize = _this$core2.getSlideSize,
          setIndex = _this$core2.setIndex,
          getIndex = _this$core2.getIndex,
          getSlidesLength = _this$core2.getSlidesLength,
          getSliderMainWidth = _this$core2.getSliderMainWidth,
          getSlider = _this$core2.getSlider,
          getAllowShift = _this$core2.getAllowShift,
          setAllowShift = _this$core2.setAllowShift;
      var perSlide = (0, _utils.truncResponsiveItemCount)(responsive);

      if (getAllowShift()) {
        if (!action) {
          setPosInitial((0, _utils.getTranslate3d)(getSliderItems()));
        }

        var shiftSlideParams = {
          sliderItems: getSliderItems(),
          slideSize: getSlideSize(),
          slidesLength: getSlidesLength(),
          slider: getSlider(),
          sliderMainWidth: getSliderMainWidth(),
          index: getIndex(),
          responsiveItem: (0, _utils.responsiveItemCount)(responsive),
          perSlide: perSlide,
          dir: dir,
          infinite: getInfinite(),
          rtl: rtl,
          autoWidth: autoWidth
        };

        if (dir === 1) {
          setIndex((0, _partial.shiftSlideIsDir)(shiftSlideParams));
        } else if (dir === -1) {
          setIndex((0, _partial.shiftSlideNonDir)(shiftSlideParams));
        }
      }

      var itemClassParams = {
        item: getSliderItems(),
        className: 'shifting'
      };
      (0, _utils.addClassToElement)(itemClassParams);
      setAllowShift(false);
    }
  }]);

  return SliderArrows;
}();

exports["default"] = SliderArrows;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/partial.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/sliderArrows/partial.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.shiftSlideNonDirAutoWidth = exports.shiftSlideNonDir = exports.shiftSlideIsDirAutoWidth = exports.shiftSlideIsDir = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

/* eslint-disable no-use-before-define */
var shiftSlideIsDir = function shiftSlideIsDir(params) {
  var sliderItems = params.sliderItems,
      index = params.index,
      perSlide = params.perSlide,
      slideSize = params.slideSize,
      slidesLength = params.slidesLength,
      responsiveItem = params.responsiveItem,
      infinite = params.infinite,
      slider = params.slider,
      rtl = params.rtl,
      autoWidth = params.autoWidth;
  var FinalItemPosition = (0, _utils.calcFinalItemPosition)(params);

  if (autoWidth) {
    return shiftSlideIsDirAutoWidth({
      sliderItems: sliderItems,
      index: index,
      perSlide: perSlide,
      slideSize: slideSize,
      slidesLength: slidesLength,
      responsiveItem: responsiveItem,
      infinite: infinite,
      slider: slider,
      rtl: rtl,
      autoWidth: autoWidth,
      FinalItemPosition: FinalItemPosition
    });
  }

  var newIndex = index + perSlide; // when slidesLength <= perSlide arrow is disable

  if (slidesLength <= perSlide) {
    (0, _utils.nextNone)(slider);
    (0, _utils.prevBlock)(slider);
    return index;
  }

  if (!infinite && newIndex + perSlide - 1 >= slidesLength - 1 && responsiveItem !== 1) {
    var _result = (0, _utils.directionSetter)({
      rtl: rtl,
      input: FinalItemPosition
    });

    sliderItems.style.transform = (0, _utils.setTranslate3d)(_result);
    (0, _utils.nextNone)(slider);
    (0, _utils.prevBlock)(slider);
    return newIndex;
  } // when perSlide === 1


  if (!infinite && newIndex === slidesLength - 1) {
    (0, _utils.nextNone)(slider);
    (0, _utils.prevBlock)(slider);
  }

  var result = (0, _utils.directionSetter)({
    rtl: rtl,
    input: newIndex * -slideSize
  });
  sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
  return newIndex;
};

exports.shiftSlideIsDir = shiftSlideIsDir;

var shiftSlideNonDir = function shiftSlideNonDir(params) {
  var sliderItems = params.sliderItems,
      slideSize = params.slideSize,
      index = params.index,
      perSlide = params.perSlide,
      infinite = params.infinite,
      slider = params.slider,
      rtl = params.rtl,
      autoWidth = params.autoWidth,
      slidesLength = params.slidesLength;
  var firstItemPosition = (0, _utils.calcFirstItemPosition)(params);

  if (autoWidth) {
    return shiftSlideNonDirAutoWidth({
      sliderItems: sliderItems,
      slideSize: slideSize,
      index: index,
      perSlide: perSlide,
      infinite: infinite,
      slider: slider,
      rtl: rtl,
      autoWidth: autoWidth,
      slidesLength: slidesLength,
      firstItemPosition: firstItemPosition
    });
  }

  var newIndex = index - perSlide;
  var infinitperSlide = infinite ? perSlide : 0;

  if (!infinite && index - infinitperSlide <= perSlide && index !== -1) {
    var _result2 = (0, _utils.directionSetter)({
      rtl: rtl,
      input: firstItemPosition
    });

    sliderItems.style.transform = (0, _utils.setTranslate3d)(_result2);
    (0, _utils.nextBlock)(slider);
    (0, _utils.prevNone)(slider);
    return newIndex;
  }

  if (infinite && newIndex <= 0) {
    var infiniteIndex = newIndex + slidesLength;

    var _result3 = (0, _utils.directionSetter)({
      rtl: rtl,
      input: -infiniteIndex * slideSize
    });

    sliderItems.style.transform = (0, _utils.setTranslate3d)(_result3);
    return infiniteIndex;
  }

  var result = (0, _utils.directionSetter)({
    rtl: rtl,
    input: -newIndex * slideSize
  });
  sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
  return newIndex;
};

exports.shiftSlideNonDir = shiftSlideNonDir;

var shiftSlideNonDirAutoWidth = function shiftSlideNonDirAutoWidth(params) {
  var rtl = params.rtl,
      sliderMainWidth = params.sliderMainWidth,
      sliderItems = params.sliderItems,
      infinite = params.infinite,
      firstItemPosition = params.firstItemPosition,
      slider = params.slider,
      index = params.index;
  var result = (0, _utils.directionSetter)({
    rtl: rtl,
    input: Math.abs((0, _utils.getTranslate3d)(sliderItems)) - sliderMainWidth
  });

  if (!infinite && (!rtl && result <= firstItemPosition || rtl && result >= firstItemPosition)) {
    (0, _utils.nextBlock)(slider);
    (0, _utils.prevNone)(slider);
    sliderItems.style.transform = (0, _utils.setTranslate3d)(firstItemPosition);
    return index;
  }

  sliderItems.style.transform = (0, _utils.setTranslate3d)(-result);
  return index;
};

exports.shiftSlideNonDirAutoWidth = shiftSlideNonDirAutoWidth;

var shiftSlideIsDirAutoWidth = function shiftSlideIsDirAutoWidth(params) {
  var rtl = params.rtl,
      sliderMainWidth = params.sliderMainWidth,
      sliderItems = params.sliderItems,
      infinite = params.infinite,
      FinalItemPosition = params.FinalItemPosition,
      slider = params.slider,
      index = params.index;
  var result = (0, _utils.directionSetter)({
    rtl: rtl,
    input: sliderMainWidth + Math.abs((0, _utils.getTranslate3d)(sliderItems))
  });

  if (!infinite && Math.abs(result) >= Math.abs(FinalItemPosition)) {
    sliderItems.style.transform = (0, _utils.setTranslate3d)((0, _utils.directionSetter)({
      rtl: rtl,
      input: FinalItemPosition
    }));
    (0, _utils.nextNone)(slider);
    (0, _utils.prevBlock)(slider);
    return index;
  }

  sliderItems.style.transform = (0, _utils.setTranslate3d)(-result);
  return index;
};

exports.shiftSlideIsDirAutoWidth = shiftSlideIsDirAutoWidth;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/sliderDots/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/sliderDots/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

var _partial = __webpack_require__(/*! ./partial */ "./node_modules/es6-simple-carousel/dist/scripts/sliderDots/partial.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderDots = /*#__PURE__*/function () {
  function SliderDots(params) {
    _classCallCheck(this, SliderDots);

    var core = params.core;
    this.setCore(core);
    this.initialize();
  }

  _createClass(SliderDots, [{
    key: "setCore",
    value: function setCore(core) {
      this.core = core;
    }
  }, {
    key: "getCore",
    value: function getCore() {
      return this.core;
    }
  }, {
    key: "setDotsSelector",
    value: function setDotsSelector(dotsSelector) {
      this.dotsSelector = dotsSelector;
    }
  }, {
    key: "getDotsSelector",
    value: function getDotsSelector() {
      return this.dotsSelector;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this$core = this.core,
          _this$core$config = _this$core.config,
          slider = _this$core$config.slider,
          responsive = _this$core$config.responsive,
          nav = _this$core$config.nav,
          rtl = _this$core$config.rtl,
          autoWidth = _this$core$config.autoWidth,
          paginationWrapper = _this$core$config.paginationWrapper,
          getInfinite = _this$core.getInfinite,
          getSlidesLength = _this$core.getSlidesLength,
          getSliderItemWidth = _this$core.getSliderItemWidth,
          getSliderMainWidth = _this$core.getSliderMainWidth,
          getSliderItems = _this$core.getSliderItems,
          getSlider = _this$core.getSlider,
          getSlideSize = _this$core.getSlideSize,
          setIndex = _this$core.setIndex,
          setAllowShift = _this$core.setAllowShift,
          setPosInitial = _this$core.setPosInitial;
      var sliderItems = getSliderItems();
      var dotsSelector = paginationWrapper ? paginationWrapper.current.querySelector(".slides") : (0, _utils.childFider)({
        wrapper: slider,
        className: ".dots"
      });

      if (!paginationWrapper) {
        // generate dots items
        var dotsItemsParams = {
          slidesLength: getSlidesLength(),
          responsive: responsive,
          dotsSelector: dotsSelector,
          sliderItems: sliderItems,
          autoWidth: autoWidth,
          sliderMainWidth: getSliderMainWidth()
        };
        (0, _partial.dotsItemsGenerator)(dotsItemsParams);
      } // generate dots group per show slides
      // dots item click for transition on active index


      (0, _utils.vdomArrayConvertor)(dotsSelector.children).forEach(function (item) {
        item.addEventListener("click", function () {
          var dotIndex = parseInt(item.getAttribute("data-dot-index"), 10);
          var indexItem = (0, _utils.truncResponsiveItemCount)(responsive) * (dotIndex - 1);
          var dotsItemsClickParams = {
            indexItem: indexItem,
            sliderItemWidth: getSliderItemWidth(),
            sliderMainWidth: getSliderMainWidth(),
            sliderItems: sliderItems,
            slider: getSlider(),
            slideSize: getSlideSize(),
            slidesLength: getSlidesLength(),
            perSlide: (0, _utils.truncResponsiveItemCount)(responsive),
            infinite: getInfinite(),
            dotIndex: dotIndex,
            responsive: responsive,
            getSliderItems: getSliderItems,
            nav: nav,
            rtl: rtl,
            item: item,
            autoWidth: autoWidth
          };

          var _dotsItemsClick = (0, _partial.dotsItemsClick)(dotsItemsClickParams),
              index = _dotsItemsClick.index,
              allowShift = _dotsItemsClick.allowShift,
              posInitial = _dotsItemsClick.posInitial;

          setIndex(index);
          setAllowShift(allowShift);
          setPosInitial(posInitial);
        });
      });
    }
  }]);

  return SliderDots;
}();

exports["default"] = SliderDots;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/sliderDots/partial.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/sliderDots/partial.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setSliderItemsPositionAfterDotClick = exports.dotsItemsGenerator = exports.dotsItemsClick = exports.AfterDotClickAutoWidth = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/es6-simple-carousel/dist/scripts/utils.js");

/* eslint-disable no-use-before-define */

/* eslint-disable no-plusplus */
var dotsItemsGenerator = function dotsItemsGenerator(params) {
  var dotsSelector = params.dotsSelector;

  for (var i = 0; i < (0, _utils.calcSliderGroupCount)(params); i++) {
    dotsSelector.innerHTML += "<li class=\"dots-item".concat(!i ? ' active' : '', "\" data-dot-index=\"").concat(i + 1, "\">").concat(i + 1, "</li>");
  }

  return dotsSelector;
};

exports.dotsItemsGenerator = dotsItemsGenerator;

var dotsItemsClick = function dotsItemsClick(params) {
  var indexItem = params.indexItem,
      perSlide = params.perSlide,
      sliderItems = params.sliderItems,
      infinite = params.infinite,
      getSliderItems = params.getSliderItems,
      item = params.item;
  setSliderItemsPositionAfterDotClick(params);
  var isActive = item.classList.contains('active');
  var allowShift = true;

  if (!isActive) {
    var itemClassParams = {
      item: getSliderItems(),
      className: 'shifting'
    };
    (0, _utils.addClassToElement)(itemClassParams);
    allowShift = false;
  }

  return {
    index: infinite ? indexItem + perSlide + 1 : indexItem,
    allowShift: allowShift,
    posInitial: (0, _utils.getTranslate3d)(sliderItems)
  };
}; // eslint-disable-next-line consistent-return


exports.dotsItemsClick = dotsItemsClick;

var setSliderItemsPositionAfterDotClick = function setSliderItemsPositionAfterDotClick(params) {
  var indexItem = params.indexItem,
      slideSize = params.slideSize,
      sliderItems = params.sliderItems,
      sliderMainWidth = params.sliderMainWidth,
      perSlide = params.perSlide,
      slidesLength = params.slidesLength,
      infinite = params.infinite,
      slider = params.slider,
      nav = params.nav,
      rtl = params.rtl,
      autoWidth = params.autoWidth;
  var finalItemPosition = (0, _utils.calcFinalItemPosition)(params); // when slidesLength <= perSlide dots is disable

  if (slidesLength <= perSlide || autoWidth && (0, _utils.calcAutoWidthAllSliderItems)(sliderItems) <= sliderMainWidth) {
    return false;
  }

  if (autoWidth) {
    AfterDotClickAutoWidth(params);
  }

  if (!autoWidth) {
    if (!infinite && indexItem + perSlide >= slidesLength) {
      var _result = (0, _utils.directionSetter)({
        rtl: rtl,
        input: finalItemPosition
      });

      sliderItems.style.transform = (0, _utils.setTranslate3d)(_result);

      if (nav) {
        (0, _utils.nextNone)(slider);
        (0, _utils.prevBlock)(slider);
      }

      return true;
    } // after time move to watcher


    if (nav) {
      (0, _utils.nextBlock)(slider);
      (0, _utils.prevBlock)(slider);
    }

    if (!infinite && nav && indexItem === 0) {
      (0, _utils.nextBlock)(slider);
      (0, _utils.prevNone)(slider);
    }

    var newItemIndex = infinite ? indexItem + perSlide + 1 : indexItem;
    var result = (0, _utils.directionSetter)({
      rtl: rtl,
      input: newItemIndex * -slideSize
    });
    sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
  }
};

exports.setSliderItemsPositionAfterDotClick = setSliderItemsPositionAfterDotClick;

var AfterDotClickAutoWidth = function AfterDotClickAutoWidth(params) {
  var sliderItems = params.sliderItems,
      sliderMainWidth = params.sliderMainWidth,
      slider = params.slider,
      nav = params.nav,
      rtl = params.rtl,
      dotIndex = params.dotIndex;
  var firstItemPosition = (0, _utils.calcFirstItemPosition)(params);
  var finalItemPosition = (0, _utils.calcFinalItemPosition)(params);

  if (dotIndex * sliderMainWidth >= Math.abs((0, _utils.calcAutoWidthAllSliderItems)(sliderItems))) {
    var _result2 = (0, _utils.directionSetter)({
      rtl: rtl,
      input: finalItemPosition
    });

    sliderItems.style.transform = (0, _utils.setTranslate3d)(_result2);

    if (nav) {
      (0, _utils.nextNone)(slider);
      (0, _utils.prevBlock)(slider);
    }

    return true;
  }

  if ((dotIndex - 1) * sliderMainWidth === firstItemPosition) {
    (0, _utils.nextBlock)(slider);
    (0, _utils.prevNone)(slider);
  }

  var result = (0, _utils.directionSetter)({
    rtl: rtl,
    input: (dotIndex - 1) * -sliderMainWidth
  });
  sliderItems.style.transform = (0, _utils.setTranslate3d)(result);
  return result;
};

exports.AfterDotClickAutoWidth = AfterDotClickAutoWidth;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/scripts/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/scripts/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.vdomArrayConvertor = exports.truncResponsiveItemCount = exports.transitionendWatcher = exports.switchInfiniteResponsiveCount = exports.sorter = exports.sliderClientWidth = exports.setTranslate3d = exports.setSliderItemsPosition = exports.setSliderItemsChildWidth = exports.setActiveclassToCurrent = exports.responsiveItemCount = exports.removeClassFromElement = exports.removeAllChildren = exports.prevNone = exports.prevBlock = exports.nextNone = exports.nextBlock = exports.isFloat = exports.infiniteChecker = exports.getTranslate3d = exports.elementCreator = exports.dragChecker = exports.dotActive = exports.directionSetter = exports.childFider = exports.calcSliderGroupCount = exports.calcSliderChildWidth = exports.calcFirstItemPosition = exports.calcFinalWithoutAutoWidth = exports.calcFinalWidthAutoWidth = exports.calcFinalItemPosition = exports.calcCurrentIndex = exports.calcAutoWidthAllSliderItems = exports.arrGenerator = exports.addClassToElement = exports.activeChecker = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-use-before-define */
var addClassToElement = function addClassToElement(params) {
  var item = params.item,
      className = params.className;
  item.classList.add(className);
  return item;
};

exports.addClassToElement = addClassToElement;

var removeClassFromElement = function removeClassFromElement(params) {
  var item = params.item,
      className = params.className;
  item.classList.remove(className);
  return item;
};

exports.removeClassFromElement = removeClassFromElement;

var isFloat = function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}; // eslint-disable-next-line consistent-return


exports.isFloat = isFloat;

var calcCurrentIndex = function calcCurrentIndex(params) {
  var sliderItems = params.sliderItems,
      infinite = params.infinite,
      perSlide = params.perSlide,
      slideSize = params.slideSize,
      sliderMainWidth = params.sliderMainWidth,
      slidesLength = params.slidesLength,
      freeScroll = params.freeScroll,
      autoWidth = params.autoWidth,
      responsiveItemCount = params.responsiveItemCount;
  var getIndex = getTranslate3d(sliderItems) / vdomArrayConvertor(sliderItems.children)[0].clientWidth;

  if (infinite) {
    if (getIndex >= 0) return Math.round(getIndex);

    if (getIndex < 0) {
      return slidesLength + Math.round(getIndex);
    }
  }

  if (Math.abs(getTranslate3d(sliderItems)) <= 1) {
    return 0;
  }

  if (Math.abs(getTranslate3d(sliderItems)) > 0) {
    var scroll = Math.abs(getTranslate3d(sliderItems));

    if (!freeScroll && !autoWidth && !isFloat(responsiveItemCount)) {
      return Math.round((scroll + sliderMainWidth) / slideSize - perSlide);
    }

    return Math.trunc((scroll + sliderMainWidth) / slideSize - perSlide);
  }
};

exports.calcCurrentIndex = calcCurrentIndex;

var setActiveclassToCurrent = function setActiveclassToCurrent(params) {
  var sliderItems = params.sliderItems,
      perSlide = params.perSlide;
  var activeIndex = calcCurrentIndex(params);
  var activeItems = [];

  _toConsumableArray(Array(perSlide).keys()).forEach(function (item) {
    return activeItems.push(item + activeIndex);
  });

  vdomArrayConvertor(sliderItems.children).forEach(function (item, itemIndex) {
    var classItemParams = {
      item: item,
      className: "active"
    };

    if (activeItems.includes(itemIndex)) {
      addClassToElement(classItemParams);
    } else {
      removeClassFromElement(classItemParams);
    }
  });
};

exports.setActiveclassToCurrent = setActiveclassToCurrent;

var sliderClientWidth = function sliderClientWidth(slider) {
  return slider.clientWidth;
};

exports.sliderClientWidth = sliderClientWidth;

var truncResponsiveItemCount = function truncResponsiveItemCount(responsive) {
  return Math.trunc(responsiveItemCount(responsive));
};

exports.truncResponsiveItemCount = truncResponsiveItemCount;

var calcFinalItemPosition = function calcFinalItemPosition(params) {
  var autoWidth = params.autoWidth;

  if (autoWidth) {
    return calcFinalWidthAutoWidth(params);
  }

  return calcFinalWithoutAutoWidth(params);
};

exports.calcFinalItemPosition = calcFinalItemPosition;

var calcFinalWidthAutoWidth = function calcFinalWidthAutoWidth(params) {
  var sliderMainWidth = params.sliderMainWidth,
      sliderItems = params.sliderItems;
  return sliderMainWidth - calcAutoWidthAllSliderItems(sliderItems);
};

exports.calcFinalWidthAutoWidth = calcFinalWidthAutoWidth;

var calcFinalWithoutAutoWidth = function calcFinalWithoutAutoWidth(params) {
  var slideSize = params.slideSize,
      sliderMainWidth = params.sliderMainWidth,
      perSlide = params.perSlide,
      slidesLength = params.slidesLength,
      infinite = params.infinite;
  var infiniteSlideLength = infinite ? slidesLength + perSlide + 1 : slidesLength;
  var box = perSlide * slideSize;
  var cost = sliderMainWidth - box;
  var finalResult = (infiniteSlideLength - perSlide) * slideSize - cost;
  return -finalResult;
};

exports.calcFinalWithoutAutoWidth = calcFinalWithoutAutoWidth;

var calcFirstItemPosition = function calcFirstItemPosition(params) {
  var slideSize = params.slideSize,
      perSlide = params.perSlide,
      infinite = params.infinite,
      autoWidth = params.autoWidth;

  if (autoWidth) {
    return 0;
  }

  var infiSwitchSlideSize = infinite ? slideSize : 0;
  return -(infiSwitchSlideSize * (perSlide + 1));
};

exports.calcFirstItemPosition = calcFirstItemPosition;

var calcSliderGroupCount = function calcSliderGroupCount(params) {
  var slidesLength = params.slidesLength,
      responsive = params.responsive,
      autoWidth = params.autoWidth,
      sliderItems = params.sliderItems,
      sliderMainWidth = params.sliderMainWidth;

  if (autoWidth) {
    return Math.ceil(calcAutoWidthAllSliderItems(sliderItems) / sliderMainWidth);
  }

  return Math.ceil(slidesLength / truncResponsiveItemCount(responsive));
};

exports.calcSliderGroupCount = calcSliderGroupCount;

var calcSliderChildWidth = function calcSliderChildWidth(params) {
  var responsiveItemCount = params.responsiveItemCount,
      slider = params.slider;
  return sliderClientWidth(slider) / responsiveItemCount;
};

exports.calcSliderChildWidth = calcSliderChildWidth;

var setSliderItemsChildWidth = function setSliderItemsChildWidth(params) {
  var responsive = params.responsive,
      slider = params.slider,
      sliderItems = params.sliderItems,
      autoWidth = params.autoWidth;
  vdomArrayConvertor(sliderItems.children).forEach(function (child) {
    var newChild = child;
    /* eslint-disable indent */

    newChild.style.width = !autoWidth ? "".concat(calcSliderChildWidth({
      responsiveItemCount: responsiveItemCount(responsive),
      slider: slider
    }), "px") : "auto";
    /* eslint-enable indent */
  });
};

exports.setSliderItemsChildWidth = setSliderItemsChildWidth;

var calcAutoWidthAllSliderItems = function calcAutoWidthAllSliderItems(sliderItems) {
  var allChildWidth = 0;
  vdomArrayConvertor(sliderItems.children).forEach(function (child) {
    allChildWidth += child.offsetWidth;
  });
  return allChildWidth;
};

exports.calcAutoWidthAllSliderItems = calcAutoWidthAllSliderItems;

var setSliderItemsPosition = function setSliderItemsPosition(params) {
  var indexItem = params.indexItem,
      sliderItemWidth = params.sliderItemWidth,
      sliderItems = params.sliderItems,
      rtl = params.rtl;
  var result = directionSetter({
    rtl: rtl,
    input: indexItem * -sliderItemWidth
  });
  sliderItems.style.transform = setTranslate3d(result);
  return indexItem;
};

exports.setSliderItemsPosition = setSliderItemsPosition;

var directionSetter = function directionSetter(params) {
  var rtl = params.rtl,
      input = params.input;

  if (rtl) {
    return -input;
  }

  return input;
};

exports.directionSetter = directionSetter;

var setTranslate3d = function setTranslate3d(getValue) {
  return "translate3d(".concat(getValue, "px,0px,0px)");
};

exports.setTranslate3d = setTranslate3d;

var getTranslate3d = function getTranslate3d(sliderItems) {
  var values = sliderItems.style.transform.match(/translate3d\((.*)px, (.*)px, (.*)px\)/);

  if (!values[1] || !values[1].length) {
    return 0;
  }

  return parseFloat(values[1]);
};

exports.getTranslate3d = getTranslate3d;

var arrGenerator = function arrGenerator(arr, part) {
  var partTrunc = Math.trunc(part);
  var round = Math.ceil(arr.length / partTrunc);
  var counter = 0;
  var newArry = []; // eslint-disable-next-line no-plusplus

  for (counter; round > counter; counter++) {
    newArry[counter] = arr.slice(counter * partTrunc, (counter + 1) * partTrunc);
  }

  return newArry;
};

exports.arrGenerator = arrGenerator;

var sorter = function sorter(a, b) {
  if (a < b) return -1; // any negative number works

  if (a > b) return 1; // any positive number works

  return 0; // equal values MUST yield zero
};

exports.sorter = sorter;

var responsiveItemCount = function responsiveItemCount(getConfig) {
  var resp = Object.keys(getConfig).map(function (el) {
    return parseInt(el, 10);
  });
  var newResp = resp.sort(sorter).filter(function (item) {
    return item <= document.body.clientWidth;
  });
  return getConfig[parseInt(newResp.pop(), 10)].items;
};

exports.responsiveItemCount = responsiveItemCount;

var switchInfiniteResponsiveCount = function switchInfiniteResponsiveCount(itemCont, infinite) {
  return infinite ? itemCont : 0;
};

exports.switchInfiniteResponsiveCount = switchInfiniteResponsiveCount;

var prevNone = function prevNone(slider) {
  var childFind = childFider({
    wrapper: slider,
    className: ".prev"
  });
  childFind.style.display = "none";
  return childFind;
};

exports.prevNone = prevNone;

var prevBlock = function prevBlock(slider) {
  var childFind = childFider({
    wrapper: slider,
    className: ".prev"
  });
  childFind.style.display = "flex";
  return childFind;
};

exports.prevBlock = prevBlock;

var nextNone = function nextNone(slider) {
  var childFind = childFider({
    wrapper: slider,
    className: ".next"
  });
  childFind.style.display = "none";
  return childFind;
};

exports.nextNone = nextNone;

var nextBlock = function nextBlock(slider) {
  var childFind = childFider({
    wrapper: slider,
    className: ".next"
  });
  childFind.style.display = "flex";
  return childFind;
};

exports.nextBlock = nextBlock;

var transitionendWatcher = function transitionendWatcher(params) {
  var responsive = params.responsive,
      infinite = params.infinite,
      slider = params.slider,
      rtl = params.rtl,
      index = params.index,
      sliderItems = params.sliderItems,
      slideSize = params.slideSize,
      sliderMainWidth = params.sliderMainWidth,
      setAllowShift = params.setAllowShift,
      dots = params.dots,
      slidesLength = params.slidesLength,
      sliderItemWidth = params.sliderItemWidth,
      nav = params.nav,
      setIndex = params.setIndex,
      autoWidth = params.autoWidth,
      freeScroll = params.freeScroll,
      callBack = params.callBack,
      beforeChange = params.beforeChange;
  beforeChange(index);
  var perSlide = truncResponsiveItemCount(responsive);
  var calcIndex = calcCurrentIndex({
    infinite: infinite,
    perSlide: truncResponsiveItemCount(responsive),
    slidesLength: slidesLength,
    slideSize: slideSize,
    sliderMainWidth: sliderMainWidth,
    slider: slider,
    sliderItems: sliderItems,
    freeScroll: freeScroll,
    autoWidth: autoWidth
  });
  setIndex(calcIndex);

  if (infinite && !autoWidth && calcIndex > perSlide + slidesLength && Math.abs(getTranslate3d(sliderItems)) >= (perSlide + 1 + slidesLength) * sliderItemWidth) {
    return setIndex(setSliderItemsPosition({
      indexItem: calcIndex - slidesLength,
      sliderItemWidth: sliderItemWidth,
      sliderItems: sliderItems,
      rtl: rtl
    }));
  } // if page-index === 1 && clone === true


  if (infinite && !autoWidth && calcIndex === perSlide + 1 + slidesLength) {
    return setIndex(setSliderItemsPosition({
      indexItem: perSlide + 1,
      sliderItemWidth: sliderItemWidth,
      sliderItems: sliderItems,
      rtl: rtl
    }));
  } // shift to end from start item


  if (infinite && !autoWidth && (Math.abs(getTranslate3d(sliderItems)) <= 1 || Math.abs(getTranslate3d(sliderItems)) === sliderItemWidth)) {
    return setIndex(setSliderItemsPosition({
      indexItem: slidesLength + calcIndex,
      sliderItemWidth: sliderItemWidth,
      sliderItems: sliderItems,
      rtl: rtl
    }));
  }

  if (!infinite && nav) {
    var finalPos = {
      slideSize: slideSize,
      sliderMainWidth: sliderMainWidth,
      perSlide: perSlide,
      slidesLength: slidesLength,
      infinite: infinite,
      autoWidth: autoWidth,
      sliderItems: sliderItems
    };
    var finalConst = Math.abs(Math.trunc(calcFinalItemPosition(finalPos)));
    var firstConst = Math.abs(Math.trunc(calcFirstItemPosition(finalPos)));
    var translate3dConst = Math.abs(Math.trunc(getTranslate3d(sliderItems)));
    var showNext = true;
    var showPrev = true;

    if (finalConst <= translate3dConst + 50) {
      showNext = false;
    }

    if (!autoWidth) {
      if (index === 0) {
        showPrev = false;
      }
    }

    if (firstConst >= translate3dConst - 50) {
      showPrev = false;
    }

    if (showNext) {
      nextBlock(slider);
    } else {
      nextNone(slider);
    }

    if (showPrev) {
      prevBlock(slider);
    } else {
      prevNone(slider);
    }
  } // run for set active class


  removeClassFromElement({
    item: sliderItems,
    className: "shifting"
  });

  if (!autoWidth) {
    setActiveclassToCurrent({
      index: index,
      sliderItems: sliderItems,
      perSlide: perSlide,
      infinite: infinite,
      slideSize: slideSize,
      sliderMainWidth: sliderMainWidth,
      autoWidth: autoWidth,
      freeScroll: freeScroll
    });
  }

  setAllowShift(true);

  if (dots) {
    dotActive(params);
  }

  callBack(calcIndex);
  return calcIndex;
};

exports.transitionendWatcher = transitionendWatcher;

var dotActive = function dotActive(params) {
  var sliderItems = params.sliderItems,
      slider = params.slider,
      autoWidth = params.autoWidth,
      sliderMainWidth = params.sliderMainWidth;
  var dotsSelector = childFider({
    wrapper: slider,
    className: ".dots"
  });
  var dotConvertor = vdomArrayConvertor(dotsSelector.children);
  var currentDot = null;

  if (autoWidth) {
    var dotIndex = Math.ceil(Math.abs(getTranslate3d(sliderItems)) / sliderMainWidth);
    currentDot = dotConvertor[dotIndex];
  }

  if (activeChecker(sliderItems) >= 0 && !autoWidth) {
    currentDot = dotConvertor[activeChecker(sliderItems)];
  }

  if ((autoWidth || activeChecker(sliderItems) >= 0) && currentDot) {
    dotConvertor.forEach(function (child) {
      var classItemParams = {
        item: child,
        className: "active"
      };
      removeClassFromElement(classItemParams);
    });
    var classItemParams = {
      item: currentDot,
      className: "active"
    };
    addClassToElement(classItemParams);
  }
};

exports.dotActive = dotActive;

var elementCreator = function elementCreator(params) {
  var tag = params.tag,
      wrapper = params.wrapper,
      className = params.className;
  removeAllChildren({
    wrapper: wrapper,
    className: className
  });
  var node = document.createElement(tag);
  node.className = className;
  wrapper.appendChild(node);
  return node;
};

exports.elementCreator = elementCreator;

var childFider = function childFider(params) {
  var wrapper = params.wrapper,
      className = params.className;
  return wrapper.querySelector(className);
};

exports.childFider = childFider;

var removeAllChildren = function removeAllChildren(params) {
  var wrapper = params.wrapper,
      className = params.className;
  var newClassName = ".".concat(className.split(" ").pop());
  var findElements = wrapper.querySelectorAll(newClassName);

  if (findElements.length) {
    findElements.forEach(function (child) {
      child.remove();
    });
  }

  return findElements.length;
};

exports.removeAllChildren = removeAllChildren;

var activeChecker = function activeChecker(sliderItems) {
  var activeChild = [];
  vdomArrayConvertor(sliderItems.children).forEach(function (child) {
    if (child.classList.contains("active")) {
      activeChild.push(child.dataset.page);
    }
  });
  return parseInt(activeChild.sort().pop() - 1, 10);
};

exports.activeChecker = activeChecker;

var vdomArrayConvertor = function vdomArrayConvertor(items) {
  var isArrayCheck = Array.isArray(items);
  if (isArrayCheck) return items;
  return Object.values(items);
};

exports.vdomArrayConvertor = vdomArrayConvertor;

var infiniteChecker = function infiniteChecker(params) {
  var infinite = params.infinite,
      sliderLength = params.sliderLength,
      perSlide = params.perSlide;

  if (infinite && sliderLength === perSlide) {
    return false;
  }

  return infinite;
};

exports.infiniteChecker = infiniteChecker;

var dragChecker = function dragChecker(params) {
  var drag = params.drag,
      sliderLength = params.sliderLength,
      perSlide = params.perSlide;

  if (drag === false || sliderLength <= perSlide) {
    return false;
  }

  return drag;
};

exports.dragChecker = dragChecker;

/***/ }),

/***/ "./node_modules/es6-simple-carousel/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-simple-carousel/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist */ "./node_modules/es6-simple-carousel/dist/index.js");


/***/ }),

/***/ "./node_modules/es6-simple-carousel/dist/styles/slider.css":
/*!*****************************************************************!*\
  !*** ./node_modules/es6-simple-carousel/dist/styles/slider.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_simple_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-simple-carousel */ "./node_modules/es6-simple-carousel/index.js");
/* harmony import */ var es6_simple_carousel_dist_styles_slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-simple-carousel/dist/styles/slider.css */ "./node_modules/es6-simple-carousel/dist/styles/slider.css");
const LOCATION_KEY = 'three_ships_location';


// optional
// import 'es6-simple-carousel/dist/styles/custom.css';
//...

function initiateSlider() {
  let slider = document.querySelector('#slider');
  console.log('here is slider', slider);
  if (!slider) {
    return;
  }
  const slideConfig = {
    slider: slider,
    threshold: 50,
    // infinite: true,
    nav: true,
    dots: true,
    autoPlay: false,
    responsive: {
      0: {
        items: 1.5
      },
      560: {
        items: 2
      },
      760: {
        items: 3
      }
    }
  };
  let newSlide = new es6_simple_carousel__WEBPACK_IMPORTED_MODULE_0__.Slider(slideConfig);
  console.log('here is newSlide', newSlide);
}
async function getLocationData() {
  let three_ships_location = getWithExpiry(LOCATION_KEY);
  if (three_ships_location) {
    return three_ships_location;
  }

  //    let ipAddress = await getIpAddress();
  try {
    let ipapiResponse = await fetch('https://ipapi.co/json/');
    let ipapiData = await ipapiResponse.json();
    setWithExpiry(LOCATION_KEY, ipapiData, 1000 * 60 * 60);
    return ipapiData;
  } catch (error) {
    console.error('Error getting location:', error);
  }
}
function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
function setWithExpiry(key, value, ttl) {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };
  localStorage.setItem(key, JSON.stringify(item));
}
async function startIpLocationGetter() {
  let regionElement = document.querySelector('#three-ships-user-location');
  if (!regionElement) {
    return;
  }
  let locationData = await getLocationData();
  console.log("here is locationData", locationData);
  if (locationData.region_code) {
    regionElement.textContent = locationData.city + " " + locationData.region_code;
  } else {}
}
window.addEventListener('load', function () {
  initiateSlider();
  startIpLocationGetter();
  console.log('window loaded');
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map