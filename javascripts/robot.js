"use strict"
$(document).ready(function() {
  let Robot = function() {
  	this.weapons = 150;
  	this.health = Math.floor(Math.random() * 150 + 200);
  	this.type = null;
  }


  let Mech = function() {
  	this.type = "Mech";
  	this.health = this.health + 100;
  }

  Mech.prototype = new Robot();

  let Cyborg = function() {
  	this.type = "human with robot parts";
  	this.health = this.health + 5;
  }

  Cyborg.prototype = new Robot();

  let Android = function() {
  	this.type = "Android";
  	this.health = this.health + 60;
  }

  Android.prototype = new Robot();

})