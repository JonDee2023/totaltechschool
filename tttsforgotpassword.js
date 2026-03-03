document.getElementById("forgot-password").addEventListener("submit", function(e){
    e.preventDefault();
    
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let verifyEmail = document.getElementById("verify-email").value.trim().toLowerCase();

    // Basic validation
    if (!verifyEmail) {
        alert("Please provide email address to reset password.");
        return;
    }

    let validUser = storedUsers.find(user => user.email === verifyEmail);


    let userIndex = storedUsers.findIndex(user => user.email === verifyEmail);

    if (userIndex === -1) {
        alert("No account found with this email.");
        return;
    }

    // Store index temporarily
    localStorage.setItem("resetUserIndex", userIndex);

    alert("Email verified. " +validUser.firstname+ ", please enter a new password.");

    window.open("tttssavenewpassword.html", "_blank");
    
});

