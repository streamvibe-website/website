const form = document.getElementById("bestellformular");
const erfolg = document.getElementById("erfolg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://hooks.zapier.com/hooks/catch/22285447/2cjuny5/", {
    method: "POST",
    body: formData
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
