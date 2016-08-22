$(document).ready(function(){

	$('#submit').attr('disabled', true);
	$('#message').on('keyup', function(){
		$('#submit').attr('disabled', false);
	});

	$('#submit').on('click', function(){
		var text = $('#message').val();
		var shift = parseInt( $('#shift').val() );
		var option = $('#encrypt-decrypt').val();
		var newMessage = encrypt(text, shift, option);
		
		displayNewMessage(newMessage, option);
	});

});


function encrypt(text, shift, option){
	if(option == 'decrypt'){ 
		shift = 0-shift; 
	}

	var result = [];

	for(var i=0; i<text.length; i++){
		var c = text[i];
		result.push( shiftChar(c, shift) );
	}

	console.log(result)
	return result.reverse().join('');
}

function shiftChar(c, shift){
	return String.fromCharCode( c.charCodeAt(0) + shift );
}

function displayNewMessage(message, option){

	$('#results').empty();
	$('#results').append(
			"<h2>Your "
			+option[0].toUpperCase() + option.slice(1)
			+"ed Message</h2><p>"
			+message
			+"</p>"
		);
}