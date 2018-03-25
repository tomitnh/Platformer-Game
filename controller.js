/***********
 * Controller.js 
 *
 * Controls frame animation and drawing on the canvas
 */

var fps = 30; // Standard frames per second
window.setInterval(animate, 1000/fps);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x, y, size;
x = 0;
y = 0;
size = 10;

// load Sprite of baby ninja
var loaded = false;

var hero = new Hero('./Sprite/babyninja.png');
// Keyboard controller
function moveHero (e) {
	switch (e.key) {
		case 'ArrowLeft':
			hero.dir = hero.LEFT;
			break;
		case 'ArrowRight':
			hero.dir = hero.RIGHT;
			break;
		case 'ArrowUp':
			hero.dir = hero.BACK;
			break;
		case 'ArrowDown':
			hero.dir = hero.FRONT;
			break;
		default:
			// nothing
	}
	hero.walk();
}
document.addEventListener('keydown', moveHero);

function rscLoaded () {
	loaded = true;
	console.log('img loaded');
}

function draw() {

	if (loaded) {
		hero.show();
		
	} else {
		ctx.fillStyle = 'green';

		if (x < canvas.width) {
			ctx.fillRect(x, y, size, size);
			x += 15;
		} else {
			x = 0;
		}
	}
	
}

function animate() {

	// clear canvas and draw new frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}

function dist(x1, y1, x2, y2) {
	// calculating distance with Pythagorean theorem
	var a = x2 - x1;
	var b = y2 - y1;
	return Math.sqrt(a*a + b*b);
}