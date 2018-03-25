class Hero {
	constructor (imgSrc) {
		this.sprite = new Image();
		this.sprite.src = imgSrc;
		this.sprite.onload = rscLoaded();

		this.x = 0;
		this.y = 0;
		this.dir = 0;

		// enum of this character's facing direction
		this.FRONT = 0;
		this.BACK = 1;
		this.LEFT = 2;
		this.RIGHT = 3;
	}

	walk () {
		var dist = 5;
		switch (this.dir) {
			case this.FRONT :
				this.y += dist;		// front
				// handle moving beyond canvas.height
				break; 
			case this.BACK: 
				this.y -= dist;		// back
				//handle moving below y == 0;
				break;
			case this.LEFT: 
				this.x -= dist;		// left
				// handle moving below x == 0;
				break;
			case this.RIGHT: 
				this.x += dist;		// right
				// handle moving beyond canvas.width
				break;
			default:
				// do nothing
		}
	}

	show () {
		var sx = 0;
		var sy = 0;
		var width = 60;
		switch (this.dir) {
			case this.FRONT :
				sx = 120;	// front
				break; 
			case this.BACK: 
				sx = 180;	// back
				break;
			case this.LEFT: 
				sx = 60;		// left
				break;
			case this.RIGHT: 
				sx = 0; 	// right
				break;
			default:
				// do nothing
		}

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ctx.drawImage(this.sprite, 
			sx, 
			sy, 
			width, 
			this.sprite.height, 
			this.x, 
			this.y, 
			width, 
			this.sprite.height);
	}
}