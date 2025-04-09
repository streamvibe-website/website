document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
        form.submit(); // Jetzt normales Absenden an FormSubmit
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
        form.submit(); // Auch im Fehlerfall absenden
      });
  });
});
