/* Implement ajax call to rest Service */
$(document).ready(function(){
	loadUsers();
})


function createUser(){
	event.preventDefault();
	//TODO serialize userform
	
	//TODO make ajax call!	

}

function deleteUser(id){
	event.preventDefault();
	//TODO ajax call to delete user
	
	//Hint: Remember to reload userlist
}

function loadUsers(){
	//TODO load list of users from service and append rows to user table
	//Hints: $.each(data, function(i, element){ } iterates over a JSON-collection (data). 
	// $('').append('html'), appends html to an html element.
	
}
//Convenience function for generating som html from an 
function generateUserHTML(user){
	return 	'<tr><td>' + user.userId + '</td>' +
	'<td>' + user.userName + '</td>' +
	'<td>' + user.password +'</td>' +
	'</tr>';
}
//generic function for making a tablerow - note that keys must be in correct order
function generateHTML(json){
	var html = '<tr>'
		$.each(json, function(i, elt) {
			html+= '<td>' + elt + '</td>';
		});
	return html += '</tr>';
}