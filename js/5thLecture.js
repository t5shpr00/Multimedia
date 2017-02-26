var LINE = 1;
var RECTANGLE = 2;
var mouseIsDown = 0;
var currentDrawingMode = LINE;


var canvas = document.getElementById("drawingCanvas");
var drawingContext = canvas.getContext("2d");



var helpcanvas = document.getElementById("helpCanvas");
var helpContext = helpcanvas.getContext("2d");

var startPoint;

function setDrawingMode(newDrawingMode)
{
	currentDrawingMode = newDrawingMode;
}
function getMousePos(canvas, evt)
{
	var rect = canvas.getBoundingClientRect();


	return{
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	}
}


function veikkosMouseDown(event)

{
	mouseIsDown = 1;
	startPoint = getMousePos (canvas, event);
}

function clearCanvas()
{
	drawingContext.clearRect(0,0, canvas.width, canvas.height);
}


function veikkosMouseUp(event)
{
	mouseIsDown = 0;
	var realMousepos = getMousePos(canvas, event);


{
	drawingContext.beginPath();
	drawingContext.moveTo(startPoint.x,startPoint.y);
	drawingContext.lineTo(realMousepos.x, realMousepos.y);
	drawingContext.stroke();
}}




function mouseMove(e){
	
	helpContext.clearRect(0,0, helpcanvas.width, helpcanvas.height);
	if(mouseIsDown){
	var realMousepos = getMousePos(helpcanvas, e);
helpContext.beginPath();
	helpContext.moveTo(startPoint.x,startPoint.y);
	helpContext.lineTo(realMousepos.x, realMousepos.y);
	helpContext.stroke();

	}}

	
canvas.addEventListener("mousedown", veikkosMouseDown);
canvas.addEventListener("mouseup", veikkosMouseUp);

helpcanvas.addEventListener("mousemove", mouseMove);

canvas.addEventListener("mousemove", mouseMove);

