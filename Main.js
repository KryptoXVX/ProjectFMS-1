function setup() {
    createCanvas(400, 400);
    background(255, 255, 255);
    puzzleButton = createButton('Puzzle Excersise');
    puzzleButton.position(0, 0);
    puzzleButton.mousePressed(changeBG);

    aimTrainerButton = createButton("Aim Trainer Excersise");
    aimTrainerButton.position(0, 25);
    aimTrainerButton.mousePressed(changeBG);

    pianoButton = createButton("Piano Excersise");
    pianoButton.position(0, 50);
    pianoButton.mousePressed(changeBG);
}

function changeBG() {
    let val = random(255);
    background(val);
}