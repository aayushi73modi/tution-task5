function validate() {
    let isValid = true;
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("myInputPassword").value;
    const firstnameError = document.getElementById("firstnameError");
    const lastnameError = document.getElementById("lastnameError");
    const addressError = document.getElementById("addressError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    firstnameError.textContent = "";
    lastnameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!firstname) {
        firstnameError.textContent = "First name is required.";
        isValid = false;
    }

    if (!lastname) {
        lastnameError.textContent = "Last name is required.";
        isValid = false;
    }

    if (!address) {
        addressError.textContent = "Address is required.";
        isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Valid email is required.";
        isValid = false;
    }

    if (!password || password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // Log the form data
    console.log({
        firstname,
        lastname,
        address,
        email,
        password: isValid ? password : "[invalid password]",
    });

    return isValid;
}

function togglePassword() {
    const passwordInput = document.getElementById("myInputPassword");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
}

function myPassword() {
    var pass = document.getElementById("myInputPassword");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
