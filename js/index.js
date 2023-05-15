
var enterNameInput = document.getElementById("enterNameInput")
var enterEmailInput = document.getElementById("enterEmailInput")
var enterPassInput = document.getElementById("enterPassInput")
var loginBtn = document.getElementById("loginBtn")
var signBtn = document.getElementById("signBtn")
var logoutBtn = document.getElementById("logoutBtn")
var userName= document.getElementById("userName")
var personsInfo = []
var currentUser=[]
if (signBtn) {
    signBtn.addEventListener("click", function signUp() {
        var person = {
            name: enterNameInput.value,
            mail: enterEmailInput.value,
            pass: enterPassInput.value
        }
        personsInfo.push(person);
        localStorage.setItem("personsInfo", JSON.stringify(personsInfo))
        var successAlert = document.querySelector(".alert1")
        console.log(successAlert)
        successAlert.classList.remove("d-none")
        for (var i = 0; i < personsInfo.length; i++) {
            if (personsInfo[i].mail == enterEmailInput.value) {
                mailValidation.classList.remove("d-none");
                successAlert.classList.add("d-none")
            }
        }
        
    })
}
if (loginBtn) {
    loginBtn.addEventListener("click", function login() {
        personsInfo = JSON.parse(localStorage.getItem("personsInfo"));
        var requiredField = document.querySelector("#requiredField");
        if (!enterEmailInput.value || !enterPassInput.value) {
            requiredField.classList.remove("d-none");
            return;
        }
        requiredField.classList.add("d-none");
        for (var i = 0; i < personsInfo.length; i++) {
            if (personsInfo[i].mail == enterEmailInput.value && personsInfo[i].pass== enterPassInput.value) {
                window.location.href='Home.html';
                localStorage.setItem("currentUser", JSON.stringify(personsInfo[i].name))
            }
        }
        var invalidUser = document.querySelector("#invalidUser")
        invalidUser.classList.remove("d-none")
    })
}
if(logoutBtn){
logoutBtn.addEventListener("click", function(){
    window.location.href='index.html';
    
})
currentUser =JSON.parse(localStorage.getItem("currentUser"))
userName.innerHTML= `${currentUser}`
}

