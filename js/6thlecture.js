function do stuff() {
	$.ajax({
		dataType: "jsonp",
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}

function jsonCallback(json)
{
	console.log(json);
	
}