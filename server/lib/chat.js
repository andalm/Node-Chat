/**
 * @author Andres Aldana
 * @date 18/04/2012
 */

var index = 0,
    users = { name : new Array(), id : new Array(), chanel : new Array(), msj : new Array() }; 

function init(usuario)
{
	users.chanel[index] = usuario;
	users.id[index] = usuario.store.id;
	index++;
}

function registerName(data)
{
	for(var user=0;user < users.id.length; user++)
	{
		if(data.id == users.id[user])
		{
			users.name[user] = data.name;
		}
	}
	most();
}

function most()
{
	for(var user=0;user < users.id.length; user++)
	{
		console.log(user+" "+users.name[user]+ " "+ users.id[user]);
	}
}
exports.init = init;
exports.registerName = registerName;