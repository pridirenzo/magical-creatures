let headerButton1 = document.getElementById("header-button");
let headerButton2 = document.getElementById("header-button2");
let headerButton3 = document.getElementById("header-button3");
let infoBodyTitle = document.getElementById("info-title");
let githubUser = document.getElementById("git-user");


headerButton1.addEventListener("click", function(){
    window.open("login-page.html", "_self");
});

githubUser.addEventListener("click", ()=>{
    window.open("https://github.com/pridirenzo", "_blank");
});

headerButton1.addEventListener("mouseover", ()=>{
    headerButton1.style.cursor = "pointer";
});

headerButton2.addEventListener("mouseover", ()=>{
    headerButton2.style.cursor = "pointer";
});


headerButton2.addEventListener("click", ()=>{
    window.open("signin-page.html", "_self");
});

headerButton3.addEventListener("mouseover",()=>{
    headerButton3.style.cursor = "pointer";
});

