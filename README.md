# Sitio de campaña — Walter Severo Durand Castro (Venceremos, Áncash 2026)

Landing page estática lista para publicar en GitHub Pages. No requiere backend ni proceso de build.

## Qué incluye

- Hero de campaña con mensaje central de gestión territorial.
- Módulo interactivo con 20 botones de acceso, uno por provincia de Áncash.
- Ficha política por provincia con:
  - presentación breve,
  - principales problemas,
  - solución de corto, mediano y largo plazo.
- Sección de prioridades regionales: salud, educación, servicios básicos, vías y economía.
- Sección de compromisos regionales: deuda social docente, infraestructura educativa con internet, continuidad de Chinecas, gestión del riesgo y seguridad ciudadana.
- Biografía sintética de Walter Durand.
- Enlaces directos a Microsoft Forms:
  - simpatizantes y reporte de necesidades,
  - inscripción de personeros.
- Redes sociales de campaña.

## Estructura

```text
index.html
styles.css
script.js
assets/
  logo-venceremos.jpg
  candidato-walter-durand.jpg
```

## Base de contenido

Las fichas provinciales se construyeron a partir del informe `Necesidades_Ancash_por_Provincia.docx`, que agrupa la región por zonas y ejes prioritarios:

- Costa: Santa, Casma, Huarmey.
- Callejón de Huaylas: Huaraz, Carhuaz, Yungay, Recuay, Huaylas, Aija.
- Conchucos: Huari, Antonio Raymondi, Asunción, Carlos Fermín Fitzcarrald, Sihuas, Pomabamba, Mariscal Luzuriaga, Corongo.
- Sierra sur y occidental: Bolognesi, Ocros, Pallasca, Recuay.

Fuentes citadas en el informe base: Gobierno Regional de Áncash, INEI, DIRESA Áncash, MINEDU, ANA, Proyecto Especial Chinecas y Antamina.

## Probar localmente

Desde esta carpeta:

```bash
python -m http.server 8008
```

Luego abrir:

```text
http://127.0.0.1:8008/index.html
```

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir `index.html`, `styles.css`, `script.js` y `assets/` a la raíz del repositorio.
3. Ir a `Settings → Pages`.
4. Seleccionar la rama `main` y carpeta `/ (root)`.
5. Guardar y usar la URL que entregue GitHub Pages.
