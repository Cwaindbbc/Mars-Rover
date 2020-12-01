const hardCodedUser = "user";
const hardCodedPassword = "me"

const loginForm = document.getElementById("login-form");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const enteredUsername = loginForm.username.value;
    const enteredPassword = loginForm.password.value;

    if (enteredUsername === hardCodedUser && enteredPassword === hardCodedPassword) {
        alert("You have successfully logged in");
    } else {
       alert( "Not a match :-(. Please try again")
    }
});
