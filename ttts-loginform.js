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

    // Reset form
    document.getElementById("login-form").reset();

});
