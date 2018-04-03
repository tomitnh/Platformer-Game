class Tree {
	constructor (imgSrc) {
		this.sprite = new Image();
		this.sprite.src = imgSrc;
		this.sprite.onload = rscLoaded();

		this.x = 0;
		this.y = 0;
	}
	show () {
		var sx = 0;
		var sy = 0;

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		ctx.drawImage(this.sprite, 
			sx, 
			sy, 
			this.sprite.width, 
			this.sprite.height, 
			this.x, 
			this.y, 
			this.sprite.width, 
			this.sprite.height);
	}
}