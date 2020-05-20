var numsquare=6;
var colors=generatecolors(numsquare);

var squares = document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
colordisplay.textContent=pickedColor;


var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquare=3;
	colors=generatecolors(numsquare);
	pickedColor=pickcolor();
	colordisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
})
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
numsquare=6;
	colors=generatecolors(numsquare);
	pickedColor=pickcolor();
	colordisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
		
			squares[i].style.display="block";
	}
})
var h1=document.querySelector("h1");

var resetbutton=document.querySelector("#reset");

resetbutton.addEventListener("click",function(){
	colors=generatecolors(numsquare);
	pickedColor=pickcolor();
	colordisplay.textContent=pickedColor;
	messageDisplay.textContent=""
	this.textContent="New colors";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
})

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		//compare color with picked color
		var clickedcolor=(this.style.backgroundColor);
		if(clickedcolor===pickedColor)
		{ messageDisplay.textContent="correct"
	      resetbutton.textContent="Play Again"
		  changecolor(clickedcolor);
		  h1.style.backgroundColor=clickedcolor;

		}
		else
		{ this.style.backgroundColor ="#232323";
		messageDisplay.textContent="Try Again"; }
	});
}				

function changecolor(color){
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor=color;
}	
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random ];
}

function generatecolors(num){
	var arr=[]

	for(var i=0;i<num;i++){
		arr.push(randomcolor())
	}


	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}