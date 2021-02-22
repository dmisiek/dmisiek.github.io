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
var dwight = new characterInfo("Dwight Fairfield", "bond", "leader", "proveThyself", "dwight", 0, "Dwight Fairfield is a nervous Leader, able to locate his allies and increase their effectiveness. His personal Perks, Bond, Prove Thyself and Leader , allow him to get in proximity of other Survivors and provide bonuses to their actions as well as his own.He is skilled at finding others and working as a group. His Perks help him and others by keeping them together and alive.");
var meg = new characterInfo("Meg Thomas", "quickAndQuiet", "sprintBurst", "adrenaline", "meg", 1, "Meg Thomas is an energetic Athlete, able to outrun most Killers.Her personal Perks, Quick & Quiet, Sprint Burst and Adrenaline, give her advantages to escape chases and put distance between herself and the Killer. She is all about escaping and avoiding bad situations. She can greatly surprise the Killer with her speed, when she is in a bad situation.");
var claudette = new characterInfo("Claudette Morel", "empathy", "botanyKnowledge", "selfCare", "claudette", 2, "Claudette Morel is a studious Botanist, able to boost her team's survivability as well as her own. Her personal Perks, Empathy, Botany Knowledge and Self-Care, allow her to spot injured Survivors and heal both herself and her team more effectively. She uses her time out of the fog to collect potent plants found around the Campfire to create tinctures that can stop bleeding.");
var jake = new characterInfo("Jake Park", "ironWill", "saboteur", "calmSpirit", "jake", 3, "Jake Park is a solitary Survivalist, able to hold his own in most situations. His personal Perks, Iron Will IconPerks, Calm Spirit and Saboteur, allow him to more effectively move about the environment and survive while injured. He is all about keeping calm as you face true terror. He is one with nature and used to surviving by any makeshift way possible.");
var nea = new characterInfo("Nea Karlsson", "balancedLanding", "urbanEvasion", "streetwise", "nea", 4, "Nea Karlsson is an Urban Artist, able to easily escape and hide. Her personal Perks, Balanced Landing IconPerks balancedLanding.png, Urban Evasion IconPerks urbanEvasion.png, and Streetwise IconPerks streetwise.png, make her well suited to completing Objectives and rapid evasion. She is focused around movement - making her faster, more balanced, and better at evading the Killer.")
var bill = new characterInfo("William 'Bill' Overbeck", "leftBehind", "borrowedTime", "unbreakable","bill", 5, "Bill Overbeck is an old Soldier, accustomed to dealing with critical situations. His personal Perks, Left Behind, Borrowed and Unbreakable, make him more powerful in dire moments. He is tough as nails and knows how to survive just about anything. He'll do whatever it takes to help others live to see another day and he's not afraid to take one for the team.")
var david = new characterInfo("David King","wereGonnaLiveForever", "deadHard", "noMither","david", 6, "David King is a rugged Scrapper, rewarding high-risk play. His personal Perks, We're Gonna Live Forever, Dead Hard and No Mither, reward an aggressive, confrontational play style, but leave him vulnerable. His Perks are a result of his years playing rugby and stem from his strong physique and his need for Adrenaline. But being fast isn't everything, he's - sometimes - also a team player. But that side is seldom seen.")
var laurie = new characterInfo("Laurie Stronde", "soleSurvivor", "objectOfObsession", "decisiveStrike","laurie", 7, "Laurie Strode is a determined Survivor, prepared to weather any challenge. Her personal Perks, Sole Survivor, Object of Obsession and Decisive Strike, grant her powerful survival abilities at the cost of leaving her exposed. Her Perks are tied to the Killer's Obsession and surviving - no matter what.")
var ace = new characterInfo("Ace Visconti", "open-Handed", "upTheAnte", "aceInTheHole","ace", 8, "Ace Visconti is a lucky Gambler, improving the odds of the entire team. His personal Perks, Open-Handed, Up the Ante and Ace in the Hole, boost the Luck of all Survivors and help with Chest searches. He is one lucky bastard or at the very least he believes he is. Therefore, he's always ready to make a gamble. Often, he's right.")
var feng = new characterInfo("Feng Min", "technician", "lithe", "alert","feng", 9, "Feng Min is an objective-focused competitor who can quickly adapt her strategy to meet a vast range of challenging situations. Her personal Perks, Technician, Lithe and Alert, help her with repairing Generators and locating the Killer. She can silently work on Generators and thus can notice the Killer long before they notice her. She will be long gone before the Killer can do anything.")
var quentin = new characterInfo("Quentin Smith", "wakeUp", "pharmacy", "vigil","quentin", 10, "Quentin Smith is a resolute Dreamwalker, increasing the survivability and recovery of his team. His personal Perks, Pharmacy, Vigil, and Wake Up!, help Survivors locate Exit Gates and recover more easily. His Perks focus on survival and helping others - providing a kind of support in this nightmare. ")
var tapp = new characterInfo("David Tapp", "tenacity", "detectivesHunch","stakeOut", "tapp", 11, "David Tapp is an obsessed Detective, able to locate and complete Objectives faster. His personal Perks, Tenacity, Detective's Hunch and Stake Out, make him objective-focused and able to rapidly recover. His Perks are all about determination and not giving up. You are dead set on reaching your goal and survive no matter what.")
var kate = new characterInfo("Kate Denson", "danceWithMe", "windowsOfOpportunity", "boilOver", "kate", 12, "Kate Denson is a hopeful songbird, able to make the most of her surroundings. Her personal Perks, Dance With Me, Windows of Opportunity and Boil Over, grant her the foresight and feistiness to escape even the most dire situations.")
var adam = new characterInfo("Adam Francis", "diversion", "deliverance", "autodidact","adam", 13, "Adam Francis is a resourceful Teacher, able to adapt to new circumstances and develop strategies accordingly. His personal Perks, Diversion, Deliverance and Autodidact, help him to distract the Killer, survive desperate situations and become more skilled as the trial continues.")
var jeff = new characterInfo("Jeffrey 'Jeff' Johansen", "breakdown", "aftercare", "distortion", "jeff", 14, "Jeff Johansen is a quiet artist with a heart of gold, standing steadfast against impossible odds. He has a dark past but led a quiet, simple life until his father passed, leaving things to sort out. His personal Perks, Breakdown, Aftercare and Distortion, give him observational advantages and help to hide his presence from the Killer.")
var jane = new characterInfo("Jane Romero", "solidarity", "poised", "headOn","jane",15, "Jane Romero is an influential celebrity, going against the grain to tackle challenges head on. Her personal Perks, Solidarity, Poised and Head On, give her a flexible set of skills that allow her to help others, as well as herself, to escape dangerous situations.")
var ash = new characterInfo("Ash J. Williams", "flip-Flop", "buckleUp", "mettleOfMan","ash",16, "Ash Williams is an alone wolf, cocky and headstrong; a man built for survival. His personal Perks, Flip-Flop, Buckle Up and Mettle of Man, give him additional resilience to pain and hardship, as well as the ability to help his friends out of sticky situations.")
var nancy = new characterInfo("Nancy Wheeler", "betterTogether", "fixated", "innerStrength","nancy",17, "Nancy Wheeler is an aspiring journalist, able to make acute observations and gain insights that others may miss. Her personal Perks, Better Together, Fixated and Inner Strength, give her the information and courage she needs to tackle unexpected challenges.")
var steve = new characterInfo("Steve Harrington", "babysitter", "camaraderie", "secondWind","steve",18, "Steve Harrington is a former jock, able to protect and support his fellow Survivors while providing his own brand of humour. His personal Perks, Babysitter IconPerks, Camaraderie and Second Wind, enable him to distract Killers, tolerate pain, and get back into the fight.")
var yui = new characterInfo("Yui Kimura", "luckyBreak", "anyMeansNecessary", "breakout","yui",19, "Yui Kimura is a hardened street racer, able to gain advantages for her and her fellow Survivors in challenging situations. Her personal Perks, Lucky Break IconPerks, Any Means Necessary IconPerks and Breakout, enable her to cover her blood trails, reset dropped Pallets, and assist helpless Survivors.")
var zarina = new characterInfo("Zarina Kassir", "offTheRecord", "redHerring", "forThePeople","zarina",20, "Zarina Kassir is a plucky documentarian, able to use her street smarts to avoid detection and greatly assist other Survivors. Her personal Perks, Off the Record, Red Herring and For the People, help her remain hidden in the face of danger, create distractions, and quickly heal others by forgoing her own safety.")
var cheryl = new characterInfo("Cheryl Mason", "soulGuard", "bloodPact", "repressedAlliance","cheryl",21, "Cheryl Mason is a young Veteran of Terror, emboldening both herself and her team. Her personal Perks, Soul Guard, Blood Pact and Repressed Alliance, allow her to survive through immense hardship, stay in contact with team members, and plan objectives.")
var felix = new characterInfo("Felix Richter", "visionary", "desperateMeasures", "builtToLast","felix",22, "Felix Richter is a visionary architect, able to use his relentless determination to form a plan and help other Survivors. His personal Perks, Visionary, Desperate Measures and Built to Last, help him reveal Generators, rescue Survivors and get the most from his tools.")
var elodie = new characterInfo("Elodie Rakoto", "appraisal", "deception", "powerStruggle","elodie", 23, "Élodie Rakoto is an occult investigator, able to use cunning tricks and stubborn resolve to keep herself alive. Her personal Perks, Appraisal, Deception and Power Struggle, allow her to interact with objects in new ways, all while having a backup plan to escape Killers.")
var characters = ["dwight", "meg", "claudette", "jake", "nea","bill", "david","laurie", "ace","feng", "quentin", "tapp", "kate", "adam", "jeff", "jane", "ash", "nancy", "steve","yui", "zarina", "cheryl", "felix", "elodie", "trapper", "wraith", "hillbilly", "nurse", "huntress", "myers", "hag", "doctor", "buba", "freddy", "pig", "clown","spirit", "legion", "plaque", "ghostface", "demogorgon", "oni", "deathslinger", "pyramid", "blight", "twins"]

/* Killers */
var trapper = new characterInfo("The Trapper", "unnervingPresence", "brutalStrength", "agitation", "trapper", 24, "The Trapper is an area-control Killer, able to apply pressure across the Map by placing deadly Bear Traps for Survivors to step into. His personal Perks, Unnerving Presence, Brutal Strength and Agitation, allow him to chase and carry Survivors more effectively. He is focused on physical attributes and making use of his strength and the Survivors' fear.");
var wraith = new characterInfo("The Wraith", "predator", "bloodhound", "shadowborn", "wraith", 25);
var hillbilly = new characterInfo("The Hillbilly", "enduring", "lightborn", "tinkerer", "hillbilly", 26, "The Hillbilly is a high-mobility Killer, able to cover large distances in a short amount of time and instantly down Survivors using his Chainsaw. His personal Perks, Enduring, Lightborn and Tinkerer, allow him to enhance his Power and make him harder to lose during chases. He is about persistence and resilience. This will make it harder for Survivors to foil him.");
var nurse = new characterInfo("The Nurse", "stridor", "thanatophobia", "aNursesCalling", "nurse", 27, "The Nurse is a warping Killer, able to blink through obstacles and quickly close gaps with her Power. Her personal Perks, Stridor, Thanatophobia and A Nurse's Calling, allow her to decrease Survivor abilities and track them when they are injured. She is focused on spotting and tracking, making it harder for Survivors to hide.");
var huntress = new characterInfo("The Huntress", "beastOfPrey", "territorialImperative", "hexHuntressLullaby", "huntress", 28, "The Huntress is a ranged Killer, able to throw Hunting Hatchets at Survivors to injure them from a distance. Her personal Perks, Beast of Prey, Territorial Imperative and Hex: Huntress Lullaby, allow her to apply pressure through better Map awareness and enhanced chasing abilities. Her Perks revolve around the hunt of the prey, to track and find so that she can get close enough to make the kill.");
var myers = new characterInfo("The Shape", "saveTheBestForLast", "playWithYourFood", "dyingLight", "myers", 29, "The Shape is a haunting Killer, intent on monitoring Survivors from a distance to feed his Power. The more he stalks, the stronger and faster he becomes. His personal Perks, Save the Best for Last, Play with Your Food and Dying Light, select one Survivor to become his Obsession and will trigger deadly effects based on the Obsession Status. His Perks are focused around Obsessions, just like Michael Myers is obsessed with killing, the Killer picks a Survivor, and tags them as his Obsession.");
var hag = new characterInfo("The Hag", "hexTheThirdSeal", "hexRuin", "hexDevourHope","hag", 30, "The Hag is a cursed Killer, able to place Phantasm Traps and then teleport to them upon activation, using her Power. Her personal Perks, Hex: The Third Seal, Hex: Ruin and Hex: Devour Hope, apply crippling penalties to Survivors as long as the associated Totem remains uncleansed. Her Perks revolve around Hex Totems IconHelpLoading totem.png. They are focused on cursing the Survivors and sapping their abilities. The curse lasts until the Survivors manage to track the Hex Totem down and cleanse it.");
var doctor = new characterInfo("The Doctor", "overwhelmingPresence", "monitorAbuse", "overcharge", "doctor", 31, "The Doctor is a madness-inducing Killer, able to use his Power - Static Blast, incapacitating Survivors and causing them to hallucinate and scream in terror, revealing their position. His personal Perks, Overwhelming Presence, Monitor & Abuse and Overcharge, encourage chases, impact Survivors' ability to repair effectively and make him harder to detect when not in a Chase. His Perks are about hindering and creating problems for the Survivors. The sheer stature of The Doctor infuses fear and terror in those around him.");
var buba = new characterInfo("The Cannibal", "knockOut", "barbecueChilli", "franklinsDemise", "buba", 32, "The Cannibal is a chainsaw-wielding Killer, able to trigger a deadly frenzy using his Power, immediately downing anyone in its path. His personal Perks, Knock Out, Barbecue & Chilli and Franklin's Demise, make Survivors easier to locate while robbing them of their tools and abilities. His Perks revolve around the unknown. Nobody knows where anyone is, especially The Cannibal himself. You are not aware of his presence until his Chainsaw bursts through your spinal cord.");
var freddy = new characterInfo("The Nightmare", "fireUp", "rememberMe", "bloodWarden", "freddy", 33, "The Nightmare is a nightmare Killer, passively pulling Survivors into his Dream World where Survivors are vulnerable to his Dream Abilities. His Dream Projection ability allows him to quickly appear across the map and put pressure onto Survivors. His personal Perks, Fire Up, Remember Me and Blood Warden, improve his abilities over time and make him stronger as the trial reaches its climax. His Perks revolve around stopping Survivors from fleeing. They will make surviving a real pain for all, and managing to escape the Hunting Ground won't be easy.");
var pig = new characterInfo("The Pig", "hangmansTrick", "surveillance", "makeYourChoice", "pig", 34, "The Pig is a tormenting Killer, able to crouch into stealth mode, then ambush Survivors from a short distance. She can also apply Reverse Bear Traps to downed Survivors, forcing them to remove it before the timer runs out, triggering an instant death. Her personal Perks, Hangman's Trick, Surveillance and Make Your Choice, give her more Map control and expose altruistic Survivors. The focus of her Perks is on pain and torture. A Hook is not that easy to flee from and all Survivors will be seriously tested when it comes to Skill Checks.");
var clown = new characterInfo("The Clown", "bamboozle", "coulrophobia", "popGoesTheWeasel", "clown", 35, "The Clown is a strategic Killer, able to control and corral Survivors by throwing bottles of The Afterpiece Tonic to create clouds of noxious gas that cover large areas for a short amount of time. Survivors intoxicated by the gas are inflicted with impaired vision and movement speed, and give away their location by coughing loudly. His personal Perks, Bamboozle, Coulrophobia and Pop Goes the Weasel, provide vaulting advantages and negatively impact Survivor Healing speed and Repairs. He has a surprising agility for a man of his size, along with a terrifying appearance and the ability to sabotage the Survivor's efforts.");
var spirit = new characterInfo("The spirit", "spiritFury", "hexHauntedGround", "rancor", "spirit", 36, "The Spirit is a phase-walking Killer, able to catch Survivors off-guard with her traversal Power, Yamaoka's Haunting. Her Power allows her to teleport from one place to another without being seen. Her personal Perks, Spirit Fury, Hex: Haunted Ground and Rancor, give her tools to observe and bait Survivors, and deal with obstacles directly in her path. She inherited incredible fury from her ancestors. The wrath that flows through her veins is her legacy. The terrible pain she suffered set it off. Swift and lethal, The Spirit exacts her revenge endlessly.");
var legion = new characterInfo("The Legion", "discordance", "madGrit", "ironMaiden", "legion", 37, "The Legion is a band of merciless Killers, able to rush down helpless Survivors with their power, Feral Frenzy. Attacks made during their frenzy inflict lingering internal damage, downing any Survivors that are not quick enough to react. Their personal Perks, Discordance, Mad Grit and Iron Maiden, give them the ability to locate their prey and attack savagely while transporting Survivors to the Hook.");
var plaque = new characterInfo("The Plaque","corruptIntervention", "infectiousFright", "darkDevotion", "plaque", 38, "The Plague is a devout Killer, able to infect Survivors from a short distance using her Power, Vile Purge. Survivors inflicted by this contamination risk becoming injured or broken, unless they find a way to cure themselves in a Pool of Devotion. Her personal Perks, Corrupt Intervention, Infectious Fright and Dark Devotion, give her the ability to hinder Survivor objectives, while simultaneously confusing and frightening those within her presence.");
var ghostface = new characterInfo("The Ghost Face", "imAllEars", "thrillingTremors", "furtiveChase", "ghostface", 39, "The Ghost Face is a creepy Killer, able to stalk his victims and sneak up silently using his Power, Night Shroud. Affected Survivors will find themselves vulnerable and oblivious to his presence and must use all of their perception and awareness to protect themselves from his approach. His personal Perks, I'm All Ears, Thrilling Tremors and Furtive Chase, give him the ability to locate Survivors, defend Generators, and make his Chases unpredictable.");
var demogorgon = new characterInfo("The Demogorgon", "surge", "mindBreaker", "cruelLimits", "demogorgon", 40, "The Demogorgon is an unidentified Killer, able to open multiple Portals and traverse between them to cover large distances. Using its Power, Of the Abyss, it can detect any Survivors within a close proximity to the Portals then unleash a leaping attack to inflict damage from a distance. Its personal Perks, Surge, Mindbreaker and Cruel Limits, impact the environment close to Generators and affect nearby Survivors in unexpected ways.");
var oni = new characterInfo("The Oni", "zanshinTactics","bloodEcho", "nemesis", "oni", 41, "The Oni is a monstrous Killer, able to absorb the blood energy of his injured foes, and then use that energy to transform into a brutal demon. Using his power, Yamaoka's Wrath, he can rush down Survivors at great speed and deal deadly strikes with his Kanabō. His personal Perks, Zanshin Tactics, Blood Echo and Nemesis, provide navigational information, punish injured Survivors, and gain advantages over those that interfere.");
var deathslinger = new characterInfo("The Deathslinger", "gearhead", "deadMansSwitch", "hexRetribution", "deathslinger", 42, "The Deathslinger is a vengeful Killer, able to spear Survivors from a distance and reel them in using his Power, The Redeemer. His personal Perks, Gearhead, Dead Man's Switch and Hex: Retribution IconPerks, allow him to locate and impede Survivor objectives, and punish Survivors for destroying Totems.");
var pyramid = new characterInfo("The Executioner", "forcedPenance", "trailOfTorment", "deathbound", "pyramid", 43, "The Executioner is a map-manipulation Killer, able to torment Survivors with the hazards he creates. Affected Survivors will be vulnerable to his special Hook, the Cage of Atonement and his special mori, Final Judgement. His personal Perks, Forced Penance, Trail of Torment and Deathbound, allows him to aggressively defend his prey while deceiving and tracking Survivors.");
var blight = new characterInfo("The Blight", "dragonsGrip", "hexBloodFavour", "hexUndying", "blight", 44, "The Blight is an unpredictable Killer, able to rush forward in a burst of speed and carom off obstacles to injure Survivors using his power, Blighted Corruption. His personal Perks, Dragon's Grip, Hex: Blood Favour and Hex: Undying, allow him to impose powerful effects on Generators, Totems and Pallets.");
var twins = new characterInfo("The Twins", "hoarder", "oppression", "coupDeGrace", "twins", 45, "The Twins are a cooperative pair of Killers, able to divide and hunt together using their Power, Blood Bond. Their personal Perks, Hoarder, Oppression and Coup de Grace.png allow them to monitor Survivors' actions, impede their progress, and hunt more effectively.");

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
	var lore = name+".opis"
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
	document.getElementById("characterPhoto").setAttribute("src", "characters2/"+name+".png")
	document.getElementById("lore").innerHTML = eval(lore);
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