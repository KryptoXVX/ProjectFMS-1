let x = 128;
let y = 128;

let a = 52;
let b = 52;
let count = 0;
let count2 = 0;

function setup() {
    fill(255, 255, 255);
    createCanvas(400, 400);

}

function draw() {
    background(255, 255, 255)

    stroke(0, 0, 255)
    strokeWeight(25)
    fill(64, 64, 255)
    ellipse(x, y, 100, 100)
    x++
    y++;
    count++;

    if (y > 480) {
        x = 128;
        y = 128;
        count = 0;
    }

    y *= (0.01 * count);

    

    stroke(255, 64, 49)
    strokeWeight(5)
    fill(25, 69, 25)
    rect(25, 25, 50, 50)

    stroke(23, 64, 43)
    strokeWeight(10)
    fill(65, 0, 0)
    rect(a, b, 70, 70, 15)
    a*=1.05;
    b++
    count2++;
    if (a > 480) {
        a = 25;
        b = 52;
    }
}