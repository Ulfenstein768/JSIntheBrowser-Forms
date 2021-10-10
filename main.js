// Here I make arrow functions targeting the id´s and the classes in the HTML code, to make the js code shorter, avoiding code repetition. 
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"), // id array
    email = id("email"), // id array
    password = id("password"), // id array
    form = id("form"), // id array

    errorMsg = classes("error"), // class array
    successIcon = classes("success-icon"), // class array
    failureIcon = classes("failure-icon"); // class array


form.addEventListener("submit", (e) => {
    e.preventDefault();

    idTarget(username, 0, "Username cannot be blank");
    idTarget(email, 1, "Email cannot be blank");
    idTarget(password, 2, "Password cannot be blank");
});


let idTarget = (id, serial, message) => { // Instead of having to write this code 3 times, targeting all id´s seperatly I targeted the id in the id arrow function. 
    if (id.value === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity ="1"
        successIcon[serial].style.opacity ="0"
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0"
        successIcon[serial].style.opacity = "1"
    }
};