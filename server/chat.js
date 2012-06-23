/**
 * @author Andres Aldana
 * @date 18/04/2012
 */

var server = require("socket.io").listen(8080);
var sockets = server.sockets;

function nuevoMensaje(dat)
{
	console.log(dat);
	sockets.emit("agregarMensaje", dat);
}

exports.server = server.sockets;
exports.nuevoMensaje = nuevoMensaje;