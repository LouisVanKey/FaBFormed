class CanvasHelper {
	background = '';
	ctx;
	backgroundImage;

	constructor(canvas, background) {
		this.canvas = canvas;
		// Set proper canvas dimensions
		this.canvas.width = 450;
		this.canvas.height = 628;

		this.ctx = this.canvas.getContext('2d');

		// Draw a white background
		this.ctx.fillStyle = "white";
		this.ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw a placeholder text
		this.drawText("Card Preview", 130, 50);

		this.background = background;
	}

	drawBackground(src, fallbackText) {
		if (src === '') {
			this.clear();
			if (fallbackText) {
				this.drawText(fallbackText, 130, 50);
			}
			// Return auto-resolving promise
			return new Promise(resolve => resolve('resolved'));
		}

		const self = this;

		if (this.backgroundImage && this.backgroundImage.src.endsWith(src)) {
			// Image is already loaded, lets draw it!
			return new Promise(resolve => {
				self.ctx.drawImage(this.backgroundImage, 0, 0);
				resolve('resolved');
			});
		}

		// load image
		let base_image = new Image();
		base_image.src = src;

		// Clear the canvas while loading
		this.clear();
		// Draw loading text
		this.drawText('Loading...', 130, 50);
		return new Promise(resolve => {
			base_image.onload = function () {
				self.ctx.drawImage(base_image, 0, 0);
				self.backgroundImage = base_image;
				resolve('resolved');
			}
		});
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawText(text, x, y, font = '20px Arial', fillStyle = 'black') {
		this.ctx.fillStyle = fillStyle;
		this.ctx.font = font;
		this.ctx.fillText(text, x, y);
	}
}
