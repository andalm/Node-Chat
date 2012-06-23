/**
 * @author Andres Aldana
 * @date 14/04/2012
 */

var user,
	websocket = io.connect('http://localhost:8080');
	
$(document).on('ready', start);

function start()
{
	$('form#login').on('submit', login);
	websocket.on("agregarMensaje", mensaje);
}

function login(event)
{
	event.preventDefault();
	//toma el nick ingresado por el usuario 
	var $userVal = $('form input#user');
	
	//Evalua el usaurio	
	if(!/[A-Z]\s+/i.test($userVal.val()))
	{
		user = $userVal.val();
		//Muestra el nombre de usuario en la vaja de texto
		$('div#userLog').text('Usuario: '+ user).css({'display' : 'block'});
		
		//se crea el form de los comentario
		var form = document.createElement('form'),
			input = document.createElement('input');
			
		form.setAttribute('id', 'coment');
		input.setAttribute('type', 'text');
		input.setAttribute('id', 'spaceComent');
		input.setAttribute('class', 'border-radius-little');
		input.setAttribute('placeholder', 'Comenta....');
		input.setAttribute('value', '');
		input.setAttribute('required', 'required');
		form.appendChild(input);
		
		$userVal.fadeOut().queue(function(next){
			$('div#main').append(form);
			$('form#coment').on('submit', enviarMensaje).fadeIn();
			$('form#login').off('submit').remove();
			next();	
		});		
	}				
}

function enviarMensaje(event)
{
	event.preventDefault();
	var $comentario = $('form input#spaceComent');
	
	if(/[A-Z0-9]\s*/i.test($comentario.val()))
	{
		websocket.emit("nuevoMensaje", {'comentario' : $comentario.val(), 'user' : user});
		$comentario.attr('value', '');
	}		
}

function mensaje(datos)
{
	console.log(datos);
	$('div#comments').append('<section id="chat"><span><b>'+datos.user+' dijo: </b></span><span>'+datos.comentario+'</span></section>');
	var scc = document.getElementById('comments');
	scc.scrollTop = scc.scrollHeight + scc.offsetHeight;
}















