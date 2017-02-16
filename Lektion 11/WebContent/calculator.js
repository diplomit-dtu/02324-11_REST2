/**
 * 
 */
var result = 0;
var operation = "";

$(document).ready(function(){
	$('td').click(function(event){
		var input = $(this).text();
		if (input=='C'){
			$('#result').text("");
		} else if (input == '+' || input == '-' || input == '*' || input == '/') {
			result = getInt();
			operation = input;
			clearDisp();
		} else if ( input == "="){
			if (operation == "+"){
				result += getInt();
			} else if (operation =="-"){
				result-= getInt();
			} else if (operation =="*"){
				result *= getInt();
			} else if (operation = "/"){
				result /= getInt();
			}
			showResult();
		} else {
			$('#result').append(input);
		}
	});
});

function getInt(){
	return Number($('#result').text());
}

function clearDisp(){
	$('#result').text("");
}

function showResult(){
	$('#result').text(result)
}