//seccion class
class Juego {
  constructor(id, nombre, oldprice, newprice, impuesto, imagen) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precioantes = oldprice),
      (this.precioahora = newprice),
      (this.precioimpuesto = impuesto);
    this.img = imagen;
  }
}

class recomendacion {
  constructor(
    id,
    nombre,
    genero,
    precio,
    oferta,
    imagen,
    imagen2,
    choclotexto
  ) {
    (this.id = id),
      (this.nombre = nombre),
      (this.genero = genero),
      (this.precio = precio),
      (this.oferta = oferta),
      (this.imagen = imagen),
      (this.imagen2 = imagen2),
      (this.choclotexto = choclotexto);
  }
}

//creacion de arrays
const juegosoferta = [];

const cargarEstanteria = async () => {
  const response = await fetch("./juegosqueestandeoferta.json");
  const data = await response.json();

  for (let juego of data) {
    let juegoNuevo = new Juego(
      juego.id,
      juego.nombre,
      juego.oldprice,
      juego.newprice,
      juego.impuesto,
      juego.imagen
    );
    juegosoferta.push(juegoNuevo);
  }
};
cargarEstanteria();

const recomendacion1 = new recomendacion(
  1,
  "titulo: Fire Emblem Engage",
  "genero: rol tactico",
  "su precio estimado es de: $17.654,67",
  "aun no se planifico una oferta para este juego",
  "./assets/image/NSwitch_FireEmblemEngage_03 (1).jpg",
  "./assets/image/maxresdefault (2).jpg",
  "fire emblem engage es un juego táctico en donde mueves a tus unidades por casillas y el cual cuenta con un gran abanico de dificultades. Un movimiento en falso podría costarle la vida a tus unidades. La principal novedad de este nuevo juego es fusionarte con personajes de entregas pasadas, así que si eres nuevo podrás conocer personajes antiguos y si eres un veterano tal vez te encuentres con un viejo amigo"
);
const recomendacion2 = new recomendacion(
  2,
  "titulo: Kirby and the Forgotten land",
  "genero: aventura",
  "su precio estimado es de: $17.654,67",
  "este juego aun no se descubrio en oferta",
  "./assets/image/HOTTFDJESNEPLBSRAS6G5HWS3I.jpg",
  "./assets/image/963ce770-73c8-11ec-bfff-f73567951644.cf.jpg",
  "kirby and the forgotten land es el salto al mundo abierto de kirby, un juego plataformero de aventura al mas estilo mario pero... !con poderes¡ que lo colorido no te engañe, algo oscuro podria esconderse"
);
const recomendacion3 = new recomendacion(
  3,
  "titulo: Monster Hunter Rise Sunbreak",
  "genero: rol de accion",
  "su precio estimado es de: $11.514,78",
  "este juego aparece recurrentemente en oferta. Estate atento cazador",
  "./assets/image/maxresdefault.jpg",
  "./assets/image/MHR_Sunbreak_Seregios_02_bmp_jpgcopy.0.jpg",
  "Monster hunter rise es el juego principal y sunbreak una expansión con abundante contenido. El juego trata de un cazador de bestias que tendrá que salvar a su aldea de la destrucción de estos terribles monstruos, un juego con muchas opciones a la hora de jugar y que tiene un amplio margen de mejora para tu personaje dándote horas y horas de farmeo"
);
const recomendacion4 = new recomendacion(
  4,
  "titulo: Metroid Prime Remastered",
  "genero: accion FPS",
  "su precio estimado es de: $11.764,17",
  "nuestro analisis indica que este juego aun no estuvo en oferta",
  "./assets/image/maxresdefault (1).jpg",
  "./assets/image/El-video-de-comparacion-de-Metroid-Prime-Remastered-muestra-cuanto.jpg",
  "metroid prime remastered es el relanzamiento pero muy en HD de su versión de gamecube. Un shooter al mas clásico estilo metroidvania, donde conseguirás poderes para poder seguir avanzando por zonas antes inaccesibles y así derrotar a poderosos jefes"
);
const recomendacion5 = new recomendacion(
  5,
  "titulo: Pokemon Arceus",
  "genero: RPG de acción",
  "su precio estimado es de: $17.654,67",
  "que los juegos de pokemon bajen de precio es una leyenda que nunca ocurrira",
  "./assets/image/pokemon-legends-arceus-and-pokemon-diamond-pearl-remakes-get_dxag.jpg",
  "./assets/image/1629702254_967490_1629702573_noticia_normal.jpg",
  "un aire fresco a la saga pokemon es lo que define a pokemon arceus. En este juego viajaremos al pasado para cumplir la mision de dios(arceus) con el fin de ayudar a completar la primera pokedex de la region hisui apodada en un futuro como sinnoh. Si bien el juego carece un poco de online, el mundo semi abierto y lo disfrutable que es capturar pokemon lo hace un juego muy adictivo"
);

const recomendaciones = [
  recomendacion1,
  recomendacion2,
  recomendacion3,
  recomendacion4,
  recomendacion5,
];
