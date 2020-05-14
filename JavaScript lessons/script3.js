// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
// 	console.log("CLICK!!");
// })
//Instead of click, you can do mouseenter, mouseleave

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	// console.log(input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if(inputLength()>0 && event.keyCode === 13){
		createListElement();
	}
}


// Every time we press enter only, the input gets added to the list
button.addEventListener("click", addListAfterClick);

// At the press of enter, if we press enter, if we want to add it to the cart, then we check the keyCode and add it if its value is 13
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
input.addEventListener("keypress", addListAfterKeyPress);