let loginButton2 = document.getElementById("main-form");


loginButton2.addEventListener("submit", function(event){
    event.preventDefault();
    window.open("logout-page.html", "_self");
});