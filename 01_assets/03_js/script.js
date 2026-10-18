/* Menú móvil (componente drawer de Bootstrap).
   1. Mantiene aria-expanded sincronizado con el estado real del panel.
   2. Cierra el menú al activar un enlace interno, para no dejarlo abierto
      sobre la sección a la que se acaba de saltar. */
(() => {
  const drawer = document.getElementById("main-menu");
  if (drawer === null) {
    return;
  }

  const toggler = document.querySelector('.navbar-toggler[data-bs-target="#main-menu"]');

  const syncExpanded = () => {
    if (toggler !== null) {
      toggler.setAttribute("aria-expanded", drawer.hasAttribute("open") ? "true" : "false");
    }
  };

  syncExpanded();
  new MutationObserver(syncExpanded).observe(drawer, {
    attributes: true,
    attributeFilter: ["open"],
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.nav-link");
    if (link !== null && link.closest("dialog") === drawer) {
      drawer.close();
    }
  });
})();
