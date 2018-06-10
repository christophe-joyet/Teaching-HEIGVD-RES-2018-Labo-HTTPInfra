var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

//on regarde si l'on reçoit une requête GET avec / comme argument + HTTP/1.0
// le / est la ressource visée
app.get('/', function(req, res) {
	res.send(generateStudents());
});

//On écoute sur le port 3000
app.listen(3000, function(){
	console.log("Listen HTTP request on port 9090");
});

function generateStudents() {
	var numberOfStudents = chance.integer({
	 min:0,
	 max:10
	});
	console.log(numberOfStudents);
	var students = [];
	for (var i = 0; i < numberOfStudents; ++i) {
	 var gender = chance.gender();
	 var birthYear = chance.year({
		min: 1086,
		max: 1996
 	 });
	 students.push({
	  fistName: chance.first({
	   gender: gender
	  }),
	  lastName: chance.last(),
	  gender: gender,
	  birthday: chance.birthday({
	   year: birthYear
	  })
	 });
	};
console.log(students);
return students;
}
