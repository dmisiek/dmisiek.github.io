/* Character-info */
function characterInfo(name, perk1, perk2, perk3, lastname, id, opis) {
	this.name = name;
	this.lastname = lastname;
	this.id = id;
	this.perk1 = perk1;
	this.perk2 = perk2;
	this.perk3 = perk3;
	this.opis = opis;
	this.okno = document.getElementById("okno");
	this.wypisz = function(){
		console.log(this.name + ' = ' + this.perk1 + ' ' + this.perk2 + ' ' + this.perk3);
	}
	this.createCheckbox = function(){
		list = document.getElementById("charcterList");
		li = document.createElement("LI");
		list.appendChild(li);

		let createdCheckbox = document.createElement("INPUT");
		createdCheckbox.setAttribute("type", "checkbox");
		createdCheckbox.setAttribute("id", this.lastname+"Checkbox");
		createdCheckbox.setAttribute("class", "checkWithLabel")
		let createdLabel = document.createElement("LABEL");
		createdLabel.setAttribute("class", "randomiserCheckbox");
		createdLabel.setAttribute("for", this.lastname+"Checkbox");
		createdLabel.setAttribute("ondblclick", "showPerkMenu('"+ lastname +"')");
		createdLabel.style.backgroundImage = "url(characters/"+this.lastname+".png)";
		li.appendChild(createdCheckbox);
		li.appendChild(createdLabel);
	}
	this.selectingSurv = function(){
		document.getElementById(this.lastname+"Checkbox").checked = true;
	}
	this.deselectingSurv= function(){
		document.getElementById(this.lastname+"Checkbox").checked = false;
	}
	this.checkingCheckbox = function(){
		let createdCheckbox = document.getElementById(this.lastname+"Checkbox").checked;
		trueFalse[this.id] = createdCheckbox;
		console.log(this.lastname + ": " + createdCheckbox);
	}
}

/* Characters and variables */
/* Survs */
var dwight = new characterInfo("Dwight Fairfield", "bond", "leader", "proveThyself", "dwight", 0, "TESTOWY OPIS");
var meg = new characterInfo("Meg Thomas", "quickAndQuiet", "sprintBurst", "adrenaline", "meg", 1);
var claudette = new characterInfo("Claudette Morel", "empathy", "botanyKnowledge", "selfCare", "claudette", 2);
var jake = new characterInfo("Jake Park", "ironWill", "saboteur", "calmSpirit", "jake", 3);
var nea = new characterInfo("Nea Karlsson", "balancedLanding", "urbanEvasion", "streetwise", "nea", 4)
var bill = new characterInfo("William 'Bill' Overbeck", "leftBehind", "borrowedTime", "unbreakable","bill", 5)
var david = new characterInfo("David King","wereGonnaLiveForever", "deadHard", "noMither","david", 6)
var laurie = new characterInfo("Laurie Stronde", "soleSurvivor", "objectOfObsession", "decisiveStrike","laurie", 7)
var ace = new characterInfo("Ace Visconti", "open-Handed", "upTheAnte", "aceInTheHole","ace", 8)
var feng = new characterInfo("Feng Min", "technician", "lithe", "alert","feng", 9)
var quentin = new characterInfo("Quentin Smith", "wakeUp", "pharmacy", "vigil","quentin", 10)
var tapp = new characterInfo("David Tapp", "tenacity", "detectivesHunch","stakeOut", "tapp", 11)
var kate = new characterInfo("Kate Denson", "danceWithMe", "windowsOfOpportunity", "boilOver", "kate", 12)
var adam = new characterInfo("Adam Francis", "diversion", "deliverance", "autodidact","adam", 13)
var jeff = new characterInfo("Jeffrey 'Jeff' Johansen", "breakdown", "aftercare", "distortion", "jeff", 14)
var jane = new characterInfo("Jane Romero", "solidarity", "poised", "headOn","jane",15)
var ash = new characterInfo("Ash J. Williams", "flip-Flop", "buckleUp", "mettleOfMan","ash",16)
var nancy = new characterInfo("Nancy Wheeler", "betterTogether", "fixated", "innerStrength","nancy",17)
var steve = new characterInfo("Steve Harrington", "babysitter", "camaraderie", "secondWind","steve",18)
var yui = new characterInfo("Yui Kimura", "luckyBreak", "anyMeansNecessary", "breakout","yui",19)
var zarina = new characterInfo("Zarina Kassir", "offTheRecord", "redHerring", "forThePeople","zarina",20)
var cheryl = new characterInfo("Cheryl Mason", "soulGuard", "bloodPact", "repressedAlliance","cheryl",21)
var felix = new characterInfo("Felix Richter", "visionary", "desperateMeasures", "builtToLast","felix",22)
var elodie = new characterInfo("Elodie Rakoto", "appraisal", "deception", "powerStruggle","elodie", 23)
var characters = ["dwight", "meg", "claudette", "jake", "nea","bill", "david","laurie", "ace",
"feng", "quentin", "tapp", "kate", "adam", "jeff", "jane", "ash", "nancy", "steve",
"yui", "zarina", "cheryl", "felix", "elodie", "trapper", "wraith", "hillbilly", "nurse", "huntress", "myers", "hag", "doctor", "buba", "freddy", "pig", "clown",
"spirit", "legion", "plaque", "ghostface", "demogorgon", "oni", "deathslinger", "pyramid", "blight", "twins"]

/* Killers */
var trapper = new characterInfo("The Trapper", "unnervingPresence", "brutalStrength", "agitation", "trapper", 24);
var wraith = new characterInfo("The Wraith", "predator", "bloodhound", "shadowborn", "wraith", 25);
var hillbilly = new characterInfo("The Hillbilly", "enduring", "lightborn", "tinkerer", "hillbilly", 26);
var nurse = new characterInfo("The Nurse", "stridor", "thanatophobia", "aNursesCalling", "nurse", 27);
var huntress = new characterInfo("The Huntress", "beastOfPrey", "territorialImperative", "hexHuntressLullaby", "huntress", 28);
var myers = new characterInfo("Michael Myers", "saveTheBestForLast", "playWithYourFood", "dyingLight", "myers", 29);
var hag = new characterInfo("The Hag", "hexTheThirdSeal", "hexRuin", "hexDevourHope","hag", 30);
var doctor = new characterInfo("The Doctor", "overwhelmingPresence", "monitorAbuse", "overcharge", "doctor", 31);
var buba = new characterInfo("The Cannibal", "knockOut", "barbecueChilli", "franklinsDemise", "buba", 32);
var freddy = new characterInfo("Freddy Krueger", "fireUp", "rememberMe", "bloodWarden", "freddy", 33);
var pig = new characterInfo("The Pig", "hangmansTrick", "surveillance", "makeYourChoice", "pig", 34);
var clown = new characterInfo("The Clown", "bamboozle", "coulrophobia", "popGoesTheWeasel", "clown", 35);
var spirit = new characterInfo("The spirit", "spiritFury", "hexHauntedGround", "rancor", "spirit", 36);
var legion = new characterInfo("The Legion", "discordance", "madGrit", "ironMaiden", "legion", 37);
var plaque = new characterInfo("The Plaque","corruptIntervention", "infectiousFright", "darkDevotion", "plaque", 38);
var ghostface = new characterInfo("The Ghost Face", "imAllEars", "thrillingTremors", "furtiveChase", "ghostface", 39);
var demogorgon = new characterInfo("The Demogorgon", "surge", "mindBreaker", "cruelLimits", "demogorgon", 40);
var oni = new characterInfo("The Oni", "zanshinTactics","bloodEcho", "nemesis", "oni", 41);
var deathslinger = new characterInfo("The Deathslinger", "gearhead", "deadMansSwitch", "hexRetribution", "deathslinger", 42);
var pyramid = new characterInfo("The Executioner", "forcedPenance", "trailOfTorment", "deathbound", "pyramid", 43);
var blight = new characterInfo("The Blight", "dragonsGrip", "hexBloodFavour", "hexUndying", "blight", 44);
var twins = new characterInfo("The Twins", "hoarder", "oppression", "coupDeGrace", "twins", 45);

trueFalse = new Array(46)
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

function openNav() {
	if(window.innerWidth > 960){
		document.getElementById("nav").style.width = "250px";
	}
	else{
		document.getElementById("nav").style.width = "100%";
	}
	document.getElementById("darker").style.display = "block";
  }
  
function closeNav() {
	document.getElementById("nav").style.width = "0";
	document.getElementById("darker").style.display = "none";
}

function showHoverBar(a){
	x="hoverBar"+a
	document.getElementById(x).style.width = "85%";
}
function hideHoverBar(){
	document.getElementById(x).style.width = "0px"
}

function showPerkMenu(name){
	var perk1 = name+".perk1";
	var perk2 = name+".perk2";
	var perk3 = name+".perk3";
	var fullname = name+".name";
	console.log(name, perk1, perk2, perk3);
	if(window.innerWidth > 960){
		document.getElementById("perkMenu").style.width = "500px";
	}
	else{
		document.getElementById("perkMenu").style.width = "100%";
	}
	document.getElementById("perk11").setAttribute("src", "perks/"+eval(perk1)+".png")
	document.getElementById("perk21").setAttribute("src", "perks/"+eval(perk2)+".png")
	document.getElementById("perk31").setAttribute("src", "perks/"+eval(perk3)+".png")
	document.getElementById("characterName").innerHTML = eval(fullname);
	document.getElementById("darker3").style.display = "block";
	
}
function hidePerkMenu(){
	document.getElementById("perkMenu").style.width = "0px";
	document.getElementById("darker3").style.display = "none";
}
function showHelpButton(){
	document.getElementById("pHelpIcon").style.display = "block";
}
function hideHelpButton(){
	document.getElementById("pHelpIcon").style.display = "none";
}
