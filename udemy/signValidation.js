// declare constants
const firstName = document.getElementById("fname");
const secondName = document.getElementById("Iname");
const check1 = document.getElementById("gender1");
const check2 = document.getElementById("gender2");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const birthDay = document.getElementById("dob");
const selection = document.getElementById("state");
const selectYear = document.getElementById("year");
const signBtn = document.getElementById("signBtn"); 
const form = document.getElementById("form");

// function
function validateSignUp(){
   if (firstName.value && secondName.value && email.value && check1.value && check2.value && birthDay.value && selection.value && selectYear.value && 
        (password.value === cpassword.value &&  cpassword.value === password.value)) {
        alert("Details validation success")
        form.action="./login.html";
        const user = {
            firstName: firstName.value,
            secondName: secondName.value,
            check1: check1.value,
            check2: check2.value,
            email: email.value,
            birthDay: birthDay.value,
            selectYear: selectYear.value,
            selection: selection.value,
            password: password.value
        }
        createUser(user)
    } else{
        alert("wrong details")
    }
}
// add eventlistener
signBtn.addEventListener("click", validateSignUp)


function createUser(user) {
    localStorage.setItem("user", JSON.stringify(user)) 
}