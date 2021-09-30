img = "";

function  preload()
{
    img = loadImage('vn.jpg');
}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 600, 400); 
}

function back()
{
    window.location = "home.html";
}