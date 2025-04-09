console.log("script.js wurde geladen ✅");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bestellformular");
  const erfolg = document.getElementById("erfolg");

  form.addEventListener("submit", function () {
    // ✉️ Kundenmail via EmailJS (läuft im Hintergrund)
    console.log("Sende Kundenmail...");
    emailjs.sendForm("streamvibe_ionos", "template_d0ckp5q", form)
      .then(() => {
        console.log("✅ Kundenmail erfolgreich versendet.");
      })
      .catch((error) => {
        console.error("❌ Fehler bei Kundenmail:", error);
      });

    // ✅ Erfolgsmeldung anzeigen (optional, unabhängig von E-Mail)
    erfolg.classList.remove("hidden");

    // 🕒 Reset erst verzögert – damit FormSubmit Daten nicht verliert
    setTimeout(() => {
      form.reset();
      erfolg.classList.add("hidden");
    }, 1500);
  });
});
