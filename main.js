canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;

function uploadgreencar() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x = " + greencar_x + "| y = " + greencar_y)
	}
}

function down()
{
	if(greencar_y <= 0){
		greencar_y = greencar_y + 10;
		console.log("When down arrow is pressed, x = " + greencar_x + "| y = " + greencar_y)
	}
}

function left()
{
	if(greencar_x <= 0){
		greencar_x = greencar_x + 10;
		console.log("When left arrow is pressed, x = " + greencar_x + "| y = " + greencar_y)
	}
	
}

function right()
{
	if(greencar_x >= 0){
		greencar_x = greencar_x + 10;
		console.log("When left arrow is pressed, x = " + greencar_x + "| y = " + greencar_y)
	}
}
