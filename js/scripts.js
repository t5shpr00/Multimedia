var list = []; //an array of name
			
var button = document.getElementById('add');

button.onclick = addPerson;

function addPerson() {
	var newName = ''; 
	newName= document.getElementById('name').value; //gets value of input field
	list.push(newName); // adds the new name to the list array
	var lengthOfList = list.length; // length of list array
	var index = lengthOfList - 1;
	document.getElementById('name').value = '';// empties the input field

	for(var i=index; i < list.length; i++) {
		var ul = document.getElementById('list');
		var li = document.createElement('li');// a list item is created
		li.appendChild(document.createTextNode(list[i])); // adds name to list item
		li.className += ' well text-primary'
		ul.appendChild(li); //adds list item to unordered list
	}
};