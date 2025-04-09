console.log("script.js wurde geladen ✅");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");
  const erfolg = document.getElementById("erfolg");

  form.addEventListener("submit", function () {
    // ✉️ Kundenmail via EmailJS
    console.log("Sende Kundenmail...");
    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
      });

    // ✅ Erfolgsmeldung anzeigen
    erfolg.classList.remove("hidden");
    setTimeout(() => erfolg.classList.add("hidden"), 10000);

    // ✅ Formular zurücksetzen (nur visuell – Daten wurden schon abgeschickt)
    form.reset();

    // ❗️Wichtig: KEIN `e.preventDefault()` → damit FormSubmit funktioniert!
  });
});
