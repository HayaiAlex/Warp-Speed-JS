
class Star {
    constructor() {
        this.r = 16
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
        noStroke()

        let sx = map(this.x / this.z, 0, 1, 0, width)
        let sy = map(this.y / this.z, 0, 1, 0, height)
        let sr = map(this.z, 0, width, this.r, 0)

        circle(sx, sy, sr)


        this.pz = this.z

        stroke(255)
        if (sx != this.px) {
            line(sx, sy, this.px, this.py)
            this.px = sx
            this.py = sy
        }
    }
}