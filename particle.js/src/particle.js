class particleJS {
  constructor(config) {
    this.ele = document.getElementById(config.element) // canvas id
    this.src = config.imagePath // image path
    this.cropStartPointX = config.cropStartPointX // crop locate point X
    this.cropStartPointY = config.cropStartPointY // crop locate point Y
    this.cropX = config.cropX // crop width
    this.cropY = config.cropY // crop height
    this.startingPointX = config.startingPointX // coordinate X for a starting point
    this.startingPointY = config.startingPointY // coordinate Y for a starting point
    this.destinationX = config.destinationX // coordinate X for destination locate point
    this.destinationY = config.destinationY // coordinate Y for destination locate point
    this.duration = config.duration // 60ms unit time
    this.pointOffsetEnable = config.pointOffsetEnable // whether enable point offset
    this.pointOffsetLevel = config.pointOffsetLevel // (Math.random() - 0.5) *
    this.timeOffsetLevel = config.timeOffsetLevel // (Math.random() - 0.5) *
    this.spacingEnable = config.spacingEnable // whether enable spacing
    this.spacingLevel = config.spacingLevel // 1,2,3,4,5,6,7,8,9
    return this
  }

  render() {
    let ctx = null
    if (this.ele.getContext) {
      ctx = this.ele.getContext('2d')
    }
    let image = new Image()
    let that = this
    image.onload = function() {
      let imgWidth = image.width,
        imgHeight = image.height
      that.ele.height = imgHeight
      that.ele.width = imgWidth
      ctx.drawImage(image, that.cropStartPointX, that.cropStartPointY, that.cropX, that.cropY, 0, 0, that.cropX, that.cropY)
      let cur_particle = null,
        cur_time = 0,
        particles = []
      let data = ctx.getImageData(0, 0, that.cropX, that.cropY)
      saveParticles()

      function saveParticles() {
        if (that.spacingEnable) {
          for (let i = 1; i <= that.cropY; i++) {
            for (let j = 1; j <= that.cropX; j++) {
              if ((i % that.spacingLevel == 0) && (j % that.spacingLevel == 0)) {
                let index = ((i - 1) * that.cropX + j - 1) * 4
                let fillStyle = 'rgba(' + data.data[index] + ', ' + data.data[index + 1] + ', ' + data.data[index + 2] + ', ' + data.data[index + 3] + ')'
                let offset
                if (that.pointOffsetEnable) {
                  offset = (Math.random() - 0.5) * that.pointOffsetLevel
                } else {
                  offset = 0
                }
                let timeOffset = (Math.random() - 0.5) * that.timeOffsetLevel
                let particle = {
                  x: that.destinationX + j + offset,
                  y: that.destinationY + i + offset,
                  style: fillStyle,
                  delay: 0 + timeOffset
                }
                particles.push(particle)
              } else {
                let pos = ((i - 1) * that.cropX + j - 1) * 4
                data.data[pos] = 0
                data.data[pos + 1] = 0
                data.data[pos + 2] = 0
                data.data[pos + 3] = 0
              }
            }
          }
        } else {
          for (let i = 1; i <= that.cropY; i++) {
            for (let j = 1; j <= that.cropX; j++) {
              let index = ((i - 1) * that.cropX + j - 1) * 4
              let fillStyle = 'rgba(' + data.data[index] + ', ' + data.data[index + 1] + ', ' + data.data[index + 2] + ', ' + data.data[index + 3] + ')'
              let offset
              if (that.pointOffsetEnable) {
                offset = (Math.random() - 0.5) * that.pointOffsetLevel
              } else {
                offset = 0
              }
              let timeOffset = (Math.random() - 0.5) * that.timeOffsetLevel
              let particle = {
                x: that.destinationX + j + offset,
                y: that.destinationY + i + offset,
                style: fillStyle,
                delay: 0 + timeOffset
              }
              particles.push(particle)
            }
          }
        }
      }

      function easeInOutExpo(t, b, c, d) {
        if (t == 0) return b
        if (t == d) return b + c
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
      }

      function animate() {
        ctx.clearRect(0, 0, that.ele.width, that.ele.height)
        for (let i = 0, len = particles.length; i < len; i++) {
          if (cur_time <= that.duration) {
            cur_particle = particles[i]
            if (cur_particle.delay > cur_time) {
              continue
            } else {
              ctx.fillStyle = cur_particle.style
              let cur_x = easeInOutExpo(cur_time, that.startingPointX, cur_particle.x - that.startingPointX, that.duration + cur_particle.delay)
              let cur_y = easeInOutExpo(cur_time, that.startingPointY, cur_particle.y - that.startingPointY, that.duration + cur_particle.delay)
              ctx.fillRect(cur_x, cur_y, 1, 1)
            }
          }
        }
        if (cur_time > that.duration) {
          ctx.drawImage(image, that.cropStartPointX, that.cropStartPointY, that.cropX, that.cropY, 0, 0, that.cropX, that.cropY)
          return;
        }
        cur_time++
        requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
    image.crossOrigin = 'anonymous'
    image.src = this.src
  }
}

export default particleJS
