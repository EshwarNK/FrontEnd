var database = [
		{
			username:"andre",
			password:"secret"
		},
		{
			username:"ingre",
			password:"123"
		},
		{
			username:"hyina",
			password:"321"
		}
	];

var newsFeed = [{
	username: "Bobby",
	timeline: "So tired from all that learnings"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cool"
	}]

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password");

function isUserValid(username, password){
	for(var i=0; i<database.length; i++){
		if(username === database[i].username && password === database[i].password){
			return true;
		}
	}
	return false;
}

function signIn(username, password){
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);