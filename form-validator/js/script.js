const pass = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmpassword");
const errorText = document.getElementById("password-match-error");
const btn = document.querySelector(".btn");
const femaleRadio = document.getElementById("female");
const maleRadio = document.getElementById("male");

class Validator {
  constructor() {
    this.inputElements = document.querySelectorAll(".input-form");
  }
  validateForm() {
    let isValid = true;
    let password = "";
    this.inputElements.forEach((input) => {
      const value = input.value.trim();
      if (!value) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
        input.classList.add("done");
        if (input.id === "email") {
          const isValidEmail = this.isEmail(value);
          if (!isValidEmail) {
            input.classList.add("error");
            input.classList.add("done");
            isValid = false;
          }
        } else if (input.id == "pass") {
          password = value;
        }
      }
    });
    if (password !== confirmPassword.value) {
      errorText.textContent = "Password do not match";
      isValid = false;
    } else {
      errorText.textContent = "";
    }
    return isValid;
  }
  isEmail(value) {
    const regexp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return regexp.test(value);
  }
}

const validator = new Validator();

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validator.validateForm()) {
    console.log("Форма валидна");
  } else {
    console.log("Форма невалидна");
  }
});

femaleRadio.addEventListener("change", () => {
  if (femaleRadio.checked) {
    maleRadio.disabled = true;
  } else {
    maleRadio.disabled = false;
  }
});

confirmPassword.addEventListener("input", function () {
  if (pass.value !== confirmPassword.value) {
    errorText.textContent = "Passwords do not match";
  } else {
    errorText.textContent = "";
  }
});
