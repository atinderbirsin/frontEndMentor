const claimBtn = document.querySelector(".form-btn");
const icons = document.querySelectorAll(".icon");
const empty = document.querySelectorAll(".empty");
const firstName = document.querySelector(".input-firstname");
const lastName = document.querySelector(".input-lastname");
const email = document.querySelector(".input-email");
const pass = document.querySelector(".input-pass");
const formContainer = document.querySelector(".form-container");

const checkFunction = function (entry1, entry2, entry3, entry4) {
  if (
    entry1.value === "" ||
    entry2.value === "" ||
    entry3.value === "" ||
    entry4.value === ""
  ) {
    const entries = [entry1, entry2, entry3, entry4];
    entries.forEach((entry) => {
      let number = entry.dataset.tab;
      document.querySelector(`.icon-${number}`).style.display = "grid";
      empty.forEach((em) => (em.style.display = "grid"));
      entry.classList.add("input-border");
      formContainer.style.gap = "10px";
      if (entry.placeholder === "Email Address") {
        entry.placeholder = "email@example/com";
        email.classList.add("email-color");
      } else {
        entry.placeholder = "";
      }
    });
  } else if (entry1.value && entry2.value && entry3.value && entry4.value) {
    const entries = [entry1, entry2, entry3, entry4];
    entries.forEach((entry) => {
      let number = entry.dataset.tab;
      document.querySelector(`.icon-${number}`).style.display = "none";
      empty.forEach((em) => (em.style.display = "none"));
      entry.classList.remove("input-border");
      formContainer.style.gap = "15px";
      entry1.placeholder = "First Name";
      entry2.placeholder = "Last Name";
      entry3.placeholder = "Email Address";
      entry4.placeholder = "Password";
    });
  }
};

claimBtn.addEventListener("click", function (e) {
  e.preventDefault();

  checkFunction(firstName, lastName, pass, email);
});
