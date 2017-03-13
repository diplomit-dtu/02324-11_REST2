/**
 * 
 */

function loadAddresses(){
	$.get('http://dawa.aws.dk/vejnavne/autocomplete?q=' + $('input').val(), function(data) {
		var options = "";
		$.each(data, function(i, elt) {
			options +='<option value="'+elt.tekst +'">';
			$('#datalist').html(options);
		});
	
	})
}