document.addEventListener("DOMContentLoaded", function () {
    const cardBackImage = document.getElementById("cardBackImage");
    const cardBackLabel = document.getElementById("cardBackLabel");
    const prevButton = document.getElementById("prevCardBack");
    const nextButton = document.getElementById("nextCardBack");
    const cardTypeSelect = document.getElementById("cardType");
    const pitchSelect = document.getElementById("pitchValue"); // Assuming you have a pitch dropdown

    let currentSet = "nostats"; // Default card back set
    let currentPitch = "1"; // Default pitch value
    let currentIndex = 0; // First card back in set
    let availableBacks = [];

    function getCardBackSet() {
        const selectedType = cardTypeSelect.value;

        // Special categories (direct folder mapping)
        if (["equipment", "hero", "token", "weapon", "resource"].includes(selectedType)) {
            return selectedType;
        }

        // Determine category based on attack/defense presence
        const hasPower = document.querySelector(".cardPower")?.value !== "";
        const hasDefense = document.querySelector(".cardDefense")?.value !== "";

        if (hasPower && hasDefense) {
            return "allstats";
        } else if (!hasPower && hasDefense) {
            return "nopower";
        } else {
            return "nostats";
        }
    }

	function loadCardBacks(folder) {
		// Debug: Log the URL being requested
		console.log(`Requesting URL: http://localhost/FaBFormed/img/cardbacks/list_images.php?folder=${encodeURIComponent(folder)}`);

		// Corrected fetch URL to use the local server with URL encoding
		fetch(`http://localhost/FaBFormed/img/cardbacks/list_images.php?folder=${encodeURIComponent(folder)}`)
			.then(response => response.json())
			.then(images => {
				if (images.length > 0) {
					availableBacks = images;
					currentIndex = 0;
					updateCardBack();
				} else {
					console.error("No images found in the folder");
				}
			})
			.catch(error => console.error("Error loading card backs:", error));
	}

    function updateCardBack() {
        if (availableBacks.length === 0) return;

        cardBackImage.src = availableBacks[currentIndex];
        cardBackLabel.textContent = `Set: ${currentSet}, Pitch: ${currentPitch}`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + availableBacks.length) % availableBacks.length;
        updateCardBack();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % availableBacks.length;
        updateCardBack();
    });

    function updateSelection() {
        currentSet = getCardBackSet();
        currentPitch = pitchSelect?.value || "1";

        let folder = ["allstats", "nopower", "nostats"].includes(currentSet)
            ? `${currentSet} - ${currentPitch}`
            : currentSet;

        loadCardBacks(folder);
    }

    // Update when form inputs change
    cardTypeSelect.addEventListener("change", updateSelection);
    pitchSelect?.addEventListener("change", updateSelection);
    document.querySelector("#formContainer").addEventListener("input", updateSelection);

    updateSelection(); // Load initial images
});
