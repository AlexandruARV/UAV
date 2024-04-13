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

const formEl = document.querySelector(".form");
console.log(formEl);
let x = false;
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  console.log(formData);

  const data = Object.fromEntries(formData);
  console.log(JSON.stringify(data));

  async function sendData() {
    try {
      const sendSv = await fetch(
        "https://server-63ql.onrender.com/receiveData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!sendSv.ok) throw new Error("Error to send data");

      const res = await sendSv.json();
      console.log(res);
    } catch (error) {
      console.error("An error apear:", error);
    }

    if (x) {
      window.location.href = "http://127.0.0.1:5500/mainPage.html";
    }
  }
  sendData();
});
