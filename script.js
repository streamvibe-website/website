document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");

  form.addEventListener("submit", function (e) {
    // NICHT verhindern – FormSubmit soll ganz normal abschicken
    // Aber wir hooken uns vorher ein und senden via EmailJS
    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
      });
  });
});
