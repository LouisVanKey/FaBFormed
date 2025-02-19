
document.addEventListener("DOMContentLoaded", function() {
    // First, get the cardTypeSelect and formContainer when the DOM is fully loaded
    const cardTypeSelect = document.querySelector("#cardType");  // Corrected ID selector
    const formContainer = document.querySelector("#formContainer");  // Corrected ID selector

    // Define the form templates for each card type
    const formTemplates = {
        action: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Cost</label>
                <input type="number" class="form-control cardCost">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Power</label>
                <input type="number" class="form-control cardPower">
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>
            <div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for equipment type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for equipment type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Action type</label>
                <select class="form-control cardSubType">
                    <option value="Action">Action</option>
                    <option value="Attack">Attack</option>
                    <option value="Arrow Attack">Arrow Attack</option>
                    <option value="Dagger Attack">Dagger Attack</option>
                    <option value="Aura">Aura</option>
                    <option value="Affliction Aura">Affliction Aura</option>
                    <option value="Construct">Construct</option>
                    <option value="Invocation">Invocation</option>
                    <option value="Item">Item</option>
                    <option value="Shuriken Item">Shuriken Item</option>
                    <option value="Landmark">Landmark</option>
                    <option value="Song">Song</option>
                    <option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for action type -->
                <input type="text" class="form-control customCardSubTypeInput" style="display: none;" placeholder="Enter custom action type">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
        attack_reaction: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Cost</label>
                <input type="number" class="form-control cardCost">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>                        
			<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
        block: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
        defense_reaction: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Cost</label>
                <input type="number" class="form-control cardCost">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
		demi_hero: `
            <div class="mb-3">
                <label class="form-label">Hero Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Hero Power</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Intellect</label>
                <input type="number" class="form-control cardIntellect">
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            	
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Life</label>
                <input type="number" class="form-control cardLife">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
        `,
		equipment: `
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Equipment type</label>
                <select class="form-control cardSubType">
                    <option value="Head">Head</option>
                    <option value="Chest">Chest</option>
                    <option value="Arms">Arms</option>
                    <option value="Legs">Legs</option>
					<option value="Base">Base</option>
					<option value="Off-Hand">Off-Hand</option>
					<option value="Item">Item</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for equipment type -->
                <input type="text" class="form-control customCardSubTypeInput" style="display: none;" placeholder="Enter custom equipment type">
            </div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
        `,
		hero: `
            <div class="mb-3">
                <label class="form-label">Hero Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Hero Power</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Intellect</label>
                <input type="number" class="form-control cardIntellect">
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
				<label class="form-label">Young?</label>
				<input type="checkbox" class="form-check-input cardYoung">
			</div>
            <div class="mb-3">
                <label class="form-label">Life</label>
                <input type="number" class="form-control cardLife">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
        `,
		instant: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Cost</label>
                <input type="number" class="form-control cardCost">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Action type</label>
                <select class="form-control cardSubType">
                    <option value="Instant">Instant</option>
					<option value="Aura">Aura</option>
					<option value="Figment">Figment</option>
					<option value="Trap">Trap</option>
                </select>
                <!-- Custom input field for action type -->
                <input type="text" class="form-control customCardSubTypeInput" style="display: none;" placeholder="Enter custom action type">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
		macro: `
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Macro Group (f.e. Rosetta)</label>
                <input type="number" class="form-control cardClass">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
		mentor: `
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
			<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
        `,
        resource: `
            <div class="mb-3">
                <label class="form-label">Pitch</label>
                <select class="form-control cardPitch">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
			<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Resource type</label>
                <select class="form-control cardSubType">
                    <option value="Resource">Resource</option>
                    <option value="Gem">Gem</option>
                    <option value="Chi">Chi</option>
					<option value="Custom">Custom</option>
                </select>
                <!-- Custom input field for equipment type -->
                <input type="text" class="form-control customCardSubTypeInput" style="display: none;" placeholder="Enter custom equipment type">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>
				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
        `,
        token: `
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
			<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
			<div class="mb-3">
                <label class="form-label">Subtype (f.e. Aura)</label>
                <input type="number" class="form-control cardSubType">
            </div>
        `,
		weapon: `
            <div class="mb-3">
                <label class="form-label">Card Name</label>
                <input type="text" class="form-control cardName">
            </div>
            <div class="mb-3">
                <label class="form-label">Card Text</label>
                <textarea class="form-control cardText"></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Power</label>
                <input type="number" class="form-control cardPower">
            </div>
            <div class="mb-3">
                <label class="form-label">Talent</label>
                <input type="number" class="form-control cardTalent">
            </div>            			
				<div class="mb-3">
                <label class="form-label">Class</label>
                <select class="form-control cardClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom class type -->
                <input type="text" class="form-control customCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Secondary Class (Optional)</label>
                <select class="form-control cardSecondaryClass">
					<option value="">None</option>
					<option value="Adjudicator">Adjudicator</option>
					<option value="Assassin">Assassin</option>
					<option value="Bard">Bard</option>
					<option value="Brute">Brute</option>
					<option value="Generic">Generic</option>
					<option value="Guardian">Guardian</option>
					<option value="Illusionist">Illusionist</option>
					<option value="Mechanologist">Mechanologist</option>
					<option value="Merchant">Merchant</option>
					<option value="Ninja">Ninja</option>
					<option value="Ranger">Ranger</option>
					<option value="Runeblade">Runeblade</option>
					<option value="Shapeshifter">Shapeshifter</option>
					<option value="Warrior">Warrior</option>
					<option value="Wizard">Wizard</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for custom secondary class type -->
                <input type="text" class="form-control customSecondaryCardClass" style="display: none;" placeholder="Enter custom class">
            </div>
            <div class="mb-3">
                <label class="form-label">Weapon type</label>
                <select class="form-control cardSubType">
                    <option value="Staff">Staff</option>
                    <option value="Book">Book</option>
                    <option value="Hammer">Hammer</option>
                    <option value="Flail">Flail</option>
					<option value="Wrench">Wrench</option>
					<option value="Bow">Bow</option>
					<option value="Sword">Sword</option>
					<option value="Dagger">Dagger</option>
					<option value="Club">Club</option>
					<option value="Brush">Brush</option>
					<option value="Scroll">Scroll</option>
					<option value="Scythe">Scythe</option>
					<option value="Gun">Gun</option>
					<option value="Axe">Axe</option>
					<option value="Lute">Lute</option>
					<option value="Orb">Orb</option>
					<option value="Fiddle">Fiddle</option>
					<option value="Scepter">Scepter</option>
					<option value="Polearm">Polearm</option>
					<option value="Pistol">Pistol</option>
					<option value="Custom">Custom...</option>
                </select>
                <!-- Custom input field for weapon type -->
                <input type="text" class="form-control customCardSubTypeInput" style="display: none;" placeholder="Enter custom weapon type">
            </div>
			<div class="mb-3">
				<label class="form-label">1h?</label>
				<input type="checkbox" class="form-check-input cardOneHanded">
				<label class="form-label">2h?</label>
				<input type="checkbox" class="form-check-input cardTwoHanded">
			</div>
			<div class="mb-3">
                <label class="form-label">Defense</label>
                <input type="number" class="form-control cardDefense">
            </div>
			<div class="mb-3">
				<label class="form-label">Rarity</label>

				<select class="form-control cardRarity">
					<option value="Common">Common</option>
					<option value="Fabled">Fabled</option>
					<option value="Legendary">Legendary</option>
					<option value="Majestic">Majestic</option>
					<option value="Marvel">Marvel</option>
					<option value="Promo">Promo</option>
					<option value="Rare">Rare</option>
					<option value="Super Rare">Super Rare</option>
					<option value="Token">Token</option>
				</select>
			</div>
        `,
    };

    // Check if the cardTypeSelect exists before adding the event listener
    if (cardTypeSelect) {
        cardTypeSelect.addEventListener("input", function() {
            const selectedType = cardTypeSelect.value;
            // Set the card type
            window.card.type = cardTypeSelect.value;

            formContainer.innerHTML = formTemplates[selectedType] || "";

            // If the card name input exists
            let cardNameInput = document.querySelector('.cardName');
            if (cardNameInput) {
                // Sync the values
                cardNameInput.value = window.card.title;
                cardNameInput.addEventListener('keyup', (evt) => window.card.title = evt.target.value);
            }
            // If the pitch input exists
            let pitchInput = document.querySelector('.cardPitch');
            if (pitchInput) {
                // Sync the values
                pitchInput.value = window.card.pitch;
                pitchInput.addEventListener("input", (evt) => window.card.pitch = evt.target.value)
            }
        });
    }

    // Listen for changes on the dynamically generated form fields (including class selectors)
    formContainer.addEventListener("change", function(event) {
        // Check if the event target is the cardSubType select field
        if (event.target.classList.contains("cardSubType")) {
            const customCardSubTypeInput = formContainer.querySelector(".customCardSubTypeInput");
            // Show or hide the custom input based on the selected value
            if (event.target.value === 'Custom') {
                customCardSubTypeInput.style.display = 'block';
            } else {
                customCardSubTypeInput.style.display = 'none';
            }
        }

        // Check if the event target is the cardClass select field
        if (event.target.classList.contains("cardClass")) {
            const customCardClassInput = formContainer.querySelector(".customCardClass");
            // Show or hide the custom input based on the selected value
            if (event.target.value === 'Custom') {
                customCardClassInput.style.display = 'block';
            } else {
                customCardClassInput.style.display = 'none';
            }
        }

        // Check if the event target is the cardSecondaryClass select field
        if (event.target.classList.contains("cardSecondaryClass")) {
            const customSecondaryCardClassInput = formContainer.querySelector(".customSecondaryCardClass");
            // Show or hide the custom input based on the selected value
            if (event.target.value === 'Custom') {
                customSecondaryCardClassInput.style.display = 'block';
            } else {
                customSecondaryCardClassInput.style.display = 'none';
            }
        }
    });
document.addEventListener("change", function(event) {
    const oneHandedCheckbox = document.querySelector(".cardOneHanded");
    const twoHandedCheckbox = document.querySelector(".cardTwoHanded");

    if (!oneHandedCheckbox || !twoHandedCheckbox) return; // Prevent errors if elements are missing

    if (event.target.classList.contains("cardOneHanded")) {
        if (oneHandedCheckbox.checked) {
            twoHandedCheckbox.checked = false;
        }
    }

    if (event.target.classList.contains("cardTwoHanded")) {
        if (twoHandedCheckbox.checked) {
            oneHandedCheckbox.checked = false;
        }
    }
});

});
