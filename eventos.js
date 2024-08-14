document.addEventListener("DOMContentLoaded", function () {
  let div = document.getElementById("saludar");
  let boton = document.getElementById("boton");

  div.addEventListener("click", function () {
    alert("Hola! Soy el Div");
  });

  // Agrego un manejador de eventos al botón y "detengo" al evento para que no llegue al div
  boton.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
