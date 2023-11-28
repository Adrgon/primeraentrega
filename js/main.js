//alert();

// Pelea entre dos personajes
// Goku
// Superman

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

/* let golpeGoku = Number(prompt("Gole de goku"));
let golpeSuperman = Number(prompt("Gole de superman"));
 */

//let golpe = Math.floor(Math.random() * 37);
//console.log(golpe);
//console.log(Math.round(2.50)); //
//console.log(Math.ceil(15.00001));
//console.log(Math.floor(21.999999));

const MIN_POWER = 10;
const MAX_POWER = 30;

let num = 0;

function calcularGolpe() {
  return Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}

function ambosSiguenVivos() {
  return energiaGoku > 0 && energiaSuperman > 0;
}

function supermanSigueVivo() {
  return energiaSuperman > 0;
}

while (ambosSiguenVivos()) {
  //round++;
  round += 1;
  /* let golpeGoku = Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  );
  let golpeSuperman = Math.ceil(
    Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER
  ); */
  let golpeGoku = calcularGolpe();
  let golpeSuperman = calcularGolpe();

  console.log("--------------Round " + round + "-----------------------");
  if (golpeGoku === golpeSuperman) {
    console.log("siga siga");
  } else if (golpeGoku > golpeSuperman) {
    console.log("Goku ataca con una fuerza de " + golpeGoku);
    document.write(
      "<div class='card'><img src='../images/golpeGoku.jpeg' /></div>"
    );
    //energiaSuperman = energiaSuperman - golpeGoku;
    energiaSuperman -= golpeGoku;
    if (energiaSuperman < 0) {
      energiaSuperman = 0;
    }
    console.log("la energia de Superman baja a " + energiaSuperman);
  } else {
    console.log("Superman ataca con una fuerza de " + golpeSuperman);
    document.write(
      "<div class='card'><img src='../images/golpeSuperman.jpeg' /></div>"
    );

    //energiaGoku = energiaGoku - golpeSuperman;
    energiaGoku -= golpeSuperman;
    if (energiaGoku < 0) {
      energiaGoku = 0;
    }
    console.log("la energia de Goku baja a " + energiaGoku);
  }
}

console.log("--------GANADOR------------");

if (supermanSigueVivo()) {
  console.log("Gano Superman");
  document.write(
    "<div class'ganador'><img src='../images/winSuperman.jpeg' /></div>"
  );
} else {
  console.log("Gano Goku");
  document.write(
    "<div class'ganador'><img src='../images/winGoku.jpeg' /></div>"
  );
}
