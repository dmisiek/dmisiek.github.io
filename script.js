const timelineDown = document.getElementById("timelineDown");
const timelineUp = document.getElementById("timelineUp");
const timelineLeft = document.getElementById("timelineLeft");
const timelineRight = document.getElementById("timelineRight");

const timelineArticle0 = document.getElementById("timelineArticle0");
const timelineArticle1 = document.getElementById("timelineArticle1");
const timelineArticle2 = document.getElementById("timelineArticle2");
const timelineArticle3 = document.getElementById("timelineArticle3");
const timelineArticle4 = document.getElementById("timelineArticle4");
const timelineArticle5 = document.getElementById("timelineArticle5");
const timelineArticle6 = document.getElementById("timelineArticle6");
/*
const timelineProject0 = document.getElementById("timelineProject0");
const timelineProject1 = document.getElementById("timelineProject1");
const timelineProject2 = document.getElementById("timelineProject2"); 
*/

const category0 = document.getElementById("category0");
const category1 = document.getElementById("category1");
const category2 = document.getElementById("category2");

const decoration = document.getElementById("timelineDecoration");

timelineDown.addEventListener("click", () => {
    for(let i = 0; i<7; i++){
        var currentY = eval("window.getComputedStyle(timelineArticle"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newY = parseInt(currentY[5]) + 220;
        console.log("CURRENT Y: " + currentY[5] + "; NEW Y: " + newY);
        if(newY < 660){
            eval("timelineArticle" + i + ".style.transform = 'translateY("+newY+"px)';");
        }
        else{
            eval("timelineArticle" + i + ".style.transform = 'translateY(-440px)';");
        }
    }
    /*
    for(let i = 0; i<3; i++){
        var currentY = eval("window.getComputedStyle(timelineProject"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newY = parseInt(currentY[5]) + 220;
        console.log("CURRENT Y: " + currentY[5] + "; NEW Y: " + newY);
        eval("timelineProject" + i + ".style.transform = 'translateY("+newY+"px)';");
    }
    */

})
timelineUp.addEventListener("click", () => {
    for(let i = 0; i<7; i++){
        var currentY = eval("window.getComputedStyle(timelineArticle"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newY = parseInt(currentY[5]) - 220;
        console.log("CURRENT Y: " + currentY[5] + "; NEW Y: " + newY);
        if(newY > -660){
            eval("timelineArticle" + i + ".style.transform = 'translateY("+newY+"px)';");
        }
        else{
            eval("timelineArticle" + i + ".style.transform = 'translateY(440px)';");
        }
    }
    /*
    for(let i = 0; i<2; i++){
        var currentY = eval("window.getComputedStyle(timelineProject"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newY = parseInt(currentY[5]) - 220;
        console.log("CURRENT Y: " + currentY[5] + "; NEW Y: " + newY);
        eval("timelineProject" + i + ".style.transform = 'translateY("+newY+"px)';");
    }
    */
})

timelineRight.addEventListener("click", () => {
    for(let i = 0; i<3; i++){
        var currentX = eval("window.getComputedStyle(category"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newX = parseInt(currentX[4]) - 500;
        console.log("CATEGORY: " + i+ ", CURRENT X: " + currentX[4] + "; NEW X: " + newX);
        if(newX <= -900){
            eval("category" + i + ".style.transition = '0s';");
            eval("category" + i + ".style.transform = 'translateX(500px)';");
            
        }
        else{
            eval("category" + i + ".style.transition = '0.5s';");
            eval("category" + i + ".style.transform = 'translateX("+newX+"px)';");
        }

    }
})
timelineLeft.addEventListener("click", () => {
    for(let i = 0; i<3; i++){
        var currentX = eval("window.getComputedStyle(category"+i+").getPropertyValue('transform').match(/(-?[0-9\.]+)/g)");
        var newX = parseInt(currentX[4]) + 500;
        console.log("CURRENT X: " + currentX[4] + "; NEW X: " + newX);
        if(newX >= 900){
            eval("category" + i + ".style.transition = '0s';");
            eval("category" + i + ".style.transform = 'translateX(-500px)';");
        }
        else{
            eval("category" + i + ".style.transition = '0.5s';");
            eval("category" + i + ".style.transform = 'translateX("+newX+"px)';");
        }
    }
})


const contactBtn = document.getElementById("contactBtn");
const contactForm = document.getElementById("contactForm");
var viewedContact = 0;

contactBtn.addEventListener("click", ()=>{
    if(viewedContact == 0){
        contactForm.style.transform = "translateY(0)";
        contactBtn.style.transform = "rotate(0deg)";
        viewedContact = 1;
        return 0;
    }
    if(viewedContact == 1){        
        if(window.innerWidth > 1920){
            contactForm.style.transform = "translateY(500px)";
        }
        else{
            contactForm.style.transform = "translateY(300px)";
        }
        contactBtn.style.transform = "rotate(180deg)";
        viewedContact = 0;
    }   

})
