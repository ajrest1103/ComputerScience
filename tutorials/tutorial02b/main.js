let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;


// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    draw5CirclesWhile();
    draw5CirclesFor();
    drawNCircles(20);
    drawNCirclesFlexible(20, 50, 600, 200)
    drawNShapesFlexible(20, 50, 500, 200, "banana")
    drawNShapesDirectionFlexible(20, 50, 400, 200, "circle", "row");
    draw5Circles();
    draw5RedSquares();
    drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
    noFill();
    // fill('red');
    circle(100, 200, 50); // centerX, centerY, radius
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

function draw5CirclesWhile() {
    console.log("Draw 5 Circles!");
    let i = 0;
    let y= 200;
    while (i < 5){
    console.log(i);
    circle(900, y, 50);
    i ++;
    y += 50;
    }
}
function draw5CirclesFor() {
    for (let i = 0, y = 200; i < 5; i++, y+=50) {
        console.log(y);
        circle(800, y, 50);
    }
}

function drawNCircles(n){
    for ( let i = 0, y = 200; i < n; i++, y+=50){
        circle(700, y, 50);
    }
}

function drawNCirclesFlexible(n, size, x, y){
    for ( let i = 0 ;i < n; i++, y+= 50 ){
        circle(x,y,size);
    }
}

function drawNShapesFlexible(n, size, x, y, shape){
    for ( let i = 0; i < n; i++, y+=50 ){
        if(shape === "circle"){
            circle(x,y,size);
        }
        else{
            square(x,y,size);
        }
    }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction){
    for ( let i =0; i < n; i++, y+= 50){
        if(shape === "circle"){
            circle(x,y,size);
        }
        else{
            square(x,y,size);
        }
        if(direction === "row"){
            x += 50
        }
        else{
            console.log("Complete")
        }
            
        }
    }
