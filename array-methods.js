console.log("working");
var output = document.getElementById("planets");
var outputCapital = document.getElementById("capital");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var capitalPlanets = "";
var containsE = document.getElementById("lettere");
var sentence = document.getElementById("sentence");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function (planet1){
	var planetsString = planet1;
	console.log("string of planets", planetsString);
	output.innerHTML += planetsString + "<br>";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var planetsCapital = planets.map(function(planet1){
	return planet1.charAt(0).toUpperCase() + planet1.slice(1);
});
	console.log("capitalized planets", planetsCapital);
	outputCapital.innerHTML = `<p>Capitalized planets: ${planetsCapital}</p>`;

// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsE = planets.filter(function(planet2){
	return planet2.indexOf("e") !== -1;
});
	console.log("planets with 'e'", planetsE);
	containsE.innerHTML = `<p>These planets contain the letter 'E': ${planetsE}</p>`;

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var makeSentence = words.reduce(function(prev, curr){
	return prev + " " + curr;
});
	console.log("sentence", makeSentence);
	sentence.innerHTML = makeSentence + "!";
