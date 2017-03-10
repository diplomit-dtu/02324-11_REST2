/* Implement ajax call to rest Service */
$(document).ready(function(){
	loadUsers();
})


function createUser(){
	event.preventDefault();
	//TODO serialize userform
	var data = $('#userform').serializeJSON();
	//TODO make ajax call!
	$.ajax({
		url : 'rest/users',
		method: 'POST',
		contentType: "application/json",
		data: data,
		success : function(data){
			alert(JSON.stringify(data));
			loadUsers();
		}

	});
	

}

function deleteUser(id){
	if (!id && id!=0){
		id = $('#deleteid').val();
	}
	event.preventDefault();
	$.ajax({
		url :'rest/users/' + id,
		method : 'DELETE',
		success: function(data){
			loadUsers();
		}
	})
}

function loadUsers(){
	$.get('rest/users', function(data, textStatus, req) {
		$("#usertablebody").empty();
		$.each(data, function(i, elt) {
			$('#usertablebody').append(generateUserHTML(elt));
		});
	});
	
}

function generateUserHTML(user){
	return 	'<tr><td>' + user.userId + '</td>' +
	'<td>' + user.userName + '</td>' +
	'<td>' + user.password +'</td>' +
	'<td onclick="deleteUser(' + user.userId +')"><button>slet bruger</button></td></tr> '
}

function generateHTML(json){
	var html = '<tr>'
		$.each(json, function(i, elt) {
			html+= '<td>' + JSON.stringify(elt) + '</td>';
		});
	return html += '</tr>';
}