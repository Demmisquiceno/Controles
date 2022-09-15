const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/imagen-luna.jpg', function(texture){
    scene.background = texture;
});


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const TextureLoader = new THREE.TextureLoader();
const matcap =TextureLoader.load('../imagenes/metalizado.jpg');
const material = new THREE.MeshMatcapMaterial();
const cube = new THREE.Mesh( geometry, material );
material.matcap = matcap;
material.flatShading = true;
scene.add( cube );

const edges =new THREE.EdgesGeometry(geometry);
const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x4D4C4D}));

scene.add(line);

camera.position.z = 4;

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	renderer.render( scene, camera );
	line.rotation.x += 0.1;
	line.rotation.y += 0.1;
}
animate();

