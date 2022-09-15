const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/mar.jpg', function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const TextureLoader = new THREE.TextureLoader();
const matcap =TextureLoader.load('../imagenes/Dorado.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

const edges =new THREE.EdgesGeometry(geometry);
const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x4D4C4D}));

scene.add(line);

camera.position.z = 30;

function animate() {
	requestAnimationFrame( animate );
	torus.rotation.x += 0.1;
	torus.rotation.y += 0.2;
	renderer.render( scene, camera );
	line.rotation.x += 0.1;
	line.rotation.y += 0.2;
}
animate();