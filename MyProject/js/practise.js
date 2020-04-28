var names = ["Zayn", "Zainab", "Shanon", "Zaid"]; //an array of 'names'

function loadnames(){
	document.getElementById("names").innerHTML=names; //function to print the names into the array upon page load
}

function getname(){									//gets called when the button is clicked 
	var name = prompt("What is you name? ");
	names[names.length] = name;
	document.getElementById("names").innerHTML=names;
}