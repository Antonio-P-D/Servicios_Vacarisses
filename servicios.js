document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});


  // Menú principal hamburguesa
  const toggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Submenús solo con clic en móvil
  const enlaces = document.querySelectorAll('nav li > a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      const li = this.parentElement;
      const submenu = li.querySelector('ul');

      if (window.innerWidth <= 768 && submenu) {
        e.preventDefault(); // no seguir enlace
        li.classList.toggle('show-submenu');
      }
    });
  });


// IDIOMAS
const textos = {
  es: {
    titulo: "Servicios en Vacarisses",
    subtitulo: "Conectando personas con soluciones locales",
    quienesTitulo: "¿Quiénes somos?",
    quienesTexto:
      "Somos una plataforma local creada para facilitar la conexión entre vecinos de Vacarisses que ofrecen y buscan servicios. Desde clases particulares hasta reparaciones del hogar, nuestro objetivo es promover la economía colaborativa.",
    btnContacto: "Contáctanos",
    btnVerServicios: "Ver servicios"
  },
  ca: {
    titulo: "Serveis a Vacarisses",
    subtitulo: "Connectant persones amb solucions locals",
    quienesTitulo: "Qui som?",
    quienesTexto:
      "Som una plataforma local creada per facilitar la connexió entre veïns de Vacarisses que ofereixen i cerquen serveis. Des de classes particulars fins a reparacions domèstiques, el nostre objectiu és promoure l'economia col·laborativa.",
    btnContacto: "Contacta'ns",
    btnVerServicios: "Veure serveis"
  }
};

function cambiarIdioma(lang) {
  const t = textos[lang];
  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("subtitulo").textContent = t.subtitulo;
  document.getElementById("quienesTitulo").textContent = t.quienesTitulo;
  document.getElementById("quienesTexto").textContent = t.quienesTexto;
  document.getElementById("btnContacto").textContent = t.btnContacto;
  document.getElementById("btnVerServicios").textContent = t.btnVerServicios;

  // Opcional: Guardar preferencia en localStorage
  localStorage.setItem("idioma", lang);
}

// Cargar idioma guardado al iniciar
document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  cambiarIdioma(idiomaGuardado);
});

// Botón de subida
  const btnSubir = document.getElementById('btnSubir');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnSubir.classList.add('visible');
    } else {
      btnSubir.classList.remove('visible');
    }
  });

  btnSubir.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });




