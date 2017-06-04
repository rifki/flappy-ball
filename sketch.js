var ball;
var pipes = [];
var play = false;

var textPlay = "Play Flappy Ball";
var font = null;
var showFont = true;

function setup() {
    var canvas = createCanvas(400, 500);
    canvas.parent('canvas');
    ball = new Ball();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    if (showFont) {
        textFont('Arial Bold', 30);
        text(textPlay, 100, 200);
        fill(10, 120, 100);
    }

    if (play == false) {
        return false;
    }

    var touchPipe = 0;
    for(var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        // hits pipes
        if (pipes[i].hits(ball)) {
            console.log('HITS');
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    ball.update();
    ball.show();

    if (frameCount % 40 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == ' ') {
        ball.up();
    }
}

function mousePressed() {
    play = true;
    showFont = false;
}
