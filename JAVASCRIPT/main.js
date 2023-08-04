//seccion DOOM
let juegosenoferta = document.getElementById("juegosenoferta");
let superofertas = document.getElementById("ofertazas");
let cerrarofertas = document.getElementById("cerrarofertas");
let imputoprecio = document.getElementById("imputprecio");
let pulsarboton = document.getElementById("pulsar");
let ordenofertas = document.getElementById("ordenofertas");
let pulsarboton2 = document.getElementById("pulsar2");
let imputprecio2 = document.getElementById("imputprecio2");
let resultadoimpuesto1 = document.getElementById("resultadoimpuesto1");
let resultadoimpuesto2 = document.getElementById("resultadoimpuesto2");
let presentacionrecomendacion = document.getElementById(
  "presentacionrecomendacion"
);

//seccion function

//esto pertenece a una function que me crea un div con una card para mostrar mi array

function revelarofertas(array) {
  superofertas.innerHTML = "";
  for (let juego of array) {
    let ofertas = document.createElement("div");
    ofertas.classList.add("espacio", "col-6", "col-md-4", "col-lg-3");
    ofertas.innerHTML = `
        <div id="${juego.id}" class="card" style="width: 13rem;">
     <img src="${juego.img}" class="card-img-top imagenigual" alt="...">
        <div class="card-body">
        <h5 class="card-title">${juego.nombre}</h5>
       <p class="card-text">OFERTAS</p>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">precio original ${juego.precioantes}</li>
        <li class="list-group-item">precio ahora ${juego.precioahora}</li>
        <li class="list-group-item">precio mas impuestos $${juego.precioimpuesto}</li>
      </ul>
        `;
    superofertas.appendChild(ofertas);
  }
}

//esto pertenece a una function que me crea un div con una card para mostrar mi array y ademas agregarle un sweet alert

//en un principio quise hacer un modal pero me tiraba error en la parte del modal y al no poder solucionarlo termine usando cards
function recomendacionesespeciales(array) {
  presentacionrecomendacion.innerHTML = "";
  for (let recomendacion of array) {
    let detalles = document.createElement("div");
    detalles.classList.add("espacio", "col-12", "col-md-6", "col-lg-4");
    detalles.innerHTML = `

            <div id="${recomendacion.id}"  class="card" style="width: 18rem;">
              <img class="card-img-top" src="${recomendacion.imagen}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${recomendacion.nombre}</h5>
                <hr class="featurette-divider">
                <p>${recomendacion.genero}</p>
                <hr class="featurette-divider">
                <p>${recomendacion.precio}</p>
                <hr class="featurette-divider">
                <p>${recomendacion.oferta}</p>
                <button id="agregarBtn${recomendacion.id}" class="btn btn-primary">mas informacion</button>
              </div>
            </div>
               `;

    presentacionrecomendacion.appendChild(detalles);

    let agregarBtn = document.getElementById(`agregarBtn${recomendacion.id}`);

    agregarBtn.addEventListener("click", () => {
      detallado(recomendacion);
    });
  }
}

function detallado(recomendacion) {
  Swal.fire({
    title: `${recomendacion.nombre}`,
    text: `${recomendacion.choclotexto}`,
    imageUrl: `${recomendacion.imagen2}`,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}

recomendacionesespeciales(recomendaciones);

//esto pertenece a ofertas

function ordenarMayorMenor(array) {
  const mayorMenor = [].concat(array);
  mayorMenor.sort((a, b) => b.precioimpuesto - a.precioimpuesto);
  revelarofertas(mayorMenor);
}

function ordenarMenorMayor(array) {
  const menorMayor = [].concat(array);
  menorMayor.sort((a, b) => a.precioimpuesto - b.precioimpuesto);
  revelarofertas(menorMayor);
}

//seccion eventos

juegosenoferta.onclick = () => {
  revelarofertas(juegosoferta);
};
cerrarofertas.onclick = () => {
  superofertas.innerHTML = "";
};
ordenofertas.addEventListener("change", () => {
  console.log(ordenofertas.value);
  if (ordenofertas.value == 1) {
    ordenarMenorMayor(juegosoferta);
  } else if (ordenofertas.value == 2) {
    ordenarMayorMenor(juegosoferta);
  } else {
    revelarofertas(juegosoferta);
  }
});

//esto pertenece a la calculadora de impuestos

pulsarboton.onclick = function () {
  resultadoimpuesto1.innerText = `$ ${imputoprecio.value * 1.53}`;
  imputoprecio.value = ``;
};

pulsarboton2.onclick = function () {
  resultadoimpuesto2.innerText = `$ ${imputprecio2.value * 1.75}`;
  imputprecio2.value = ``;
};

setTimeout(() => {
  Toastify({
    text: "Bienvenido usuario ¡Disfrute su estadia!",

    duration: 2500,
  }).showToast();
}, 2000);
