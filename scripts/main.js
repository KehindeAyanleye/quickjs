var myImage = document.querySelector('Img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
	myImage.setAttribute ('src', 'images/barak_obama.png');
	} else {
	myImage.setAttribute ('src', 'images/firefox-icon.png');
		}
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Who are you ' + storedName + '?';
}

myButton.onclick = setUserName;