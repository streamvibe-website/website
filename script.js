document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stoppe normales Submit

    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
        setTimeout(() => form.submit(), 500); // Sicherheitspuffer
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
        setTimeout(() => form.submit(), 500); // Trotzdem absenden
      });
  });
});
