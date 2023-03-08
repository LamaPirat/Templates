const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!validateEmail(email)) {
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address";
    event.preventDefault();
    return false;
  }

  if (country === "") {
    document.getElementById("country-error").innerHTML =
      "Please select your country";
    event.preventDefault();
    return false;
  }

  if (!validateZip(zip)) {
    document.getElementById("zip-error").innerHTML =
      "Please enter a valid zip code";
    event.preventDefault();
    return false;
  }

  if (!validatePassword(password)) {
    document.getElementById("password-error").innerHTML =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    event.preventDefault();
    return false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirm-password-error").innerHTML =
      "Passwords do not match";
    event.preventDefault();
    return false;
  }

  return true;
});

const inputFields = form.querySelectorAll("input");

inputFields.forEach(function (input) {
  input.addEventListener("blur", function () {
    // Validate the input field based on its type
    if (input.type === "email") {
      //Email
      if (!validateEmail(input.value)) {
        document.getElementById("email-error").innerHTML =
          "Please enter a valid email address";
        return false;
      } else {
        document.getElementById("email-error").innerHTML = "";
      }
    } else if (input.type === "text") {
      //Zip
      if (!validateZip(input.value)) {
        document.getElementById("zip-error").innerHTML =
          "Please enter a valid zip code";
        return false;
      } else {
        document.getElementById("zip-error").innerHTML = "";
      }
    } else if (input.type === "password") {
      //Pasword
      if (!validatePassword(input.value)) {
        document.getElementById("password-error").innerHTML =
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        return false;
      } else {
        document.getElementById("password-error").innerHTML = "";
      }
      if (input.id === "confirm-password") {
        if (input.value != document.getElementById("password").value) {
          document.getElementById("confirm-password-error").innerHTML =
            "Password must match";
          return false;
        }
      }
    }
  });
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateZip(zip) {
  const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
  return zipRegex.test(zip);
}

function validatePassword(password) {
  // Check if password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if password contains at least one uppercase letter, one lowercase letter, and one number
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(password);
}
