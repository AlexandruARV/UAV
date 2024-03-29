const eyeImg = document.querySelector(".eye__img");
const inputPassword = document.querySelector(".student_password");
eyeImg.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("eye__close")) {
    target.classList.remove("eye__close");
    target.src = "./photos/eye.svg";
    inputPassword.type = "password";
  } else {
    target.classList.add("eye__close");
    target.src = "./photos/eye-slash.svg";
    inputPassword.type = "text";
  }
});
