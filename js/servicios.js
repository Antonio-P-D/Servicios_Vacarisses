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




