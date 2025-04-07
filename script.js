const form = document.getElementById("bestellformular");
const erfolg = document.getElementById("erfolg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form));

  fetch("https://hook.eu2.make.com/9tosko1a8z34so62lz6d2op3p7rwipi2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    erfolg.classList.remove("hidden");
    form.reset();
    setTimeout(() => erfolg.classList.add("hidden"), 10000);
  })
  .catch((error) => {
    console.error("Fehler beim Senden:", error);
  });
});
