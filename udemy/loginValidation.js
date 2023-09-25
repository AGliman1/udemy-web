// declare constants
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");

// function

function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"))
    //alert("Email From User: " + email)
    //alert("Password From User: " + password)
    //alert("Email From DB: " + user.email)
    //alert("Email From DB: " + user.password)
    if (email === user.email && password === user.password){
        alert("You Are  loged in")
        form.action="./courses.html";
    } else{
        //alert("Email: " + user.email)
        //alert("Password: " + user.password)
        alert("You entered a Wrong details")
    }
}

// add eventlistener
submitBtn.addEventListener("click", validateLogin)

