/* Menú móvil: al activar un enlace dentro del menú, se cierra el menú. */
document.addEventListener("click", (event) => {
  const link = event.target.closest("a.nav-link");
  const drawer = link === null ? null : link.closest("dialog");
  if (drawer !== null) {
    drawer.close();
  }
});
