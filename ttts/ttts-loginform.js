document.addEventListener("DOMContentLoaded", function (){
    let suppliedPassword = document.getElementById("upassword")
    let toggleElt = document.getElementById("toggle-password")

    toggleElt.addEventListener("click", function (){
        if (suppliedPassword.type === "password") {
            suppliedPassword.type = "text";
            toggleElt.textContent = "🙈";

    } else{
        suppliedPassword.type = "password";
        toggleElt.textContent = "👁";
    }

    });
    
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    let iUsername = document.getElementById("uemail").value.trim().toLowerCase();
    let iPassword = document.getElementById("upassword").value  ;
    let message = document.getElementById("login-msg");

    
    // Basic validation
    if (!iUsername || !iPassword) {
        message.textContent = "Please fill in all required fields";
        return;
    }
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = storedUsers.find(user =>
        user.email === iUsername && user.password === btoa(iPassword));

    if (foundUser){
    alert("Login successful. Welcome "+ foundUser.firstname)
    
    window.open("tttsuser.html", "_blank");


    } else {
    alert("Invalid login details, please check and try again.")
    };

    localStorage.setItem("currentUser", iUsername);

    // Reset form
    document.getElementById("login-form").reset();

});
