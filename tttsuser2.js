document.getElementById("menu").addEventListener("change", function(){

    if (this.value === "logout") {
        localStorage.removeItem("loggedInUser");
        window.location.href = "newtttslogin.html";
    }

    else if (this.value !==""){
        window.location.href = this.value;
    }
    
});