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

  // window.location.href = "./contacts.html";
  // setTimeout(() => {}, 1000);
  setTimeout(() => {
    window.location.href = "./contacts.html";
  }, 1000);
});

//

let count = 0;

const interval = setInterval(() => {
  count++;

  console.log(count);

  if (count >= 10) {
    clearInterval(interval);
  }
}, 2000);

// clearInterval(interval);

function getBirthdayCountdown(month, day) {
  const now = new Date();

  let nextBirthday = new Date(now.getFullYear(), month - 1, day);

  if (nextBirthday < now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }

  const diff = nextBirthday - now;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const t = getBirthdayCountdown(6, 29);

  countdownEl.textContent =
    `${t.days} days ${t.hours} hours ` +
    `${t.minutes} minutes ${t.seconds} seconds`;
}, 1000);
