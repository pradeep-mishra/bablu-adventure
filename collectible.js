export default class Collectible {
  constructor(x = 100, y = 100, img, width, height, obj) {
    this.x = x
    this.y = y
    this.image = img
    this.width = width ? width : this.image ? this.image.width : 0
    this.height = height ? height : this.image ? this.image.height : 0
    this.obj = obj
    this.isCollected = false
    this.value = 100
  }

  draw(ctx) {
    if (!this.isCollected) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      if (this.obj && window.paintBlockId) {
        ctx.font = '15pt Arial'
        ctx.fillStyle = 'yellow'
        ctx.fillText(String(this.obj.id), this.x, this.y)
      }
    }
  }
}
