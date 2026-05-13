const contact = document.querySelector(".contact");

// contact.addEventListener("click", () => {
//   window.location.href = "./contacts.html";
// });

// setTimeout() - function , function name

setTimeout(() => {}, 1000);

setTimeout(() => {
  console.log("magda");
}, 10000);

setInterval(() => {
  console.log("hi");
}, 3000);

// || - logikuri an

const notify = document.querySelector(".notify");
const register = document.querySelector("#register");

register.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(register);
  const nameValue = document.getElementById("name").value;

  if (nameValue.length < 4 || nameValue.length > 15) {
    return console.log("error");
  }

  notify.classList.add("show");
});
