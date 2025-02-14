/*
 _____   ____  _   _  _____ 
|  __ \ / __ \| \ | |/ ____|
| |__) | |  | |  \| | |  __ 
|  ___/| |  | | . ` | | |_ |
| |    | |__| | |\  | |__| |
|_|     \____/|_| \_|\_____|

* 2-players
* Lib used : p5.js
* Constructeurs/objets du jeu : ball.js, pad.js, net.js (separation du terrain).
* Le constructeur Game de game.js se charge d'appeler les methodes decisives (load, update, draw)
* de ces elements. Une instance de Game() est créée ici puis appelée dans les
* fonctions obligatoires de p5 (setup() et draw()).

*/

const game = new Game();

function preload() {
	game.preload();
}

function setup() {
	createCanvas(800, 400);
	background('#1b002a');
	noStroke();

	game.load();
}

function draw() {
	background('#1b002a');

	game.update();

	game.draw();
}