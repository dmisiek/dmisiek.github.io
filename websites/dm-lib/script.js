

/* element in progress
var dmNavbar1Ham = document.getElementById("dm-navbar1Ham");
dmNavbar1Ham.addEventListener("click", ()=>{
    document.getElementById("dm-navbar1MobileLinksDiv").classList.toggle("dm-transformX0");
}) */

var dmExpandMenuArrowImg = document.getElementById("dm-expandMenuArrowImg");
var dmExpandMenuContent = document.getElementById("dm-expandMenuContent");
dmExpandMenuArrowImg.addEventListener("click", ()=>{
    dmExpandMenuContent.classList.toggle("dm-transformX0");
    dmExpandMenuArrowImg.classList.toggle("dm-transformR180")
})
