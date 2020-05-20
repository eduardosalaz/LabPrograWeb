var canvas;
var ctx;
var dx = 1; //Velocidad círculo
var dy = 2;
var bar = new Bar(400, 500);
var círculo = new Circle(400, 30, 10);
var dxBar = 8; //Velocidad de la barra
var timer;
var barImg;
function Bar(x, y) {
    this.x = x;
    this.y = y;
}
function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
function dibujarCírculo(c) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
    ctx.fill();
}
function doKeyDown(e) {
    //La tecla de Left Arrow
    if (e.keyCode == 37) {
        //Validar lado izquierdo
        if (bar.x - dxBar > 0){
            bar.x -= dxBar;
        }  
    }
    //La tecla de Right Arrow
    else if (e.keyCode == 39) {
        //Validar lado derecho
        if (bar.x + dxBar < canvas.width/2 + 45){
            bar.x += dxBar;
        } 
    }
}
function main() {
    window.addEventListener("keydown", doKeyDown, false);
    barImg = document.getElementById("bar");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    timer = setInterval(dibujar, 10);
    return timer;
}
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FAF7F8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#003300";
    dibujarCírculo(círculo);
    if (círculo.x + dx > canvas.width || círculo.x + dx < 0)
        dx = -dx;
    if (círculo.y + dy > bar.y && círculo.x > bar.x && círculo.x < bar.x + barImg.width)
        dy = -dy;
    if (círculo.y + dy > canvas.height || círculo.y + dy < 0)
        dy = -dy;
    círculo.x += dx;
    círculo.y += dy;
    ctx.drawImage(barImg, bar.x, bar.y);
    if (círculo.y > bar.y) {
        clearTimeout(timer);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        alert("Perdiste");
    }
}