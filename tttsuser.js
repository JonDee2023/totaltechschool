let user = "ADMIN"
let userWelcome = document.getElementById("user-h1")
userWelcome.textContent= "Welcome "+user+ " to"

document.getElementsById("userdp")


document.getElementById("menus").addEventListener("click", function(event){

    if (event.target.id === "homepg"){
        window.open("tttshomepg.html", "_blank");
    }
    else if (event.target.id === "profilepg"){
        window.open("tttsprofilepg.html", "_blank");
    }
    else if (event.target.id === "cartspg"){
        window.open("tttscartspg.html", "_blank");
    }
    else if (event.target.id === "logoutpg"){
        window.open("tttslogoutpg.html", "_blank");
    }
    
});



document.getElementById("profilepg").addEventListener("select", function(e){
    window.open("tttsprofilepg.html", "_blank");
});


//document.addEventListener("DOMContentLoaded", function(){
//    functionM();
//});

//function functionM(){

 //   let user = "ADMIN"
 //   let userWelcome = document.getElementById("user-h1")
 //   userWelcome.textContent= "Welcome "+user+ " "

    
//};
