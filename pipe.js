
function Pipe() {
    this.top = random(height/2);
    this.buttom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.hightlight = false;

    this.hits = function(ball) {
        if (ball.y < this.top || ball.y > height - this.buttom) {
            if (ball.x > this.x && ball.x < this.x + this.w) {
                this.hightlight = true;
                return true;
            }
        }

        this.hightlight = false;
        return false
    }

    this.show = function() {
        fill(255);
        if (this.hightlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.buttom, this.w, this.buttom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        }
        return false;
    }
}
