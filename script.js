var mouseEvent = "empty";
var last_position_X, last_position_Y;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 1;

var width  = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if(width < 992){
    canvas.width = new_width;
    canvas.height = new_height;
    document.body.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    last_position_X = e.touches[0].clientX - canvas.offsetLeft;
    last_position_Y = e.touches[0].clientY - canvas.offsetTop;
 }
 
 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e){
     var current_position_X = e.touches[0].clientX - canvas.offsetLeft;
     var currnet_position_Y = e.touches[0].clientY - canvas.offsetTop;

     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.lineCap = "round";
     ctx.moveTo(last_position_X, last_position_Y);
     ctx.lineTo(current_position_X, currnet_position_Y);
     ctx.stroke();

     last_position_X = current_position_X;
     last_position_Y = currnet_position_Y;
 }

 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
     current_mouse_position_X = e.clientX - canvas.offsetLeft;
     current_mouse_position_Y = e.clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.lineCap = "round";
         ctx.moveTo(last_position_X, last_position_Y);
         ctx.lineTo(current_mouse_position_X, current_mouse_position_Y);
         ctx.stroke();
     }

     last_position_X = current_mouse_position_X;
     last_position_Y = current_mouse_position_Y;
 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseEvent = "mouseUp";
 }
 
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvent = "mouseLeave";
 }

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}