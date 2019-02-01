 ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*

  Pineapple por Esteban Devia

    Esto es un proyecto en el cual creo un layout para todos mis juegos
    futuros.


*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////

//Aqui llamo a la funcion init cuando carga totalmente la pagina
window.addEventListener("load", init)
var Globalkeys = {};



//Creo un constructor unas variables claves que me van a servir para obtener las categorias

//Aqui estan todas las categorias del engine
var categorias_tipos = ["texturas","modelos","materiales","objetos","cuerpos","entidades","comportamientos","personajes","controladores","jugadores"];


//Constructor Master, que tiene informacion de todas las categorias
function Master(n){

  for (var i = categorias_tipos.length - 1; i >= 0; i--) {
    this[categorias_tipos[i]] = n;
  }

  return this;

}


//Creo dos Masters, uno que me va a ayudar a tener una referencia de la base de datos,
//que me ayudara a subir items.

//y el segundo que es un objeto con todos los items que existe en el proyecto

var MasterRef = new Master(null);
var MasterJuego = new Master(null);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


//la funcion Init es donde obtengo todos los datos de Firebase y donde obtengo todos 
//los itemss

var database;

function init(event){

                InitGui();

////////////////////////////////////////////////////////////////////////

/// Este es la conexion a la base de datos. Esto se cambia para tener
/// un proyecto nuevo

  var config = {
    apiKey: "AIzaSyCcxoaOYoVrnXhdhnWqyMADvqu20u_oxYs",
    authDomain: "pineapple-a48a3.firebaseapp.com",
    databaseURL: "https://pineapple-a48a3.firebaseio.com",
    projectId: "pineapple-a48a3",
    storageBucket: "pineapple-a48a3.appspot.com",
    messagingSenderId: "678138745755"
  };

  firebase.initializeApp(config);

////////////////////////////////////////////////////////////////////////

  database = firebase.database();

  //Obteniendo todas las referencias y guardandolas en el master


 for(var indiceCategorias = 0;indiceCategorias < categorias_tipos.length; indiceCategorias+=1){

    MasterRef[categorias_tipos[indiceCategorias]] = database.ref(categorias_tipos[indiceCategorias]);

   }

  setList();

}


//En esta parte obtengo todos los items y los guardo en el MasterJuego.
var indiceCategoriasLista = 0;
function setList(){

  var CategoriasCase = categorias_tipos[indiceCategoriasLista];


      MasterRef[CategoriasCase].on('value',function(data){

            var keys = Object.keys(data.val());

            Globalkeys[CategoriasCase] = Object.keys(data.val());

            console.log(Globalkeys)

            //console.log(keys[categorias_tipos[indiceCategoriasLista]])

            var DataToArray = [];

            for (var i = keys.length - 1; i >= 0; i--) {
              DataToArray.push(data.val()[keys[i]]);
            }

            MasterJuego[CategoriasCase] = DataToArray.reverse();

            if (indiceCategoriasLista<categorias_tipos.length-1){
              indiceCategoriasLista += 1;
              setList();
            }
            else
            {
              console.log("🏓");
            }

          },function(err){console.error(err)});

      }

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

//Funcion para agregar un nuevo item a alguna categoria

function nuevoItem(categoria,item){

  MasterRef[categoria].push(item);

}