var button = document.querySelector(".mygtukas");
var psw1 = document.getElementById("psw1");
var psw2 = document.getElementById("psw2");
var form = document.querySelector("form");
var chekbox = document.getElementById("check");
var spinner = document.querySelector(".spinnerholder");
var successMsg = document.querySelector(".psw-success");
var errorMsg = document.querySelector(".psw-error");

button.addEventListener("click", (e) => {
    e.preventDefault();
    var password1 = psw1.value;
    var password2 = psw2.value;
    spinner.style.display = "flex";

    setTimeout(function () {
        spinner.style.display = "none";
        if (password1 === password2) {
            successMsg.classList.remove("hiden");
            errorMsg.classList.add("hiden");
        } else {
            errorMsg.classList.remove("hiden");
            successMsg.classList.add("hiden");
        }
    }, 2000)

})

chekbox.addEventListener("click", () => {
    if (psw1.type == "password" && psw2.type == "password") {
        psw1.type = "text";
        psw2.type = "text";
    } else {
        psw1.type = "password";
        psw2.type = "password";
    }
})

