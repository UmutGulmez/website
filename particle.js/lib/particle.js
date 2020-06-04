'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var particleJS = function () {
  function particleJS(config) {
    _classCallCheck(this, particleJS);

    this.ele = document.getElementById(config.element); // canvas id
    this.src = config.imagePath; // image path
    this.cropStartPointX = config.cropStartPointX; // crop locate point X
    this.cropStartPointY = config.cropStartPointY; // crop locate point Y
    this.cropX = config.cropX; // crop width
    this.cropY = config.cropY; // crop height
    this.startingPointX = config.startingPointX; // coordinate X for a starting point
    this.startingPointY = config.startingPointY; // coordinate Y for a starting point
    this.destinationX = config.destinationX; // coordinate X for destination locate point
    this.destinationY = config.destinationY; // coordinate Y for destination locate point
    this.duration = config.duration; // 60ms unit time
    this.pointOffsetEnable = config.pointOffsetEnable; // whether enable point offset
    this.pointOffsetLevel = config.pointOffsetLevel; // (Math.random() - 0.5) *
    this.timeOffsetLevel = config.timeOffsetLevel; // (Math.random() - 0.5) *
    this.spacingEnable = config.spacingEnable; // whether enable spacing
    this.spacingLevel = config.spacingLevel; // 1,2,3,4,5,6,7,8,9
    return this;
  }

  _createClass(particleJS, [{
    key: 'render',
    value: function render() {
      var ctx = null;
      if (this.ele.getContext) {
        ctx = this.ele.getContext('2d');
      }
      var image = new Image();
      var that = this;
      image.onload = function () {
        var imgWidth = image.width,
            imgHeight = image.height;
        that.ele.height = imgHeight;
        that.ele.width = imgWidth;
        ctx.drawImage(image, that.cropStartPointX, that.cropStartPointY, that.cropX, that.cropY, 0, 0, that.cropX, that.cropY);
        var cur_particle = null,
            cur_time = 0,
            particles = [];
        var data = ctx.getImageData(0, 0, that.cropX, that.cropY);
        saveParticles();

        function saveParticles() {
          if (that.spacingEnable) {
            for (var i = 1; i <= that.cropY; i++) {
              for (var j = 1; j <= that.cropX; j++) {
                if (i % that.spacingLevel == 0 && j % that.spacingLevel == 0) {
                  var index = ((i - 1) * that.cropX + j - 1) * 4;
                  var fillStyle = 'rgba(' + data.data[index] + ', ' + data.data[index + 1] + ', ' + data.data[index + 2] + ', ' + data.data[index + 3] + ')';
                  var offset = void 0;
                  if (that.pointOffsetEnable) {
                    offset = (Math.random() - 0.5) * that.pointOffsetLevel;
                  } else {
                    offset = 0;
                  }
                  var timeOffset = (Math.random() - 0.5) * that.timeOffsetLevel;
                  var particle = {
                    x: that.destinationX + j + offset,
                    y: that.destinationY + i + offset,
                    style: fillStyle,
                    delay: 0 + timeOffset
                  };
                  particles.push(particle);
                } else {
                  var pos = ((i - 1) * that.cropX + j - 1) * 4;
                  data.data[pos] = 0;
                  data.data[pos + 1] = 0;
                  data.data[pos + 2] = 0;
                  data.data[pos + 3] = 0;
                }
              }
            }
          } else {
            for (var _i = 1; _i <= that.cropY; _i++) {
              for (var _j = 1; _j <= that.cropX; _j++) {
                var _index = ((_i - 1) * that.cropX + _j - 1) * 4;
                var _fillStyle = 'rgba(' + data.data[_index] + ', ' + data.data[_index + 1] + ', ' + data.data[_index + 2] + ', ' + data.data[_index + 3] + ')';
                var _offset = void 0;
                if (that.pointOffsetEnable) {
                  _offset = (Math.random() - 0.5) * that.pointOffsetLevel;
                } else {
                  _offset = 0;
                }
                var _timeOffset = (Math.random() - 0.5) * that.timeOffsetLevel;
                var _particle = {
                  x: that.destinationX + _j + _offset,
                  y: that.destinationY + _i + _offset,
                  style: _fillStyle,
                  delay: 0 + _timeOffset
                };
                particles.push(_particle);
              }
            }
          }
        }

        function easeInOutExpo(t, b, c, d) {
          if (t == 0) return b;
          if (t == d) return b + c;
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }

        function animate() {
          ctx.clearRect(0, 0, that.ele.width, that.ele.height);
          for (var i = 0, len = particles.length; i < len; i++) {
            if (cur_time <= that.duration) {
              cur_particle = particles[i];
              if (cur_particle.delay > cur_time) {
                continue;
              } else {
                ctx.fillStyle = cur_particle.style;
                var cur_x = easeInOutExpo(cur_time, that.startingPointX, cur_particle.x - that.startingPointX, that.duration + cur_particle.delay);
                var cur_y = easeInOutExpo(cur_time, that.startingPointY, cur_particle.y - that.startingPointY, that.duration + cur_particle.delay);
                ctx.fillRect(cur_x, cur_y, 1, 1);
              }
            }
          }
          if (cur_time > that.duration) {
            ctx.drawImage(image, that.cropStartPointX, that.cropStartPointY, that.cropX, that.cropY, 0, 0, that.cropX, that.cropY);
            return;
          }
          cur_time++;
          requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
      };
      image.crossOrigin = 'anonymous';
      image.src = this.src;
    }
  }]);

  return particleJS;
}();

exports.default = particleJS;
