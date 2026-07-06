# Sitio de campaña — Walter Severo Durand Castro (Venceremos, Áncash 2026)

Landing page estática (HTML + CSS puro, sin dependencias de build) lista para publicar en **GitHub Pages**.

## Estructura
```
index.html        → toda la página (header, hero, biografía, prioridades, únete, contacto)
styles.css         → identidad visual (rojo/verde del partido + motivo topográfico andino)
assets/
  logo-venceremos.jpg         → símbolo del partido
  candidato-walter-durand.jpg → foto oficial del candidato
```

## ⚠️ Pendiente antes de publicar
En `index.html`, busca la sección `id="biografia"`. Contiene marcadores `[COMPLETAR: ...]`
porque no se encontró una biografía pública verificable del candidato más allá de su
inscripción oficial ante la ONPE como candidato a Gobernador Regional de Áncash por
la Alianza Electoral Venceremos. Reemplaza esos marcadores con los datos reales
(formación, trayectoria, logros) antes de publicar, para no mostrar información no
verificada sobre el candidato.

También debes conectar los botones "Regístrate como simpatizante" y "Postular como
personero" (actualmente `href="#"`) al formulario real cuando esté listo (Google Form,
Typeform, o el backend de la app descrita en el documento de especificación).

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub (puede ser público o privado con GitHub Pro).
2. Sube estos 3 elementos (`index.html`, `styles.css`, `assets/`) a la raíz del repo.
3. Ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL tipo `https://tuusuario.github.io/nombre-repo/`.

## Redes ya enlazadas
- Facebook oficial: enlazado en la sección de contacto.
- TikTok @aylluancash: enlazado en la sección de contacto.
