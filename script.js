console.log("script.js wurde geladen ✅");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");

  form.addEventListener("submit", function () {
    // ✉️ Kundenmail via EmailJS (läuft im Hintergrund, beeinflusst FormSubmit NICHT!)
    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
      });

    // ❗️ NICHT: form.reset()
    // ❗️ NICHT: e.preventDefault()
  });
});
