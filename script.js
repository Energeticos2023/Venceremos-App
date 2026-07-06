// Número de campaña (WhatsApp)
const WHATSAPP_NUMERO = "51932757214"; // Perú (51) + 932757214

function enviarWhatsApp(event) {
  event.preventDefault();
  const form = event.target;
  const tipo = form.dataset.tipo;
  const data = new FormData(form);

  let mensaje = `*Registro de ${tipo} — Venceremos Áncash*%0A`;
  mensaje += `Nombre: ${data.get("nombre") || "-"}%0A`;
  mensaje += `Celular: ${data.get("celular") || "-"}%0A`;
  mensaje += `Distrito/Provincia: ${data.get("distrito") || "-"}%0A`;
  if (data.get("necesidad")) mensaje += `Necesidad principal: ${data.get("necesidad")}%0A`;
  if (data.get("local")) mensaje += `Local de votación: ${data.get("local")}%0A`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;
  window.open(url, "_blank");

  form.reset();
  const nota = document.createElement("p");
  nota.className = "form-sent-note";
  nota.textContent = "Se abrió WhatsApp con tus datos. Solo falta que presiones enviar. ¡Gracias por sumarte!";
  form.after(nota);
  setTimeout(() => nota.remove(), 6000);

  return false;
}
