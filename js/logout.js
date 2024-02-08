const logoutButton = document.getElementById("header-button");

logoutButton.addEventListener("mouseover", function(){
    logoutButton.style.cursor = "pointer";
})

logoutButton.addEventListener("click", function(){
    window.open("index.html", "_self");
});