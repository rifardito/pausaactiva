/*
 * Pausa Activa - JavaScript de la web
 * ------------------------------------
 * Solo hay una función: los botones A / A+ / A++ que cambian el tamaño
 * del texto y recuerdan la elección en este navegador (localStorage).
 *
 * El tamaño elegido se aplica antes de dibujar la página con un pequeño
 * script que está en el <head> de cada HTML. No hace falta tocar nada aquí.
 */
(() => {
  "use strict";

  const sizes = { md: "100%", lg: "112.5%", xl: "125%" };
  const buttons = document.querySelectorAll("[data-textsize]");

  const apply = (value) => {
    const size = sizes[value] ? value : "md";
    document.documentElement.style.fontSize = sizes[size];
    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.textsize === size),
      );
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.textsize;
      apply(value);
      try {
        localStorage.setItem("pa-text-size", value);
      } catch (error) {
        /* Sin acceso a localStorage: el cambio funciona, pero no se recuerda. */
      }
    });
  });

  let saved = "md";
  try {
    saved = localStorage.getItem("pa-text-size") || "md";
  } catch (error) {
    /* Sin acceso a localStorage. */
  }
  apply(saved);
})();
