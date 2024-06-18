const email = document.getElementById('email-input');
let list = [];
function change() {
    let emailValue = email.value;
    if (validEmail() && !list.includes(emailValue)) {
        document.getElementById("emailMessage").innerHTML = "<div class='emailMessage'>Thank you for subscribing!</div>";
        list.push(emailValue);
    } else if (validEmail() && list.includes(emailValue)) {
        document.getElementById("emailMessage").innerHTML = "<div class='emailMessage'>You are already subscribed!</div>";
    } else {
        document.getElementById("emailMessage").innerHTML = "<div class='emailMessage'>Please enter a valid email address.</div>";
    }
    email.value = '';
}

function validEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
}