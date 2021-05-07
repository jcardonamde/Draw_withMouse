// Get the area from HTML File (Definiendo el area desde el archivo index.hmtl)
var canvas = document.getElementById("little_drawing");
var drawArea = canvas.getContext("2d");

// Function for resize the Canvas (Nos ayuda a redimensionar el Canvas a nuestro gusto
// por medio de los valores ingresados por los Textbox)
var size_canvas = document.getElementById("button_size");
size_canvas.addEventListener("click", sizeInCanvas);

function sizeInCanvas() {
    var w_canvas = document.getElementById("width_canvas");
    var h_canvas = document.getElementById("height_canvas");   
    canvas.width = parseInt(w_canvas.value);
    canvas.height = parseInt(h_canvas.value);
    
    var wh = canvas.width;
    var ht = canvas.height;
    
    drawLine("white", 1, 1, 1, ht, drawArea);
    drawLine("white", 1, ht, wh, ht, drawArea);
    drawLine("white", wh, 1, 1, 1, drawArea);
    drawLine("white", wh, 1, wh, ht, drawArea); 
    console.log();
}

// Variables (Variables base)
var x;
var y;

// Drawing boarding (Dibujando el Borde del area del Canvas)
drawLine("Yellow", 299, 0, 0, 0, drawArea, 2);
drawLine("Yellow", 0, 299, 0, 0, drawArea, 2);
drawLine("Yellow", 300, 300, 300, 0, drawArea, 2);
drawLine("Yellow", 0, 300, 300, 300, drawArea, 2);

//Listener of the Events (Invocador de los Eventos que ejecutaremos con el Mouse)
document.addEventListener("mousedown",mouseHold);
document.addEventListener("mouseup",mouseLeft);
document.addEventListener("mousemove",mouseMove);

// Variables for Mouse behavior (Variables de la linea a dibujar)
var mouseCondition = "no_press";
var lineColor = "yellow";
var lineWidth = "3";

// Functions for Events of the Mouse (Estado Presionando el Mouse)
function mouseHold(mouseEvent) {
    mouseCondition = "press";
    x = mouseEvent.offsetX;
    y = mouseEvent.offsetY;
    console.log(x, y);
}

// Functions for Events of the Mouse (Estado Suelto o Sin presionar el Mouse)
function mouseLeft(mouseEvent) {
    mouseCondition = "no_press";
    x = mouseEvent.offsetX;
    y = mouseEvent.offsetY;
    console.log(x, y);
}

// Functions for Events of the Mouse (Movimiento del Mouse)
function mouseMove(mouseEvent) {
    if (mouseCondition == "press") {
        drawLine(lineColor, x, y, mouseEvent.offsetX, mouseEvent.offsetY, drawArea, lineWidth);
    }
    x = mouseEvent.offsetX;
    y = mouseEvent.offsetY;
}

// Function for draw line (Dibujar Linea)
function drawLine(color, x_in, y_in, x_end, y_end, dl, widht) {
	dl.beginPath();
		dl.strokeStyle = color;
		dl.lineWidth = widht;
		dl.moveTo(x_in, y_in);
		dl.lineTo(x_end, y_end);
		dl.stroke();
	dl.closePath();
}

// Variables for Elements from HTML File (Variables definidas para interacción de Botones
// del archivo index.hmtl que nos permiten reducir o aumentar el grueso de la linea que se dibuja)
var colorInput = document.getElementById("color_txt");
var lineWidthLight = document.getElementById("button_light");
var lineWidthMedium = document.getElementById("button_medium");
var lineWidthStrong = document.getElementById("button_strong");

// Events for Buttons (Eventos de ejecución al dar clic en los Botones)
lineWidthLight.addEventListener("click", changeWidthLight);
lineWidthMedium.addEventListener("click", changeWidthMedium);
lineWidthStrong.addEventListener("click", changeWidthStrong);

// Function for button in HTML File (Linea en Color Suave)
function changeWidthLight() {
	lineColor = colorInput.value;
	lineWidth = 1;
}

// Function for button in HTML File (Linea en Color Medio)
function changeWidthMedium() {
	lineColor = colorInput.value;
	lineWidth = 5;
}

// Function for button in HTML File (Linea más gruesa o Color Fuerte)
function changeWidthStrong() {
	lineColor = colorInput.value;
	lineWidth = 10;
}

// Function for Cleaning (Limpieza del Canvas)
// Agradezco que me dejen un mensaje si se les ocurre una manera más optima para limpiar
var buttonClear = document.getElementById("button_clean");
buttonClear.addEventListener("click", clearCanvas);

function clearCanvas() {
	drawArea.clearRect(0, 0, 0, 0);
    canvas.width=canvas.width;
    canvas.height=canvas.height;
    drawLine("Yellow", 299, 0, 0, 0, drawArea, 2);
    drawLine("Yellow", 0, 299, 0, 0, drawArea, 2);
    drawLine("Yellow", 300, 300, 300, 0, drawArea, 2);
    drawLine("Yellow", 0, 300, 300, 300, drawArea, 2);
}
