/**
 * 
 */
//Alternate version of attaching clickhandler
$(document).ready(function() {
	$('#loginsubmit').click(function(){
		//login(); 
	});
});

function login(){
	event.preventDefault();
	var userpass = $('#username').val() + ' ' + $('#password').val();
	alert("username/password: " + userpass);
	$.ajax({
		url : "rest/password",
		data : userpass,
		contentType: "text/plain",
		method: 'POST',
		success : function(data){
			data = JSON.parse(data);
			alert(data);
			if(data){
				$('#maincontainer').load("useradmin.html");
			}
		}
	});


}

function loginJSON(){
	event.preventDefault();
	var userpass = $('#loginform').serializeJSON();
	alert("username/password: " + userpass);
	$.ajax({
		url : "rest/password/json",
		data : userpass,
		contentType: "application/json",
		method: 'POST',
		success : function(data){
			data = JSON.parse(data);
			alert(data);
			if(data){
				$('#maincontainer').load("useradmin.html");
			}
		}
	});


}

function loginForm(){
	event.preventDefault();
	var userpass = $('#loginform').serialize();
	alert("username/password: " + userpass);
	$.ajax({
		url : "rest/password/form",
		data : userpass,
		contentType: "application/x-www-form-urlencoded",
		method: 'POST',
		success : function(data){
			alert(data);
			if(data=='true'){
				$('#maincontainer').load("useradmin.html");
			}
		}
	});


}