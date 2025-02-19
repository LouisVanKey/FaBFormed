document.addEventListener("DOMContentLoaded", function () {
	const cardBackLabel = document.getElementById("cardBackLabel");
	const prevButton = document.getElementById("prevCardBack");
	const nextButton = document.getElementById("nextCardBack");

	prevButton.addEventListener("click", function () {
		cardBackLabel.textContent = `Set: ${window.card.typeFolder}, Pitch: ${window.card.pitch}`;
		window.card.previousBackground();
	});

	nextButton.addEventListener("click", function () {
		cardBackLabel.textContent = `Set: ${window.card.typeFolder}, Pitch: ${window.card.pitch}`;
		window.card.nextBackground();
	});
});
