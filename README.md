# Sitio de campaña — Walter Severo Durand Castro (Venceremos, Áncash 2026)

Landing page estática (HTML + CSS + JS puro, sin dependencias de build) lista para publicar en **GitHub Pages**.

## Estructura
```
index.html        → toda la página (header, hero, biografía, prioridades, únete, contacto)
styles.css         → identidad visual (rojo/verde del partido + motivo topográfico andino)
script.js          → arma y envía el mensaje de WhatsApp desde los formularios
assets/
  logo-venceremos.jpg         → símbolo del partido
  candidato-walter-durand.jpg → foto oficial del candidato
```

## Estado actual
✅ Biografía completa con datos reales (ayuda memoria del Club Rotary Huaraz Colonial).
✅ Formularios de simpatizante y personero: al enviarlos, se abre WhatsApp con los datos
   ya redactados, listos para mandar al número de campaña (+51 932 757 214). No requieren
   backend ni servicio externo — funcionan apenas se publique el sitio.

## Pendiente / opcional
- Si además quieres que los registros lleguen por **correo**, se puede sumar
  [Formspree](https://formspree.io) (gratis, sin tarjeta): te registras, te dan un
  endpoint, y lo pego en el atributo `action` de cada `<form>`. Aviso: esto es un
  servicio de terceros — sus datos pasarán por sus servidores antes de llegarte al correo.
- El plan de gobierno detallado (propuestas por eje) aún debe registrarse ante el JNE;
  ver el documento "Estrategia_Outsider_Durand_Castro.docx" para la hoja de ruta.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub (puede ser público o privado con GitHub Pro).
2. Sube estos elementos (`index.html`, `styles.css`, `script.js`, `assets/`) a la raíz del repo.
3. Ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL tipo `https://tuusuario.github.io/nombre-repo/`.

## Redes ya enlazadas
- Facebook oficial: enlazado en la sección de contacto.
- TikTok @aylluancash: enlazado en la sección de contacto.

