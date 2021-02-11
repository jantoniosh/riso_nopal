let riso_filters = [];
let img;
let ditherType = 'atkinson';
let dist = .47;

let inicio, fin;

function preload() {
    img = loadImage('nopal.png');
    img_L = loadImage('nopal_L.png');
    img_R = loadImage('nopal_R.png');
}

function setup() {
    pixelDensity(1);
    createCanvas(1080, 566);

    riso_filters = new Array(9);

    riso_filters[1] = new Riso('red');
    riso_filters[2] = new Riso('bubblegum');
    riso_filters[3] = new Riso('yellow');
    riso_filters[4] = new Riso('burgundy');
    riso_filters[5] = new Riso('indigo');
    riso_filters[6] = new Riso('spruce');
    riso_filters[7] = new Riso('maroon');
    riso_filters[8] = new Riso('mint');
    riso_filters[0] = new Riso('coral');

    inicio = 0;
    fin = inicio + 4;

    noLoop();
}

function draw() {
    background(255);

    // image(img, 33, 33, 500, 500);

    clearRiso();

    let dithered = ditherImage(img, ditherType, 0);
    let dithered_L = ditherImage(img_L, ditherType, 0);
    let dithered_R = ditherImage(img_R, ditherType, 0);

    riso_filters[inicio].image(dithered_R, 40, 33, 250, 500);

    for (let i = 0; i < 3; i++) {
        riso_filters[i + inicio + 1].image(dithered, 40 + (i * 250), 33, 500, 500);
    }

    riso_filters[fin].image(dithered_L, 790, 33, 250, 500);
    // red.image(dithered, 33, 33, 500, 500);

    // bubblegum.image(dithered, 33 + 64.25, 33, 500, 500);

    // red.image(dithered, width * .75, height / 4, width * dist, height * dist);

    // melon.image(dithered, width * 0.75, height * 0.75, width * dist, height * dist);

    // pine.image(dithered, width / 4, height * 0.75, width * dist, height * dist);

    drawRiso();
}

function mouseClicked() {
    // exportRiso();
}