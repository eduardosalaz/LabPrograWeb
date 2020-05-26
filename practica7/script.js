var precioTotal= 0;
var gtaP = 800, owP = 500, witP = 800, skyrP = 600, rdP=700, nmsP = 700, acP = 800, mhP = 900, preP = 750;
var mensaje = "Compraste los juegos: "

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  var lista = [];
  function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("Text");
    console.log(id);
    ev.target.appendChild(document.getElementById(id));
    var cosa = parseInt(id);

    switch (cosa) {
      case 1:
        console.log("hola soy el 1");
        precioTotal += gtaP;
        lista.push("Grand Theft Auto V");
        console.log(precioTotal);
        break;
      case 2:
        console.log("hola soy el 2");  
        precioTotal += owP;
        lista.push("Overwatch");
        console.log(precioTotal);
        break;
      case 3:
        precioTotal += witP;
        console.log("hola soy el 3");  
        lista.push("The Witcher III: Wild Hunt");
        console.log(precioTotal);
        break;
      case 4:
        precioTotal += skyrP;
        lista.push("The Elder Scrolls V: Skyrim");
        console.log("hola soy el 4");  
        console.log(precioTotal);
        break;
      case 5:
        precioTotal += nmsP;
        lista.push("No Man's Sky ");
        console.log("hola soy el 5");  
        console.log(precioTotal);
        break;
      case 6:
        precioTotal += rdP;
        lista.push("Red Dead Redemption 2");
        console.log("hola soy el 6");  
        console.log(precioTotal);
        break;
      case 7:
        precioTotal += acP;
        lista.push("Assasin's Creed Odyssey");
        console.log("hola soy el 7"); 
        console.log(precioTotal);
        break;
      case 8:
        precioTotal += mhP;
        lista.push("Monster Hunter World: Iceborne");
        console.log("hola soy el 8");
        console.log(precioTotal);
        break;
      case 9:
        precioTotal += preP;
        lista.push("Prey");
        console.log("hola soy el 9");
        console.log(precioTotal);
        break;
      default:
        console.log(precioTotal);
        break;
    }
}
function mostrarRecibo(){
  var impresion ="";
  alert("Compra finalizada");
  for (let i = 0; i < (lista.length -1); i++) {
    var element = lista[i] +", ";
    impresion += element;
    console.log(element);
  }
  console.log(lista[lista.length-1]);
  impresion += lista[lista.length-1];
  document.getElementById('recibo').innerHTML = "<strong>" + mensaje + "<br>" + impresion + "<br>" + "El costo total de tus juegos es: "+ precioTotal + " pesos" + "</strong>";
}
