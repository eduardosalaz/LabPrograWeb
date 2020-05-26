var precioTotal= 0;
var gtaP = 800, owP = 500, witP = 800, skyrP = 600, rdP=700, nmsP = 700, acP = 800, mhP = 900, preP = 750;
var mensaje = "Compraste los juegos: "

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("Text");
    console.log(id);
    ev.target.appendChild(document.getElementById(id));
    var cosa = parseInt(id);
    var contador = 0;
    switch (cosa) {
      case 1:
        console.log("hola soy el 1");
        precioTotal += gtaP;
        mensaje += "Grand Theft Auto V, ";
        console.log(precioTotal);
        console.log("congrats ya te salio")
        break;
      case 2:
        console.log("hola soy el 2");  
        precioTotal += owP;
        mensaje += "Overwatch, ";
        console.log(precioTotal);
        console.log("congrats ya te salio")
        break;
      case 3:
        precioTotal += witP;
        console.log("hola soy el 3");  
        mensaje += "The Witcher III: Wild Hunt, ";
        console.log(precioTotal);
        break;
      case 4:
        precioTotal += skyrP;
        mensaje += "The Elder Scrolls V: Skyrim, ";
        console.log("hola soy el 4");  
        console.log(precioTotal);
        break;
      case 5:
        precioTotal += nmsP;
        mensaje += "No Man's Sky, ";
        console.log("hola soy el 5");  
        console.log(precioTotal);
        break;
      case 6:
        precioTotal += rdP;
        mensaje += "Red Dead Redemption 2, ";
        console.log("hola soy el 6");  
        console.log(precioTotal);
        break;
      case 7:
        precioTotal += acP;
        mensaje += "Assasin's Creed Odyssey, ";
        console.log("hola soy el 7"); 
        console.log(precioTotal);
        break;
      case 8:
        precioTotal += mhP;
        mensaje += "Monster Hunter World: Iceborne, ";
        console.log("hola soy el 8");
        console.log(precioTotal);
        break;
      case 9:
        precioTotal += preP;
        mensaje += "Prey ";
        console.log("hola soy el 9");
        console.log(precioTotal);
        break;
      default:
        console.log(precioTotal);
        break;
    }
   // acP = 800, mhP = 900, preP = 750; 
}
function mostrarRecibo(){
  alert("Compra finalizada");
  document.getElementById('recibo').innerHTML = "<strong>" + mensaje + "<br>" + "El costo total de tus juegos es: "+ precioTotal + " pesos" + "</strong>";
}
