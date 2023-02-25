const form = document.querySelector(
  ".login-form"
);
form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

    if (
      email.value === "" ||
      password.value === ""
    ) {
      alert(
        "Будь ласка заповніть форму!"
      );
    }

    console.log(
      `Login: ${email.value}, Password: ${password.value}`
    );
    event.currentTarget.reset();
  }
);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     alert("Будь ласка заповніть форму!");
//   }

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
