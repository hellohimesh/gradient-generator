var body = document.querySelector('body');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var gradient = document.getElementById('gradient');
color1.addEventListener("input", function(){
generateGradient();
})


color2.addEventListener("input", function(){
generateGradient();
})


function generateGradient(){
body.style.background = "linear-gradient(to right,"
 +color1.value
 +","
 +color2.value
 +")" ;
 gradient.textContent = body.style.background +";";
}

const add = (a,b) => {
	return a + b ; 
}

const array1 = [1,2,10];

const double = [];

array1.forEach((num)=>{
	
})