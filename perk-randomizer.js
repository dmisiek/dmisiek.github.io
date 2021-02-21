/* Perk-randomiser @onclick button */
function drawPerks(){
	var checkedCharacters = 0;
	console.log("==== INFO ====");
	for (var i = 0; i < 46; i++)
	{
		if (trueFalse[i] == true)
			checkedCharacters = checkedCharacters + 1;
	}
	console.log("Zaznaczone postacie: " + checkedCharacters);
	numberPerks = checkedCharacters * 3;
	console.log("Liczba perkow do losowania: " + numberPerks);
	perks = new Array(numberPerks);
	var temp = 0; 
	for (var i = 0; i < 46; i++)
	{
		if(trueFalse[i] == true)
		{	
			let x = characters[i] + ".perk1";
			perks[temp] = eval(x);
			x = characters[i] + ".perk2";
			perks[temp+1] = eval(x);
			x = characters[i] + ".perk3";
			perks[temp+2] = eval(x);
			temp+=3;
		}
	}
	for(var i = 0; i < numberPerks; i++)
	{
		console.log(i + ". " + perks[i]);
	}

	console.log("==== WYLOSOWANE PERKI ====");
	var drawedPerks = new Array(4);
	if(checkedCharacters > 1){
		for(var i = 0; i < 4;)
		{	
			random = Math.floor(Math.random() * perks.length);
			if(drawedPerks[0] != perks[random] && drawedPerks[1] != perks[random] && 
				drawedPerks[2] != perks[random] && drawedPerks[3] != perks[random])
				{
					drawedPerks[i] = perks[random];
					i++
				}
			console.log(perks[random]);
		}
		perksWindow(drawedPerks[0], drawedPerks[1], drawedPerks[2], drawedPerks[3]);
	}
	else if(checkedCharacters == 1){
		perksWindow(perks[0], perks[1], perks[2], 0);
	}
	else{
		alert("You have to chose one character at least!");
	}
}

/* Functions to make code shorter :P */
function showCheckboxes(){
	console.log( "Otwarto: " + page );
	if(page == "survs.html"){
		for(var i=0; i<24; i++){
			let x = characters[i] + ".createCheckbox()";
			eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<characters.length; i++){
		let x = characters[i] + ".createCheckbox()";
		eval(x);
	}
	}
} 
function usingCheckingCheckbox(){
	console.log("=== CHECKED CHECKBOX ===")
	if(page == "survs.html"){
		for(var i=0; i<24; i++){
		let x = characters[i] + ".checkingCheckbox()";
		eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<characters.length; i++){
			let x = characters[i] + ".checkingCheckbox()";
			eval(x);
		}
	}
}

function selectAll(){
	if(page == "survs.html"){
		for(var i=0; i<24; i++){
			let x = characters[i] + ".selectingSurv()";
			eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<characters.length; i++){
			let x = characters[i] + ".selectingSurv()";
			eval(x);
		}
	}
	button = document.getElementById("allButton");
	button.innerHTML = "DESELECT ALL";
	button.setAttribute("onclick", "deselectAll()");
}
function deselectAll(){
	if(page == "survs.html"){
		for(var i=0; i<24; i++){
		let x = characters[i] + ".deselectingSurv()";
		eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<characters.length; i++){
			let x = characters[i] + ".deselectingSurv()";
			eval(x);
			}
	}
	button = document.getElementById("allButton");
	button.innerHTML = "SELECT ALL";
	button.setAttribute("onclick", "selectAll()");
}
function selectBasicSurvs(){
	if(page == "survs.html"){
		for(var i=0; i<7; i++){
			let x = characters[i] + ".selectingSurv()";
			eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<29; i++){
			let x = characters[i] + ".selectingSurv()";
			eval(x);
		}
	}
	button = document.getElementById("basicButton");
	button.innerHTML = "DESELECT BASIC SURVS";
	button.setAttribute("onclick", "deselectBasicSurvs()");
}
function deselectBasicSurvs(){
	if(page == "survs.html"){
		for(var i=0; i<7; i++){
			let x = characters[i] + ".deselectingSurv()";
			eval(x);
		}
	}
	if(page == "killers.html"){
		for(var i=24; i<29; i++){
			let x = characters[i] + ".deselectingSurv()";
			eval(x);
		}
	}
	button = document.getElementById("basicButton");
	button.innerHTML = "SELECT BASIC SURV";
	button.setAttribute("onclick", "selectBasicSurvs()");
}

/* creating Perk Window */
function perksWindow(perk1, perk2, perk3, perk4){
	/* Changing 'draw button' to 'close button'  */
	drawButton = document.getElementById("drawButton");
	drawButton.setAttribute("onclick", "removingPerkWindow()");
	drawButton.innerHTML = "CLOSE BUILD";
	document.getElementById("darker2").style.display = "block";
	
	document.getElementById("perkWindow").style.height = "400px";
	document.getElementById("perkWindow").style.display = "block";

	img1 = document.getElementById("perk1");
	img2 = document.getElementById("perk2");
	img3 = document.getElementById("perk3");
	img4 = document.getElementById("perk4");
	img4.style.display="block"
	img1.setAttribute("src","perks/"+perk1+".png");
	img1.setAttribute("class", "perk-image");
	img2.setAttribute("src","perks/"+perk2+".png");
	img2.setAttribute("class", "perk-image");
	img3.setAttribute("src","perks/"+perk3+".png");
	img3.setAttribute("class", "perk-image");
	if(per4 == 0){
		img4.style.display="none";
	}
	if(perk4 != 0){
		img4.setAttribute("src","perks/"+perk4+".png");
		img4.setAttribute("class", "perk-image");
	}
}
function removingPerkWindow(){
	document.getElementById("perkWindow").style.height = "0px"
	document.getElementById("perkWindow").style.overflowX = "hidden"
	document.getElementById("darker2").style.display = "none";
	drawButton.setAttribute("onclick", "usingCheckingCheckbox(); drawPerks()");
	drawButton.innerHTML = "DRAW AGAIN";
}