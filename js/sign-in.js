const formButton = document.getElementById("form-button1");
const mainForm = document.getElementById("main-form");
let formEmail = document.getElementById("email");
let formPassword = document.getElementById("password");


formButton.addEventListener("mouseover", ()=>{
    formButton.style.cursor = "pointer";
});


mainForm.addEventListener("submit", function(event){
    event.preventDefault(); // avoids page reload. obtain & validate information.
    localStorage.setItem("UserEmail", formEmail.value);
    localStorage.setItem("UserPassword", formPassword.value);
    console.log("----------Form Data----------");
    console.log("Email: " + localStorage.getItem("UserEmail"));
    console.log("Password: " + localStorage.getItem("UserPassword"));
    window.open("logout-page.html", "_self");

});

