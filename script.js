const WHATSAPP_NUMBER = "56966663641";

function refreshIcons() {
  if (!window.lucide) return;

  window.lucide.createIcons({
    attrs: {
      width: 22,
      height: 22,
      strokeWidth: 2
    }
  });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
  });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 4) * 70}ms`;
    revealObserver.observe(item);
  });
}

function setupAppointmentForm() {
  const form = document.querySelector("#appointment-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = String(formData.get("nombre") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();
    const mensaje = String(formData.get("mensaje") || "").trim();

    if (!nombre || !telefono || !mensaje) {
      form.reportValidity();
      return;
    }

    const whatsappMessage = [
      "Hola, quiero agendar una hora en Clínica Veterinaria El Bosque.",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Mensaje: ${mensaje}`
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  refreshIcons();
  setupRevealAnimations();
  setupAppointmentForm();
});
