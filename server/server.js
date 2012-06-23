/**
 * @author Andres Aldana
 * @date 18/04/2012
 */

var chat = require("./chat.js");
chat.server.on("connection", start);

function start(usuario)
{
		usuario.on("nuevoMensaje", chat.nuevoMensaje);
}

