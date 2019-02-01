var MayaCameraZoom;

function MayaCamera(Container,cam){

this.CamPos = {x: 10, y: 10,z: 10};
this.CamTar = {x: 0,y: 0,z: 0};
this.zoom = 10;
this.camera = cam;
MayaCameraZoom = this.zoom;
this.CamContainer = Container;

this.update = function(){
	this.camera.position.set(MayaCameraZoom,MayaCameraZoom,MayaCameraZoom);
}

Container.onwheel = function(e){

	var newZoom = e.deltaY;

	if (newZoom > 0){

		MayaCameraZoom *= 1.09;

		console.log(MayaCameraZoom);

	}
	else{

		MayaCameraZoom /= 1.09;
		console.log(MayaCameraZoom);

	}

}

}