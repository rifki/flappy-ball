function Ball() {
    this.y = height/2;
    this.x = 50;

    this.gravity = 0.5;
    this.lift = -18;
    this.velocity = 0;

    this.show = function() {
        fill(10, 180, 0);
        ellipse(this.x, this.y, 30, 30);
    }

    this.up = function() {
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity += 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.countPipe = function(i, x) {
        // $('#score span').text('Score '+i-x);
    }
}
