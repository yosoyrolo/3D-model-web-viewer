 
var Gui = {};

const PanelColor = "#6C6C6C";
const PanelDarkColor = "#434343";
const PanelBorderColor = "#626262";

function InitGui(){

var cantidadContenedores = categorias_tipos.length;
var MasterJuegoKeys = Object.keys(MasterJuego);

Gui.TopPart = {div: document.createElement("DIV")}
Gui.BottomPart = {div: document.createElement("DIV")};


//////////   Top Part


Gui.TopPart.div.style.height = "70vh";
Gui.TopPart.div.style.backgroundColor = "none";
Gui.TopPart.div.style.border = "solid";
Gui.TopPart.div.style.borderColor = PanelBorderColor;
Gui.TopPart.div.style.boxSizing = "border-box";
Gui.TopPart.div.style.padding = "0";
Gui.TopPart.div.style.border = "0";
Gui.TopPart.div.style.overflow = "hidden";
//////////

		//////////// 3D Viewer

			Gui.TopPart.viewer = {div: document.createElement("DIV")};
			Gui.TopPart.viewer.div.style.position = "absolute";
			Gui.TopPart.viewer.div.style.backgroundColor = "none";
			Gui.TopPart.viewer.div.style.height = "70vh";
			Gui.TopPart.viewer.div.style.width = "60vw";
			Gui.TopPart.viewer.div.style.zIndex = "1";

			Gui.TopPart.div.appendChild(Gui.TopPart.viewer.div);

			initWorld();

		////////////

		//////////// Inspector

			Gui.TopPart.inspector = {div: document.createElement("DIV")};
			Gui.TopPart.inspector.div.style.position = "absolute";
			Gui.TopPart.inspector.div.style.backgroundColor = PanelColor;
			Gui.TopPart.inspector.div.style.height = "70vh";
			Gui.TopPart.inspector.div.style.width = "40vw";
			Gui.TopPart.inspector.div.style.zIndex = "0";
			Gui.TopPart.inspector.div.style.left = "60vw";
			Gui.TopPart.inspector.div.style.textAlign = "center";
			Gui.TopPart.inspector.div.style.overflowY = "scroll";
			Gui.TopPart.inspector.div.style.boxSizing = "border-box";
			Gui.TopPart.div.appendChild(Gui.TopPart.inspector.div);

		////////////

//////////   Bottom Part

Gui.BottomPart.div.style.position = "absolute";
Gui.BottomPart.div.style.height = "30vh";
Gui.BottomPart.div.style.width = "100vw";
Gui.BottomPart.div.style.top = "70vh";
Gui.BottomPart.div.style.padding = "0";
Gui.BottomPart.div.style.border = "0";
Gui.BottomPart.div.style.backgroundColor = PanelColor;
Gui.BottomPart.div.style.border = "solid";
Gui.BottomPart.div.style.borderColor = PanelBorderColor;
Gui.BottomPart.div.style.boxSizing = "border-box";











		////////////
			Gui.BottomPart.topScroll = {div: document.createElement("DIV")};
			Gui.BottomPart.topScroll.div.style.position = "absolute";
			Gui.BottomPart.topScroll.div.style.backgroundColor = PanelDarkColor;
			Gui.BottomPart.topScroll.div.style.height = "32px";
			Gui.BottomPart.topScroll.div.style.width = "100vw";
			Gui.BottomPart.topScroll.div.style.zIndex = "2";


			//////////

				var MasterJuegoKeysReverse = MasterJuegoKeys.reverse();

				for (var i = cantidadContenedores - 1; i >= 0; i--) {
					Gui.BottomPart.topScroll[MasterJuegoKeys[i]] = {
						div: document.createElement("DIV")
					};

					var TabColor = "white";

					var ThisDiv = Gui.BottomPart.topScroll[MasterJuegoKeysReverse[i]].div;

					ThisDiv.style.position = "absolute";
					ThisDiv.style.width = (100/cantidadContenedores).toString()+"vw";
					ThisDiv.style.height = "32px"
					ThisDiv.style.left = ((100/cantidadContenedores)*i).toString()+"vw";
					ThisDiv.style.backgroundColor = PanelDarkColor;

					ThisDiv.style.textAlign = "center";
					ThisDiv.style.verticalAlign = "text-bottom";
					ThisDiv.style.textTransform = "capitalize";
					ThisDiv.style.lineHeight = "32px"
					ThisDiv.style.overflow = "hidden";

					ThisDiv.style.borderTop = "5px solid" + TabColor;



					ThisDiv.innerHTML = MasterJuegoKeysReverse[i];

					ThisDiv.onclick = function(){
						console.log(this.innerHTML);

						var MasterJuegoKeysReverse = MasterJuegoKeys.reverse();

						for (var i = cantidadContenedores - 1; i >= 0; i--) {

							var ThisDiv = Gui.BottomPart.topScroll[MasterJuegoKeysReverse[i]].div;
							ThisDiv.style.backgroundColor = PanelDarkColor;

						}

						this.style.backgroundColor = PanelColor;

						crearAssets(MasterJuego[this.innerHTML].length,MasterJuego[this.innerHTML],this.innerHTML);

					};


					Gui.BottomPart.topScroll.div.appendChild(ThisDiv);
				}

			//////////

			Gui.BottomPart.AssetsPanel = {div: document.createElement("DIV")};

			Gui.BottomPart.AssetsPanel.div.style.position = "absolute";
			Gui.BottomPart.AssetsPanel.div.style.height = "100%";
			Gui.BottomPart.AssetsPanel.div.style.width = "100vw";
			Gui.BottomPart.AssetsPanel.div.style.backgroundColor = PanelColor;
			Gui.BottomPart.AssetsPanel.div.style.overflowX = "scroll";
			Gui.BottomPart.AssetsPanel.div.style.boxSizing = "border-box";
			Gui.BottomPart.AssetsPanel.div.style.whiteSpace = "nowrap";
			Gui.BottomPart.AssetsPanel.div.style.padding = "16px";
			Gui.BottomPart.AssetsPanel.div.style.paddingTop = "48px";
			Gui.BottomPart.AssetsPanel.div.style.zIndex = "1";
			Gui.BottomPart.AssetsPanel.div.style.borderOpacity = "1";
			//Gui.BottomPart.AssetsPanel.div.style.overflow = "scroll";


			//////////

				Gui.BottomPart.AssetsPanel.elementos = [];


			//////////

		////////////


//////////

document.body.appendChild(Gui.TopPart.div);
document.body.appendChild(Gui.BottomPart.div);

Gui.BottomPart.div.appendChild(Gui.BottomPart.topScroll.div);
Gui.BottomPart.div.appendChild(Gui.BottomPart.AssetsPanel.div);

};


	var globalAsset;
	var globalIndex;
	var globalTextureInfo;
	var globalModelDisplay;


function crearAssets(numeroDeAssets,info,categoria){


	for (var i = Gui.BottomPart.AssetsPanel.elementos.length-1; i >= 0; i--) {

		var currentDiv = Gui.BottomPart.AssetsPanel.elementos[i];
		Gui.BottomPart.AssetsPanel.div.removeChild(currentDiv);
	}

	Gui.BottomPart.AssetsPanel.elementos = [];

	////////////////Boton de crear asset
 var modelo_info; 

	function crearBotonAdd(categoria,item,numeroDeAssets){

	Gui.BottomPart.AssetsPanel.elementos[0] = document.createElement("DIV");
	var currentDiv = Gui.BottomPart.AssetsPanel.elementos[0];


		currentDiv.style.width = "128px";
		currentDiv.style.height = "80%";
		currentDiv.style.display = "inline-block";
		currentDiv.style.position = "relative";
		currentDiv.style.overflow = "hidden";
		currentDiv.style.margin = "0";
		currentDiv.style.backgroundRepeat = "no-repeat";
		currentDiv.style.backgroundImage = "url('"+plusSign+"')";
		currentDiv.onclick = function(){

				switch(categoria){

				case "texturas":
				var ThisInput = document.createElement("INPUT");

					ThisInput.style.position = "absolute";
					ThisInput.style.opacity = "0";
					ThisInput.style.width = "100%";
					ThisInput.style.height = "100%";
					ThisInput.type = "file";

					ThisInput.onchange = function(){

						  var textura_info = ThisInput.files[0];

						  globalTextureInfo = textura_info;

								var fReader = new FileReader();

								  fReader.readAsDataURL(textura_info);


								                fReader.onloadend = function(event){

								                	//console.log(event.target.result);

								                	var date_new = new Date();

								                	var item = {
								                		nombre: globalTextureInfo.name,
								                		textura: event.target.result
								                	}

								                	nuevoItem("texturas",item)
								                	crearAssets(MasterJuego["texturas"].length,MasterJuego["texturas"],"texturas");
								                	Gui.BottomPart.topScroll["texturas"].div.style.backgroundColor = PanelColor;

								                }


					}

					currentDiv.appendChild(ThisInput);

				break;

				case "modelos":
				var ThisInput = document.createElement("INPUT");

					ThisInput.style.position = "absolute";
					ThisInput.style.opacity = "0";
					ThisInput.style.width = "100%";
					ThisInput.style.height = "100%";
					ThisInput.type = "file";

					ThisInput.onchange = function(){

						  modelo_info = ThisInput.files[0];

								var fReader = new FileReader();

								  fReader.readAsDataURL(modelo_info);


								                fReader.onloadend = function(event){

								                	modelo_texto = event.target.result;

								                	console.log(modelo_info);

								                	var item = {
								                		nombre: modelo_info.name,
								                		modelo: modelo_texto
								                	}

								                	nuevoItem("modelos",item)
								                	crearAssets(MasterJuego["modelos"].length,MasterJuego["modelos"],"modelos");
								                	Gui.BottomPart.topScroll["modelos"].div.style.backgroundColor = PanelColor;
								                	//console.log(event.target.result);

								                }


					}

					currentDiv.appendChild(ThisInput);

				break;

				case "materiales":

					currentDiv.onclick = function(){

						var date_new = new Date();

						var FullDate = date_new.getFullYear().toString() + date_new.getMonth().toString() + date_new.getDay().toString() + date_new.getHours().toString() + date_new.getMinutes().toString() + date_new.getSeconds().toString()

						var new_mat = {
							color: "#ffffff",
							colormap: 0,
							specular: "#ffffff",
							specularmap: 0,
							normalmap: 0 
						}


	                	var item = {
	                		nombre: "toon_"+ FullDate,
	                		material: new_mat
	                	}

	                	nuevoItem("materiales",item)
	                	crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
	                	Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;
					
					}

				break;
				default:

				nuevoItem(categoria,item);
				crearAssets(MasterJuego[categoria].length,MasterJuego[categoria],categoria);
				Gui.BottomPart.topScroll[categoria].div.style.backgroundColor = PanelColor;

			}

		}

		Gui.BottomPart.AssetsPanel.div.appendChild(currentDiv);
	}

	var new_asset = "prueba";


	var new_item = {
		nombre: "Nuevo_item",
		asset: new_asset
	};

	crearBotonAdd(categoria,new_item);

	////////////////////////////////Todos los assets existentes:

	for (var i = numeroDeAssets; i >= 1; i--) {

		Gui.BottomPart.AssetsPanel.elementos[i] = document.createElement("DIV");


		var currentDiv = Gui.BottomPart.AssetsPanel.elementos[i];
		currentDiv.AssetId = i-1;

		currentDiv.style.width = "128px";
		currentDiv.style.height = "80%";
		currentDiv.style.display = "inline-block";
		currentDiv.style.overflow = "hidden";
		currentDiv.style.border = "dashed";
		currentDiv.style.margin = "10px";
		currentDiv.style.borderWidth = "2px";
		currentDiv.style.borderColor = PanelDarkColor;

		var nameDiv = document.createElement("DIV");

		nameDiv.innerHTML = info[i-1].nombre;
		nameDiv.style.width = "128px";
		nameDiv.style.whiteSpace = "nowrap";
		//nameDiv.textAlign = "center";
		nameDiv.style.overflow = "hidden";
		nameDiv.style.position = "absolute";

		currentDiv.appendChild(nameDiv);

		if (categoria == "texturas"){

					  currentDiv.KeyId = Globalkeys.texturas[currentDiv.AssetId];
                      var new_image = document.createElement("IMG");
                      new_image.setAttribute("src", info[i-1].textura);

                      currentDiv.appendChild(new_image);

                      new_image.width = 96;
                      new_image.height = 96;

                      new_image.style.position = "relative";
                      new_image.style.left = "16px";
                      new_image.style.top = "30px";

                      currentDiv.onclick = function(){

                      	var Inspector = Gui.TopPart.inspector.div;

                 		Inspector.innerHTML = "";

                      	var title = document.createElement("H1");

                      	title.innerHTML = "Textura";

                      	var titleName = document.createElement("H2");

                      	titleName.innerHTML = "Nombre:";

                      	var NameInput = document.createElement("INPUT");

                      	NameInput.value = this.textContent;
                      	NameInput.AssetId = this.AssetId;
                      	NameInput.KeyId = this.KeyId;

                      	NameInput.style.border = "2px solid "+PanelBorderColor;
						NameInput.style.borderRadius = "4px";
						NameInput.style.width = "80%";
						NameInput.style.height = "32px";
						NameInput.style.backgroundColor = PanelDarkColor;
						NameInput.style.color = "white";
						NameInput.style.fontSize = "15pt";

						NameInput.onchange = function(val){

							console.log(this.value);

							database.ref("texturas/"+this.KeyId+"/nombre").set(this.value);
							crearAssets(MasterJuego["texturas"].length,MasterJuego["texturas"],"texturas");
							Gui.BottomPart.topScroll["texturas"].div.style.backgroundColor = PanelColor;

						}

						var PreviewImage = document.createElement("IMG");

						PreviewImage.src = MasterJuego.texturas[this.AssetId].textura;

						PreviewImage.style.width = "50%";


						var DeleteElementButton = document.createElement("DIV");

						DeleteElementButton.AssetId = this.AssetId;
						DeleteElementButton.AssetId = this.KeyId;

						DeleteElementButton.innerHTML = "Borrar Textura";
						DeleteElementButton.style.backgroundColor = "#FF644E";

						DeleteElementButton.style.position = "absolute";

						DeleteElementButton.style.width = "50%";
						DeleteElementButton.style.height = "32px";
						DeleteElementButton.style.left = "25%";
						DeleteElementButton.style.lineHeight = "32px";

						DeleteElementButton.onclick = function(){

							database.ref("texturas/"+this.AssetId).remove();

							var Inspector = Gui.TopPart.inspector.div;

							Inspector.innerHTML = "";


							crearAssets(MasterJuego["texturas"].length,MasterJuego["texturas"],"texturas");
							Gui.BottomPart.topScroll["texturas"].div.style.backgroundColor = PanelColor;

						}



                      	Inspector.appendChild(title)
                      	Inspector.appendChild(titleName)
                      	Inspector.appendChild(NameInput)
                      	Inspector.appendChild(PreviewImage)
                      	Inspector.appendChild(DeleteElementButton)

                      }
		}

		if (categoria == "modelos"){

			currentDiv.KeyId = Globalkeys.modelos[currentDiv.AssetId];
                      var new_image = document.createElement("IMG");
                      new_image.setAttribute("src", iconos[categoria]);

                      new_image.width = 96;
                      new_image.height = 96;

                      new_image.style.position = "relative";
                      new_image.style.left = "16px";
                      new_image.style.top = "30px";

                      new_image.style.position = "relative";
                      new_image.style.left = "16px";
                      new_image.style.top = "30px";

                      currentDiv.appendChild(new_image);

			globalAsset = info[i-1];


			currentDiv.onclick = function(){

						//GlobalMaterial.map = 0;
						//GlobalMaterial.aomap = 0;


						var Inspector = Gui.TopPart.inspector.div;

                 		Inspector.innerHTML = "";

                      	var title = document.createElement("H1");

                      	title.innerHTML = "Modelo";

                      	var titleName = document.createElement("H2");

                      	titleName.innerHTML = "Nombre:";

                      	var NameInput = document.createElement("INPUT");

                      	NameInput.value = this.textContent;
                      	NameInput.AssetId = this.AssetId;
                      	NameInput.KeyId = this.KeyId;

                      	NameInput.style.border = "2px solid "+PanelBorderColor;
						NameInput.style.borderRadius = "4px";
						NameInput.style.width = "80%";
						NameInput.style.height = "32px";
						NameInput.style.backgroundColor = PanelDarkColor;
						NameInput.style.color = "white";
						NameInput.style.fontSize = "15pt";

						NameInput.onchange = function(val){

							console.log(this.value)

							database.ref("modelos/"+this.KeyId+"/nombre").set(this.value);
							crearAssets(MasterJuego["modelos"].length,MasterJuego["modelos"],"modelos");
							Gui.BottomPart.topScroll["modelos"].div.style.backgroundColor = PanelColor;

						}


						var DeleteElementButton = document.createElement("DIV");

						DeleteElementButton.AssetId = this.AssetId;
						DeleteElementButton.AssetId = this.KeyId;

						DeleteElementButton.innerHTML = "Borrar Modelo";
						DeleteElementButton.style.backgroundColor = "#FF644E";

						DeleteElementButton.style.position = "absolute";

						DeleteElementButton.style.width = "50%";
						DeleteElementButton.style.height = "32px";
						DeleteElementButton.style.left = "25%";
						DeleteElementButton.style.lineHeight = "32px";

						DeleteElementButton.onclick = function(){

							database.ref("modelos/"+this.AssetId).remove();

							var Inspector = Gui.TopPart.inspector.div;

							Inspector.innerHTML = "";
							scene.remove(globalModelDisplay);


							crearAssets(MasterJuego["modelos"].length,MasterJuego["modelos"],"modelos");
							Gui.BottomPart.topScroll["modelos"].div.style.backgroundColor = PanelColor;

						}



                      	Inspector.appendChild(title)
                      	Inspector.appendChild(titleName)
                      	Inspector.appendChild(NameInput)
                      	Inspector.appendChild(DeleteElementButton)



				console.log(this.AssetId);

				scene.remove(globalModelDisplay);

				var clickObject = getAssetByName(this.textContent,"modelos");

				// instantiate a loader
				var loader = new THREE.OBJLoader();

				// load a resource
				loader.load(
					// resource URL
					clickObject.modelo,
					// called when resource is loaded
					function ( object ) {

						var childOuline;

						childOuline = object.clone();

					  object.traverse( function ( child ) {

					        if ( child instanceof THREE.Mesh ) {

					            child.material = GlobalMaterial;

					     }
					    });

					  childOuline.traverse( function ( child ) {
					        if ( child instanceof THREE.Mesh ) {

					            child.material = outline_material;

					     }
					  });

					  globalModelDisplay = new THREE.Group();
					  globalModelDisplay.add(object);

					  globalModelDisplay.add(childOuline)

						scene.add( globalModelDisplay );


					},
					// called when loading is in progresses
					function ( xhr ) {

						console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

					},
					// called when loading has errors
					function ( error ) {

						console.log( 'An error happened' );

					}
				);


			}

		}


		if (categoria == "materiales"){

					  currentDiv.KeyId = Globalkeys.materiales[currentDiv.AssetId];
                      var new_image = document.createElement("IMG");
                      new_image.setAttribute("src", iconos[categoria]);

                      new_image.width = 96;
                      new_image.height = 96;

                      new_image.style.position = "relative";
                      new_image.style.left = "16px";
                      new_image.style.top = "30px";

                      new_image.style.position = "relative";
                      new_image.style.left = "16px";
                      new_image.style.top = "30px";

                      currentDiv.appendChild(new_image);

                      currentDiv.onclick = function(){

                      	var Inspector = Gui.TopPart.inspector.div;

                 		Inspector.innerHTML = "";

                      	var title = document.createElement("H1");

                      	title.innerHTML = "Material";

                      	var titleName = document.createElement("H2");

                      	titleName.innerHTML = "Nombre:";

                      	var NameInput = document.createElement("INPUT");


                      	NameInput.value = this.textContent;
                      	NameInput.AssetId = this.AssetId;
                      	NameInput.KeyId = this.KeyId;

                      	GlobalMaterial.color = new THREE.Color(MasterJuego.materiales[this.AssetId].material.color);
                      	GlobalMaterial.specular = new THREE.Color(MasterJuego.materiales[this.AssetId].material.specular);
                      	//GlobalMaterial.ao = new THREE.Color(MasterJuego.materiales[this.AssetId].material.ao);

                      	if (MasterJuego.materiales[this.AssetId].material.colormap!=0){
	                      	var thisColor = getIdbyKey("texturas",MasterJuego.materiales[this.AssetId].material.colormap);
							GlobalMaterial.map = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);
                      	}
						else{
							GlobalMaterial.map = new THREE.TextureLoader().load(WhiteTex);
                      	}


                      	if (MasterJuego.materiales[this.AssetId].material.specularmap!=0){
	                      	var thisColor = getIdbyKey("texturas",MasterJuego.materiales[this.AssetId].material.specularmap);
							GlobalMaterial.specularMap = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);
                      	}
						else{
							GlobalMaterial.specularMap = new THREE.TextureLoader().load(WhiteTex);
                      	}



                      	if (MasterJuego.materiales[this.AssetId].material.normalmap!=0){
	                      	var thisColor = getIdbyKey("texturas",MasterJuego.materiales[this.AssetId].material.normalmap);
							GlobalMaterial.normalMap = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);
                      	}
						else{
							GlobalMaterial.normalMap = null;
                      	}





                      	NameInput.style.border = "2px solid "+PanelBorderColor;
						NameInput.style.borderRadius = "4px";
						NameInput.style.width = "80%";
						NameInput.style.height = "32px";
						NameInput.style.backgroundColor = PanelDarkColor;
						NameInput.style.color = "white";
						NameInput.style.fontSize = "15pt";

						NameInput.onchange = function(val){

							console.log(this.value)

							database.ref("materiales/"+this.KeyId+"/nombre").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

						}


						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//COLOR

                      	var ColorName = document.createElement("H2");

                      	ColorName.innerHTML = "Color:";

                      	var ColorPicker = document.createElement("INPUT");

                      	ColorPicker.type = "color";
                      	ColorPicker.value = MasterJuego.materiales[this.AssetId].material.color;
                      	ColorPicker.KeyId = this.KeyId;

                      	ColorPicker.onchange = function(){

							database.ref("materiales/"+this.KeyId+"/material/color").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							GlobalMaterial.color = new THREE.Color(this.value);

                      	}


                      	console.log(ColorPicker.value);

                      	ColorPicker.style.width = "80%"

						var ColorImage = document.createElement("IMG");

							if (MasterJuego.materiales[this.AssetId].material.colormap!=0){

								var ColorValue = MasterJuego.materiales[this.AssetId].material.colormap;

								var thisColor = getIdbyKey("texturas",ColorValue);

								ColorImage.src = MasterJuego.texturas[thisColor].textura;

								GlobalMaterial.map = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							}
							else{
								ColorImage.src = BlackTex;

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;
								GlobalMaterial.map = new THREE.TextureLoader().load(WhiteTex);
							}

						ColorImage.style.width = "25%";


						var ColorSelector = document.createElement("SELECT");
						ColorSelector.KeyId = this.KeyId;
						ColorSelector.style.width = "80%";
						ColorSelector.colorPreview = ColorImage;

                      		var BlackOption = document.createElement("OPTION");
                      		BlackOption.value = 0;
                      		BlackOption.innerHTML = "ninguna";

                      		console.log(MasterJuego.materiales[this.AssetId].material.colormap)

                      		if (MasterJuego.materiales[this.AssetId].material.colormap == 0){

                      			BlackOption.selected = true;

                      		}


                      		ColorSelector.appendChild(BlackOption);


                      	for (var i = MasterJuego.texturas.length - 1; i >= 0; i--) {

                      		var newOption = document.createElement("OPTION");
                      		newOption.value = Globalkeys["texturas"][i];
                      		newOption.innerHTML = MasterJuego.texturas[i].nombre;
                      		ColorSelector.appendChild(newOption);

                      		if (MasterJuego.materiales[this.AssetId].material.colormap==Globalkeys.texturas[i]){
                      			newOption.selected = true;
                      		}

                      	};

                      	ColorSelector.onchange = function(){
							console.log(this.value);

							database.ref("materiales/"+this.KeyId+"/material/colormap").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							if (this.value!=0){

								var thisColor = getIdbyKey("texturas",this.value);

								ColorImage.src = MasterJuego.texturas[thisColor].textura;

								var text = new THREE.TextureLoader().load( MasterJuego.texturas[thisColor].textura );
		                      	GlobalMaterial.map = text;

		                      	console.log("Change Material Color");

							}
							else{
								ColorImage.src = BlackTex;
								var text = new THREE.TextureLoader().load( WhiteTex );
								GlobalMaterial.map = text;
		                      	console.log("Change Material Color");
							}
                      	}

						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//Specular




                   	var SpecularName = document.createElement("H2");

                      	SpecularName.innerHTML = "Brillo:";

                      	var SpecularPicker = document.createElement("INPUT");

                      	SpecularPicker.type = "color";
                      	SpecularPicker.value = MasterJuego.materiales[this.AssetId].material.specular;
                      	SpecularPicker.KeyId = this.KeyId;

                      	SpecularPicker.onchange = function(){

							database.ref("materiales/"+this.KeyId+"/material/specular").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							GlobalMaterial.specular = new THREE.Color(this.value);

                      	}


                      	console.log(SpecularPicker.value);

                      	SpecularPicker.style.width = "80%"

						var SpecularImage = document.createElement("IMG");

							if (MasterJuego.materiales[this.AssetId].material.specularmap!=0){

								var SpecularValue = MasterJuego.materiales[this.AssetId].material.specularmap;

								var thisColor = getIdbyKey("texturas",SpecularValue);

								SpecularImage.src = MasterJuego.texturas[thisColor].textura;

								GlobalMaterial.specularMap = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							}
							else{
								SpecularImage.src = BlackTex;

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;
								GlobalMaterial.specularMap = new THREE.TextureLoader().load(WhiteTex);
							}

						SpecularImage.style.width = "25%";


						var SpecularSelector = document.createElement("SELECT");
						SpecularSelector.KeyId = this.KeyId;
						SpecularSelector.style.width = "80%";
						SpecularSelector.SpecularPreview = SpecularImage;

                      		var BlackSpecularOption = document.createElement("OPTION");
                      		BlackSpecularOption.value = 0;
                      		BlackSpecularOption.innerHTML = "ninguna";

                      		console.log(MasterJuego.materiales[this.AssetId].material.specularmap)

                      		if (MasterJuego.materiales[this.AssetId].material.specularmap == 0){

                      			BlackSpecularOption.selected = true;

                      		}


                      		SpecularSelector.appendChild(BlackSpecularOption);


                      	for (var i = MasterJuego.texturas.length - 1; i >= 0; i--) {

                      		var newOption = document.createElement("OPTION");
                      		newOption.value = Globalkeys["texturas"][i];
                      		newOption.innerHTML = MasterJuego.texturas[i].nombre;
                      		SpecularSelector.appendChild(newOption);

                      		if (MasterJuego.materiales[this.AssetId].material.specularmap==Globalkeys.texturas[i]){
                      			newOption.selected = true;
                      		}

                      	};

                      	SpecularSelector.onchange = function(){
							database.ref("materiales/"+this.KeyId+"/material/specularmap").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							if (this.value!=0){

								var thisColor = getIdbyKey("texturas",this.value);

								SpecularImage.src = MasterJuego.texturas[thisColor].textura;

								var text = new THREE.TextureLoader().load( MasterJuego.texturas[thisColor].textura );
		                      	GlobalMaterial.specularMap = text;

		                      	console.log("Change Material Color");

							}
							else{
								SpecularImage.src = WhiteTex;
								var text = new THREE.TextureLoader().load( WhiteTex );
								GlobalMaterial.specularMap = text;
		                      	console.log("Change Material Color");
							}
                      	}

						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//////////////////////////////////////////////////////////////
						//Normal


                   	var NormalName = document.createElement("H2");

                      	NormalName.innerHTML = "Normal:";

						var NormalImage = document.createElement("IMG");

							if (MasterJuego.materiales[this.AssetId].material.normalmap!=0){

								var NormalValue = MasterJuego.materiales[this.AssetId].material.normalmap;

								var thisColor = getIdbyKey("texturas",NormalValue);

								NormalImage.src = MasterJuego.texturas[thisColor].textura;

								GlobalMaterial.normalMap = new THREE.TextureLoader().load(MasterJuego.texturas[thisColor].textura);

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							}
							else{
								NormalImage.src = WhiteTex;

								crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
								Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;
								GlobalMaterial.normalMap = null
							}

						NormalImage.style.width = "25%";


						var NormalSelector = document.createElement("SELECT");
						NormalSelector.KeyId = this.KeyId;
						NormalSelector.style.width = "80%";
						NormalSelector.NormalPreview = NormalImage;

                      		var BlackNormalOption = document.createElement("OPTION");
                      		BlackNormalOption.value = 0;
                      		BlackNormalOption.innerHTML = "ninguna";

                      		console.log(MasterJuego.materiales[this.AssetId].material.normalmap)

                      		if (MasterJuego.materiales[this.AssetId].material.normalmap == 0){

                      			BlackNormalOption.selected = true;

                      		}


                      		NormalSelector.appendChild(BlackNormalOption);


                      	for (var i = MasterJuego.texturas.length - 1; i >= 0; i--) {

                      		var newOption = document.createElement("OPTION");
                      		newOption.value = Globalkeys["texturas"][i];
                      		newOption.innerHTML = MasterJuego.texturas[i].nombre;
                      		NormalSelector.appendChild(newOption);

                      		if (MasterJuego.materiales[this.AssetId].material.normalmap==Globalkeys.texturas[i]){
                      			newOption.selected = true;
                      		}

                      	};

                      	NormalSelector.onchange = function(){
							database.ref("materiales/"+this.KeyId+"/material/normalmap").set(this.value);
							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

							if (this.value!=0){

								var thisColor = getIdbyKey("texturas",this.value);

								NormalImage.src = MasterJuego.texturas[thisColor].textura;

								var text = new THREE.TextureLoader().load( MasterJuego.texturas[thisColor].textura );
		                      	GlobalMaterial.normalMap = text;

		                      	console.log("Change Material Color");

							}
							else{

								GlobalMaterial.normalMap = null;
		                      	console.log("Change Material Color");
							}
                      	}



                      	//////////////////////////////////////////////

						var DeleteElementButton = document.createElement("DIV");

						DeleteElementButton.AssetId = this.AssetId;
						DeleteElementButton.AssetId = this.KeyId;

						DeleteElementButton.innerHTML = "Borrar Material";
						DeleteElementButton.style.backgroundColor = "#FF644E";

						DeleteElementButton.style.position = "absolute";

						DeleteElementButton.style.width = "50%";
						DeleteElementButton.style.height = "32px";
						DeleteElementButton.style.left = "25%";
						DeleteElementButton.style.lineHeight = "32px";

						DeleteElementButton.onclick = function(){

							database.ref("materiales/"+this.AssetId).remove();

							var Inspector = Gui.TopPart.inspector.div;

							Inspector.innerHTML = "";


							crearAssets(MasterJuego["materiales"].length,MasterJuego["materiales"],"materiales");
							Gui.BottomPart.topScroll["materiales"].div.style.backgroundColor = PanelColor;

						}


                      	Inspector.appendChild(title)
                      	Inspector.appendChild(titleName)
                      	Inspector.appendChild(NameInput)
                      	Inspector.appendChild(ColorName)
                      	Inspector.appendChild(ColorImage)
                      	Inspector.appendChild(ColorPicker)
                      	Inspector.appendChild(ColorSelector)
                      	Inspector.appendChild(SpecularName)
                      	Inspector.appendChild(SpecularImage)
                      	Inspector.appendChild(SpecularPicker)
                      	Inspector.appendChild(SpecularSelector)
                      	Inspector.appendChild(NormalName)
                      	Inspector.appendChild(NormalImage)
                      	Inspector.appendChild(NormalSelector)
                      	Inspector.appendChild(DeleteElementButton)

                      }
		}

		Gui.BottomPart.AssetsPanel.div.appendChild(currentDiv);

	}

}


function getAssetByName(nom,categoria){

	var lista = MasterJuego[categoria];
	console.log(lista)

	for (var a = lista.length - 1; a >= 0; a--) {

		console.log(lista[a].nombre)

		if (lista[a].nombre == nom){
			return lista[a];
		}
	}

}


function getIdbyKey(categoria,key){

	for (var i = Globalkeys[categoria].length - 1; i >= 0; i--) {
		if (Globalkeys[categoria][i]==key){
			return i;
		}
	}

}


