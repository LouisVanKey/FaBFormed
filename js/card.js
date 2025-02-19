class Card {
	canvasHelper;
	backgrounds = [];

	/**
	 * @param {CanvasHelper} canvasHelper
	 * @param title
	 */
	constructor(canvasHelper, title) {
		this.canvasHelper = canvasHelper;
		this._title = title;
		this._type = '';
		this._pitch = 1;
		this._backgroundIndex = 0;

		// Load cardbacks config
		fetch("js/cardbacks.json")
		.then(response => response.json())
		.then(json => {
			this.backgrounds = json;
		});
	}

	set pitch(pitch) {
		this._pitch = this.clamp(pitch, 1, 3);
		this.draw();
	}

	get pitch() {
		return this._pitch;
	}

	set type(type) {
		this._type = type;
		this._backgroundIndex = 0;
		this._pitch = 1;
		this.draw();
	}

	set title(title) {
		this._title = title;
		this.draw();
	}

	get title() {
		return this._title;
	}

	set backgroundIndex(backgroundIndex) {
		this._backgroundIndex = backgroundIndex;
		this.draw();
	}

	previousBackground() {
		this.backgroundIndex = this.clamp(
			(this._backgroundIndex - 1 + this.availableBackgrounds.length) % this.availableBackgrounds.length,
			0,
			this.availableBackgrounds.length - 1
		);
	}

	nextBackground() {
		this.backgroundIndex = this.clamp(
			(this._backgroundIndex + 1) % this.availableBackgrounds.length,
			0,
			this.availableBackgrounds.length - 1
		);
	}

	get typeFolder() {
		if (["equipment", "hero", "token", "weapon", "resource"].includes(this._type)) {
			return this._type
		}
		// Determine category based on attack/defense presence
		const hasPower = document.querySelector(".cardPower")?.value !== "";
		const hasDefense = document.querySelector(".cardDefense")?.value !== "";

		// Special categories (direct folder mapping)
		if (hasPower && hasDefense) {
			return "allstats";
		} else if (!hasPower && hasDefense) {
			return "nopower";
		}

		return 'nostats';
	}

	getBackground() {
		if (!this.backgrounds[this.typeFolder]) return "";
		if (!this.backgrounds[this.typeFolder][this._pitch]) return "";
		if (!this.backgrounds[this.typeFolder][this._pitch][this._backgroundIndex]) return "";

		return this.backgrounds[this.typeFolder][this._pitch][this._backgroundIndex];
	}

	get availableBackgrounds() {
		return this.backgrounds[this.typeFolder][this._pitch];
	}

	draw() {
		const self = this;
		self.canvasHelper.drawBackground(self.getBackground(), "Card Preview").then(function () {
			// Draw the title
			self.drawTitle(self.canvasHelper);
		});
	}

	drawTitle() {
		if (!this._title) return;

		// TODO make a lookup table to find the correct x/y for each card type
		this.canvasHelper.drawText(this._title, 95, 67)
	}

	clamp(number, min, max) {
		return Math.max(min, Math.min(number, max));
	}
}
