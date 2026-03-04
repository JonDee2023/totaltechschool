document.getElementById("save-new-password").addEventListener("submit", function(e) {
    e.preventDefault();

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = localStorage.getItem("resetUserIndex");
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;


    if (!newPassword || !confirmPassword) {
        alert("Complete both fields");
        return;
    }

    if (newPassword.length < 6){
        alert("Password must be at least 6 characters.");
        return;

    }

    if (newPassword !== confirmPassword){
        alert("Passwords do not match, enter same password in both fields.");
        return;
    }

    
        
    // Simple hash (demo only)
    function simpleHash(password) {
        return btoa(password);
    }

    storedUsers[userIndex].password = simpleHash(newPassword);

    localStorage.setItem("users", JSON.stringify(storedUsers));
    localStorage.removeItem("resetUserIndex");

    alert("Password successfully updated!");

    document.getElementById("save-new-password").reset()
});   