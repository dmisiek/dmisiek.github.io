window.onload = function(){
    var powerSwitch = document.getElementById("powerSwitch");
    var textP = document.getElementsByTagName("p");
    var textH1 = document.getElementsByTagName("h1");
    var buttons = document.getElementsByTagName("a");
    var body = document.querySelector("body");
    var deskImg = document.getElementById("desk-img");
    var bulbImg = document.getElementById("bulb-img");
    var contactImg = document.getElementById("contact-img");
    var sendBtn = document.getElementById("send-btn");

    console.log(textP, textH1);

    var on = false; /* FALSE - DARK | TRUE - BRIGHT */

    powerSwitch.addEventListener("click", ()=>{
        if(on == false){
            body.style.backgroundColor = "#222";
            for(var i=0; i<textP.length;i++){
                textP[i].classList.add("dark-theme");
            }
            for(var i=0; i<textH1.length;i++){
                textH1[i].classList.add("dark-theme");
            }        
            for(var i=0; i<buttons.length;i++){
                buttons[i].classList.add("dark-theme");
            }
            deskImg.setAttribute("src", "images/lights-dark.png");
            bulbImg.setAttribute("src", "images/bulb-dark.png");
            contactImg.setAttribute("src", "images/contact-dark.png");
            sendBtn.classList.add("dark-theme");
            on = true;
            return 0;
        }
        if(on == true){
            body.style.backgroundColor = "#fff";
            for(var i=0; i<textP.length;i++){
                textP[i].classList.remove("dark-theme");
            }
            for(var i=0; i<textH1.length;i++){
                textH1[i].classList.remove("dark-theme");
            }   
            for(var i=0; i<buttons.length;i++){
                buttons[i].classList.remove("dark-theme");
            }    
            deskImg.setAttribute("src", "images/lights-bright.png");
            bulbImg.setAttribute("src", "images/bulb-bright.png");
            contactImg.setAttribute("src", "images/contact-bright.png");
            sendBtn.classList.remove("dark-theme");
            on = false;
            return 0;
        }

    })
};

