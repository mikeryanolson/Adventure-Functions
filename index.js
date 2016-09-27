/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid",
	"Trump-monster",
	"Butthole-Generator",
	"Poisoned Soup",
	"Marcus"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace",
	"Greek Yogurt",
	"very long stick",
	"dashing good looks",
	"cheese quesedilla"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to",
	"had dinner with",
	"littly bruised",
	"embarassed",
	"literally murdered",
	"went on a tinder-date with"

];

// var heroGender;
// if (Math.random() < 0.5) {
// 	heroGender = "heroine";
// } else {
// 	heroGender = "hero";
// }

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/
// var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
// var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
// var chosenAction = actions[Math.floor(Math.random() * actions.length)];

// function rando(arr){
// 	arr[Math.floor(Math.random() * arr.length)];
// }


// var output = "Armed with only their " +
// 	rando(weapons) +
// 	" our " +
// 	heroGender +
// 	" " +
// 	rando(actions) +
// 	" the evil " +
// 	rando(monsters) +
// 	"!";

// document.getElementById("adventure").innerText = output;

function newAdventure(){
		function rando(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
		var heroGender;
		if (Math.random() < 0.5) {
		heroGender = "heroine";
	} 	else {
		heroGender = "hero";
	}
	var output = "Armed with only their " +
		rando(weapons) +
		" our " +
		heroGender +
		" " +
		rando(actions) +
		" the evil " +
		rando(monsters) +
		"!";

	document.getElementById("adventure").innerText = output;
}
newAdventure();
	document.getElementById("new_adventure").onclick = newAdventure;


/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
