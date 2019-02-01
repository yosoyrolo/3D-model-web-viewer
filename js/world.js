var scene;
var camera;
var viewer;
var renderer

var GlobalMaterial;
var GlobalCubeMap;
var outline_shader = {
    uniforms: {
        "linewidth":  { type: "f", value: 0.015 },
    },
    vertex_shader: [
        "uniform float linewidth;",
        "void main() {",
            "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            "vec4 displacement = vec4( normalize( normalMatrix * normal ) * linewidth, 0.0 ) + mvPosition;",
            "gl_Position = projectionMatrix * displacement;",
        "}"
    ].join("\n"),
    fragment_shader: [
        "void main() {",
            "gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );",
        "}"
    ].join("\n")
};
var outline_material;


function initWorld(){

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



viewer = Gui.TopPart.viewer.div;

var controls = new THREE.OrbitControls( camera,  viewer);

var w = viewer.clientWidth;
var h = viewer.clientHeight;

renderer = new THREE.WebGLRenderer({ antialias: true });


//GlobalMaterial = new THREE.MeshToonMaterial();
GlobalMaterial = new THREE.MeshPhongMaterial();

GlobalMaterial.needsUpdate = true;

GlobalMaterial.map = new THREE.TextureLoader().load(WhiteTex);


/*
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


var geometry = new THREE.PlaneBufferGeometry( 10, 10, 32 );
var material = new THREE.MeshLambertMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

plane.rotation.x = 3.1416/2;

plane.position.y = -0.5;

*/

	outline_material = new THREE.ShaderMaterial({
		side: THREE.BackSide,
    uniforms: THREE.UniformsUtils.clone(outline_shader.uniforms),
    vertexShader: outline_shader.vertex_shader,
    fragmentShader: outline_shader.fragment_shader
	});




var light = new THREE.PointLight( 0xffffee, 1, 1000 );
light.position.set( 0, 5, 0 );
scene.add( light );


camera.position.set(5,5,5);
camera.lookAt(0,0,0);
controls.update();



scene.background = new THREE.CubeTextureLoader()
	.setPath( 'assets/Studio/' )
	.load( [
		'studio_side.png',
		'studio_side.png',
		'studio_top.png',
		'studio_top.png',
		'studio_side.png',
		'studio_side.png'
	] );


	GlobalMaterial.envMap = scene.background;


renderer.setSize( w,h );

viewer.appendChild( renderer.domElement );
update()

console.log(renderer.domElement)
renderer.render(scene,camera);

console.log("3D")

}


function update(){
	requestAnimationFrame(update);

	var w = viewer.clientWidth;
	var h = viewer.clientHeight;

	camera.aspect = w/h;
	camera.updateProjectionMatrix();
	renderer.setSize( w,h );
	renderer.render(scene,camera);
	GlobalMaterial.needsUpdate = true;

}
