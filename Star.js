
class Star {

    constructor() {
        this.x = random(width/2, -width/2)
        this.y = random(height/2, -height/2)
        this.z = random(width, 0)
        this.pz = this.z
        this.px = this.x
        this.py = this.y
    }

    update(speed) {
        this.z -= speed
        if (this.z < 1) {
            this.x = random(width/2, -width/2)
            this.y = random(height/2, -height/2)
            this.z = width
            this.pz = this.z
            this.px = this.x
            this.py = this.y
        }
    }


    show() {
        fill(255)
        no_stroke()

        sx = map(self.x / self.z, (0, 1), (0, width))
        sy = map(self.y / self.z, (0, 1), (0, height))
        sr = map(self.z, (0, width), (self.r, 0))

        circle((sx, sy), sr)


        self.pz = this.z

        stroke(255)
        if (sx != this.px) {
            line((sx, sy), (self.px, self.py))
            this.px = sx
            this.py = sy
        }
    }
}
star.r = 16