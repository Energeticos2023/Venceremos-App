const provinces = [
  {
    name: "Huaraz",
    zone: "Callejón de Huaylas",
    focus: "Educación, seguridad, riesgo y turismo",
    intro: "Huaraz debe liderar Áncash sin olvidar a sus barrios, centros poblados y distritos. La capital regional necesita ordenar servicios, prevenir riesgos, fortalecer seguridad ciudadana y convertir el turismo en empleo para más familias.",
    problems: ["Presión sobre hospitales y servicios urbanos", "Riesgo de aluviones y movimientos en masa", "Seguridad urbana que exige articulación con PNP, serenazgo y juntas vecinales", "Turismo concentrado con poca conexión hacia productores locales"],
    solutions: {
      corto: "Comando regional de salud, riesgo y seguridad: rutas de emergencia, simulacros, mesas de trabajo, cámaras inteligentes y serenazgo articulado con la PNP.",
      mediano: "Mejoramiento de IIEE con internet y paquetes turísticos-productivos con Carhuaz, Recuay, Yungay y Huaylas para distribuir ingresos.",
      largo: "Sistema permanente de monitoreo de lagunas, alerta temprana e inversión en infraestructura resiliente."
    }
  },
  {
    name: "Aija",
    zone: "Callejón de Huaylas",
    focus: "Ruralidad y conectividad",
    intro: "Aija no puede seguir siendo mirada solo en campaña. Una gestión que escucha debe llegar hasta sus comunidades con servicios básicos, internet y caminos que permitan producir y estudiar.",
    problems: ["Alta ruralidad y pobreza territorial", "Baja conectividad digital", "Dificultades de acceso a salud, educación y mercados"],
    solutions: {
      corto: "Brigadas itinerantes de salud, nutrición y trámites regionales en coordinación con municipalidades.",
      mediano: "Expedientes para agua, saneamiento, electrificación, internet comunitario y mejoramiento de IIEE priorizando centros poblados dispersos.",
      largo: "Corredor vial y productivo que conecte Aija con el Callejón de Huaylas y mercados regionales."
    }
  },
  {
    name: "Bolognesi",
    zone: "Sierra sur y occidental",
    focus: "Riego y energía rural",
    intro: "Bolognesi necesita que la minería y la agropecuaria de altura se traduzcan en bienestar. La región debe ser gestora de agua, electrificación y rutas para vender mejor.",
    problems: ["Centros poblados dispersos con alto costo de infraestructura", "Brechas de electrificación e internet educativo rural", "Necesidad de agua para riego y producción altoandina"],
    solutions: {
      corto: "Mapa de comunidades sin servicios completos y mantenimiento de accesos críticos antes de temporadas de lluvia.",
      mediano: "Cartera de pequeños sistemas de riego, electrificación rural, internet para IIEE y asistencia técnica ganadera.",
      largo: "Conexión vial estratégica hacia Lima, Huánuco y corredores comerciales de la sierra."
    }
  },
  {
    name: "Recuay",
    zone: "Callejón de Huaylas / Sierra sur",
    focus: "Riesgo, turismo y producción",
    intro: "Recuay puede ser puente entre el turismo de montaña, la producción altoandina y la conectividad hacia el sur. La respuesta debe ordenar inversiones pequeñas pero decisivas.",
    problems: ["Riesgo climático y de desastres en zonas de montaña", "Potencial turístico poco integrado", "Necesidad de riego, vías, internet educativo y servicios para comunidades"],
    solutions: {
      corto: "Identificación de puntos críticos de riesgo, cultura preventiva, salud rural y vías vecinales para atención inmediata.",
      mediano: "Rutas turísticas y productivas articuladas con Huaraz, Catac y Carhuaz.",
      largo: "Infraestructura de prevención y conectividad que reduzca aislamiento y abra mercados."
    }
  },
  {
    name: "Huari",
    zone: "Conchucos",
    focus: "Canon bien gestionado",
    intro: "Huari tiene recursos, pero el ciudadano necesita resultados visibles. Walter Durand propone que el canon se convierta en salud, carreteras y proyectos productivos con seguimiento público.",
    problems: ["Uso insuficiente del canon minero para cerrar brechas", "Postas y hospitales rurales con baja capacidad resolutiva", "Aislamiento por falta de pavimentación plena de la Longitudinal de Conchucos"],
    solutions: {
      corto: "Tablero público de canon: proyectos, responsables, plazos y avance físico real.",
      mediano: "Equipamiento de salud, mejoramiento de IIEE con internet y paquetes de saneamiento en distritos de influencia minera.",
      largo: "Impulso regional a la pavimentación y mantenimiento de la Carretera Longitudinal de Conchucos."
    }
  },
  {
    name: "Corongo",
    zone: "Conchucos",
    focus: "Servicios y conectividad digital",
    intro: "Corongo debe dejar de ser periferia. Sus familias necesitan conectividad, salud preventiva y caminos que integren su producción con el resto de Áncash.",
    problems: ["Bajo acceso a internet en hogares e IIEE", "Servicios básicos dispersos", "Conectividad vial limitada con mercados y servicios regionales"],
    solutions: {
      corto: "Campañas de salud materno-infantil y módulos digitales en capitales distritales.",
      mediano: "Proyectos de internet rural para escuelas y comunidad, saneamiento y mantenimiento de vías vecinales.",
      largo: "Integración vial sostenida con corredores de Conchucos y la sierra norte."
    }
  },
  {
    name: "Pallasca",
    zone: "Sierra norte y occidental",
    focus: "Integración vial",
    intro: "Pallasca necesita una región que mire al norte con decisión. La prioridad es conectar producción agropecuaria, servicios y oportunidades para que la distancia no sea abandono.",
    problems: ["Dispersión poblacional y brechas de electrificación e internet educativo", "Accesos viales costosos y vulnerables", "Limitada articulación productiva con mercados"],
    solutions: {
      corto: "Mantenimiento de vías críticas y priorización de centros poblados sin servicios completos.",
      mediano: "Electrificación rural, internet en IIEE, riego tecnificado y asistencia a cadenas agropecuarias.",
      largo: "Corredores hacia La Libertad, Santa y Conchucos para mejorar comercio y atención estatal."
    }
  },
  {
    name: "Pomabamba",
    zone: "Conchucos",
    focus: "Salud y carretera",
    intro: "Pomabamba necesita que el Estado llegue a tiempo. La solución pasa por salud resolutiva, educación con servicios y una Longitudinal de Conchucos que ya no sea promesa eterna.",
    problems: ["Aislamiento vial por tramos afirmados", "Brechas de salud materno-infantil", "Baja conectividad digital y educativa"],
    solutions: {
      corto: "Brigadas de anemia, gestantes y primera infancia con seguimiento familiar.",
      mediano: "Mejoramiento de postas, infraestructura educativa con internet y mantenimiento vial por tramos priorizados.",
      largo: "Pavimentación de la Longitudinal de Conchucos con gestión regional permanente ante el Gobierno Nacional."
    }
  },
  {
    name: "Mariscal Luzuriaga",
    zone: "Conchucos",
    focus: "Piscobamba conectado",
    intro: "Mariscal Luzuriaga necesita salir del aislamiento con una agenda concreta. Piscobamba y sus distritos requieren salud, caminos y servicios básicos que funcionen todos los días.",
    problems: ["Aislamiento por la situación de la Longitudinal de Conchucos", "Servicios de salud de baja capacidad", "Saneamiento rural y conectividad digital insuficientes"],
    solutions: {
      corto: "Atención itinerante de salud, nutrición y mantenimiento de accesos de emergencia.",
      mediano: "Expedientes de saneamiento, internet rural y mejoramiento de IIEE para distritos con mayor brecha.",
      largo: "Consolidar el corredor Sihuas-Pomabamba-Piscobamba-Huari como columna vertebral de desarrollo."
    }
  },
  {
    name: "Antonio Raymondi",
    zone: "Conchucos",
    focus: "Primera infancia e internet",
    intro: "Antonio Raymondi tiene derecho a la misma presencia regional que las grandes ciudades. La gestión debe entrar por la salud infantil, la conectividad y los servicios básicos.",
    problems: ["Anemia y desnutrición en zonas rurales", "Bajo acceso a internet", "Brechas de saneamiento y equipamiento de establecimientos"],
    solutions: {
      corto: "Modelo casa por casa contra anemia, con control nutricional y metas distritales.",
      mediano: "Saneamiento, electrificación complementaria, internet para escuelas y mejora de infraestructura educativa.",
      largo: "Integración plena al corredor de Conchucos para reducir tiempos de traslado y costos."
    }
  },
  {
    name: "Sihuas",
    zone: "Conchucos",
    focus: "Conectividad estructural",
    intro: "Sihuas sabe lo que significa estar lejos. Un gobierno regional gestor debe convertir la carretera, la salud y la conectividad digital en una sola agenda de integración.",
    problems: ["Aislamiento por carretera afirmada en gran parte del corredor", "Dificultad para derivaciones de salud", "Limitado acceso a servicios digitales"],
    solutions: {
      corto: "Rutas de emergencia y mantenimiento vial preventivo en puntos críticos.",
      mediano: "Telemedicina, internet público, internet educativo y fortalecimiento de establecimientos estratégicos.",
      largo: "Pavimentación de la Longitudinal de Conchucos y articulación productiva hacia mercados regionales."
    }
  },
  {
    name: "Ocros",
    zone: "Sierra sur y occidental",
    focus: "Servicios en territorio disperso",
    intro: "Ocros necesita una política regional pensada para poblaciones pequeñas y dispersas. La solución no es centralizar, sino acercar servicios y proyectos bien diseñados.",
    problems: ["Baja conectividad digital", "Brechas de agua, saneamiento y electrificación rural", "Dificultad para sacar producción agropecuaria"],
    solutions: {
      corto: "Atención móvil de salud y registro de brechas por comunidad.",
      mediano: "Paquetes modulares de saneamiento, electrificación, internet comunitario e internet educativo.",
      largo: "Conectividad vial hacia Lima y Huánuco para abrir mercados y reducir aislamiento."
    }
  },
  {
    name: "Carlos Fermín Fitzcarrald",
    zone: "Conchucos",
    focus: "Carretera y servicios",
    intro: "Carlos Fermín Fitzcarrald necesita que su voz pese en la agenda regional. La prioridad es conectar mejor, cuidar a la primera infancia y cerrar brechas básicas.",
    problems: ["Aislamiento en el eje de la Longitudinal de Conchucos", "Postas con limitada capacidad de respuesta", "Saneamiento y conectividad pendientes"],
    solutions: {
      corto: "Brigadas de salud, nutrición y mantenimiento de vías de emergencia.",
      mediano: "Mejoramiento de establecimientos, saneamiento rural e infraestructura educativa con internet.",
      largo: "Pavimentación del corredor de Conchucos y red logística para productos locales."
    }
  },
  {
    name: "Casma",
    zone: "Costa",
    focus: "Chinecas, campo y empleo",
    intro: "Casma puede crecer con agricultura, turismo y empleo formal si la región gestiona bien el agua. Chinecas debe dejar de ser discurso: los hermanos del campo no pueden esperar.",
    problems: ["Dependencia de proyectos de irrigación postergados", "Necesidad de empleo formal fuera de actividades tradicionales", "Gestión ambiental y saneamiento urbano-rural"],
    solutions: {
      corto: "Mesa provincial de agua, empleo y residuos con metas verificables para acelerar la gestión de Chinecas.",
      mediano: "Preparar cartera de proyectos productivos, asistencia técnica y capacitación para que agricultores aprovechen Chinecas.",
      largo: "Ejecución de irrigación y cadenas agroexportadoras con valor agregado local en el menor tiempo posible."
    }
  },
  {
    name: "Santa",
    zone: "Costa",
    focus: "Seguridad, ambiente, Chinecas y empleo",
    intro: "Santa concentra población, industria y urgencias ambientales. Chimbote y Nuevo Chimbote necesitan una región que gestione residuos, agua, salud, seguridad y empleo con autoridad técnica.",
    problems: ["Gestión deficiente de residuos sólidos urbanos", "Presión sobre servicios de salud y agua", "Seguridad ciudadana que requiere cámaras, drones, serenazgo y PNP articulados", "Necesidad de diversificar empleo más allá de pesca e industria tradicional"],
    solutions: {
      corto: "Plan de choque para residuos, puntos críticos ambientales y mesa de seguridad con PNP, serenazgo, cámaras inteligentes y drones.",
      mediano: "Fortalecer salud urbana, formación laboral, IIEE con internet y proyectos productivos conectados a Chinecas.",
      largo: "Chinecas, reconversión productiva y recuperación ambiental como motor de empleo formal."
    }
  },
  {
    name: "Huarmey",
    zone: "Costa",
    focus: "Chinecas, agua, puerto y sierra",
    intro: "Huarmey debe mirar al mar, al valle y a la sierra al mismo tiempo. La región tiene que conectar Chinecas, riego, logística, salud y rutas hacia el interior.",
    problems: ["Necesidad de mejorar conectividad hacia la sierra y Lima", "Retos de agua para agricultura y desarrollo urbano", "Brechas de salud preventiva y empleo local"],
    solutions: {
      corto: "Campañas de salud y mesa de conectividad Huarmey-sierra con puntos críticos viales.",
      mediano: "Proyectos de riego, saneamiento, internet educativo y articulación con cadenas productivas costeras.",
      largo: "Aprovechar Chinecas y corredores logísticos para empleo formal, agroindustria y oportunidades para el campo."
    }
  },
  {
    name: "Huaylas",
    zone: "Callejón de Huaylas",
    focus: "Turismo y producción",
    intro: "Huaylas tiene identidad, paisaje y producción. La gestión regional debe conectar turismo, agricultura y prevención de riesgos para que el desarrollo llegue a más distritos.",
    problems: ["Riesgo de desastres asociado a montaña y clima", "Turismo poco integrado a cadenas locales", "Brechas de servicios en distritos rurales"],
    solutions: {
      corto: "Mapa de riesgos, cultura preventiva y mantenimiento de vías vecinales usadas por productores y visitantes.",
      mediano: "Rutas turísticas comunitarias, internet educativo y asistencia a productores para vender en circuitos regionales.",
      largo: "Infraestructura de alerta y conectividad para una economía turística descentralizada."
    }
  },
  {
    name: "Carhuaz",
    zone: "Callejón de Huaylas",
    focus: "Turismo descentralizado",
    intro: "Carhuaz puede ser ejemplo de turismo ordenado y economía familiar. Para lograrlo, necesita servicios, seguridad ante riesgos y promoción que incluya a sus distritos.",
    problems: ["Dependencia del circuito turístico clásico", "Riesgo por fenómenos de montaña", "Servicios básicos incompletos en zonas rurales"],
    solutions: {
      corto: "Señalización de riesgos, cultura preventiva, atención preventiva y limpieza de rutas turísticas.",
      mediano: "Promoción turística interdistrital, saneamiento básico, internet educativo y conectividad digital para emprendedores.",
      largo: "Sistema de alerta temprana y corredor turístico-productivo del Callejón de Huaylas."
    }
  },
  {
    name: "Yungay",
    zone: "Callejón de Huaylas",
    focus: "Memoria, riesgo y futuro",
    intro: "Yungay conoce el costo de no prevenir. Una región seria debe honrar su memoria con ciencia, alerta temprana, turismo responsable y servicios para sus comunidades.",
    problems: ["Exposición a aluviones y movimientos en masa", "Necesidad de turismo responsable y descentralizado", "Brechas de servicios y conectividad rural"],
    solutions: {
      corto: "Actualización de rutas de evacuación, simulacros, cultura preventiva y atención de puntos críticos.",
      mediano: "Circuitos de memoria, naturaleza y producción con beneficio para familias locales.",
      largo: "Monitoreo de lagunas glaciares y obras de mitigación con financiamiento multianual."
    }
  },
  {
    name: "Asunción",
    zone: "Conchucos",
    focus: "Ruralidad con dignidad",
    intro: "Asunción requiere una gestión que entienda la ruralidad como prioridad, no como excusa. La región debe llevar salud, conectividad y obras pequeñas que cambian la vida diaria.",
    problems: ["Provincia de alta ruralidad", "Dificultad de acceso a servicios de salud y educación", "Saneamiento y caminos vecinales pendientes"],
    solutions: {
      corto: "Brigadas regionales de salud y primera infancia en comunidades alejadas.",
      mediano: "Cartera de saneamiento, electrificación complementaria, mejoramiento de IIEE e internet escolar.",
      largo: "Integración con el corredor de Conchucos para reducir aislamiento y fortalecer producción local."
    }
  }
];

const buttonsContainer = document.getElementById("provinceButtons");
const provinceTitle = document.getElementById("provinceTitle");
const provinceZone = document.getElementById("provinceZone");
const provinceFocus = document.getElementById("provinceFocus");
const provinceIntro = document.getElementById("provinceIntro");
const provinceMessage = document.getElementById("provinceMessage");
const provinceProblems = document.getElementById("provinceProblems");
const provinceSolutions = document.getElementById("provinceSolutions");

const provinceMessages = {
  Huaraz: "Mensaje clave: Huaraz no debe administrar problemas; debe liderar soluciones para todo Áncash.",
  Aija: "Mensaje clave: Aija merece presencia regional real, no visitas rápidas ni promesas de temporada.",
  Bolognesi: "Mensaje clave: donde hay agua, energía y caminos, la producción altoandina puede convertirse en bienestar.",
  Recuay: "Mensaje clave: Recuay debe ser puente de desarrollo, no territorio de paso.",
  Huari: "Mensaje clave: el canon debe sentirse en la posta, la escuela, la carretera y la mesa familiar.",
  Corongo: "Mensaje clave: estar lejos no puede significar estar olvidado.",
  Pallasca: "Mensaje clave: Pallasca necesita integración para que su producción valga más y sus familias vivan mejor.",
  Pomabamba: "Mensaje clave: Pomabamba no pide privilegios; pide una carretera, salud y servicios que lleguen a tiempo.",
  "Mariscal Luzuriaga": "Mensaje clave: Piscobamba y sus distritos necesitan que el Estado llegue con obra, no solo con papeles.",
  "Antonio Raymondi": "Mensaje clave: cuidar a la primera infancia es empezar el desarrollo donde realmente empieza la vida.",
  Sihuas: "Mensaje clave: Sihuas necesita conexión para que su esfuerzo no se pierda en el aislamiento.",
  Ocros: "Mensaje clave: las provincias pequeñas también merecen soluciones grandes, bien pensadas y sostenidas.",
  "Carlos Fermín Fitzcarrald": "Mensaje clave: conectar esta provincia es abrirle mercado, salud y futuro a sus familias.",
  Casma: "Mensaje clave: Chinecas debe convertirse en agua para el campo y empleo para las familias.",
  Santa: "Mensaje clave: Chimbote y Nuevo Chimbote necesitan seguridad, ambiente limpio y empleo con futuro.",
  Huarmey: "Mensaje clave: Huarmey puede crecer si unimos valle, mar, sierra y Chinecas en una sola estrategia.",
  Huaylas: "Mensaje clave: Huaylas tiene paisaje, identidad y producción; falta una gestión que los conecte.",
  Carhuaz: "Mensaje clave: Carhuaz puede demostrar que el turismo también alimenta economías familiares.",
  Yungay: "Mensaje clave: honrar la memoria de Yungay es gobernar con prevención, ciencia y responsabilidad.",
  Asunción: "Mensaje clave: Asunción merece una región que entienda la ruralidad y la atienda con dignidad."
};

function renderProvinceButtons() {
  provinces.forEach((province, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `province-button${index === 0 ? " active" : ""}`;
    button.textContent = province.name;
    button.dataset.index = index;
    button.addEventListener("click", () => selectProvince(index));
    buttonsContainer.appendChild(button);
  });
}

function selectProvince(index) {
  const province = provinces[index];
  document.querySelectorAll(".province-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === index);
  });

  provinceTitle.textContent = province.name;
  provinceZone.textContent = province.zone;
  provinceFocus.textContent = province.focus;
  provinceIntro.textContent = province.intro;
  provinceMessage.textContent = provinceMessages[province.name] || "Mensaje clave: una provincia escuchada es una provincia que puede exigir resultados.";

  provinceProblems.innerHTML = province.problems
    .map((problem) => `<li>${problem}</li>`)
    .join("");

  provinceSolutions.innerHTML = `
    <div class="timeline-item"><span>Corto plazo</span><p>${province.solutions.corto}</p></div>
    <div class="timeline-item"><span>Mediano plazo</span><p>${province.solutions.mediano}</p></div>
    <div class="timeline-item"><span>Largo plazo</span><p>${province.solutions.largo}</p></div>
  `;
}

renderProvinceButtons();
selectProvince(0);
