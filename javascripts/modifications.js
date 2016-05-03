"use strict"
$(document).ready(function() {

	let Modification = function() {
		this.damage = null;
		this.defense = null;
		this.evasion = null;
		this.name = "none"
	}

	let Sword = function() {
		this.damage = 50;
		this.defense = null;
		this.evasion = null;
		this.name = "Sword"
	}

	Sword.prototype = new Modification();

	let HandCannon = function() {
		this.damage = 35;
		this.defense = null;
	  this.evasion = null;
		this.name = "Handcannon";
	}

	HandCannon.prototype = new Modification();

	let Cloak = function() {
		this.damage = null;
		this.defense = 25;
		this.evasion = 50;
		this.name = "Cloak";
	}

	Cloak.prototype = new Modification();

	let Shield = function() {
		this.damage = -25;
		this.defense = 150;
		this.evasion = null;
		this.name = "Shield";
	}

	Shield.prototype = new Modification();

	let Eyes = function() {
		this.damage = 35;
		this.evasion = 50;
		this.defense = null;
		this.name = "Eye Lasers";
	}

	Eyes.prototype = new Modification();
})