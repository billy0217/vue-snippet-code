const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

let user = [
	{
		"id": 1,
		"name": "Yan Griffin",
		"email": "znorman@hotmail.com",
		"phone": "+61318861912"
	},
	{
		"id": 2,
		"name": "Diana Watson",
		"email": "Diana@hotmail.com",
		"phone": "+6142983135"
	},
	{
		"id": 3,
		"name": "Archie Paget",
		"email": "ArchiePaget@jourrapide.com",
		"phone": "+6153565553"
	},
	{
		"id": 4,
		"name": "Karen Williams",
		"email": "crosario@pearson.org",
		"phone": "+61867235064"
	},
	{
		"id": 5,
		"name": "John Elliott",
		"email": "bradleygregory@haas.edu",
		"phone": "+6177807736"
	},
	{
		"id": 6,
		"name": "Katherine Walters",
		"email": "randy23@yahoo.com",
		"phone": "+61277920807"
	},
	{
		"id": 7,
		"name": "Joshua Smith",
		"email": "laurahorne@yahoo.com",
		"phone": "+61225119127"
	},
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.get('/users', (req, res) => {
	// sedning all users list
	if(user.length > 1 && JSON.stringify(user[0]) !== '{}'){
		res.json(user);
	}else{
		// sending 404 when not found
		res.status(404).send({message: 'no user record found'});
	}
});
