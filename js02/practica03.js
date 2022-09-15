const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/espacio.jpg', function(texture){
    scene.background = texture;
});
{
    const color=0X000000;
    const near =0.1;
    const far = 50; 
    scene.fog =new THREE.Fog(color, near, far);
} 


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
 
const geometry = new THREE.CircleGeometry( 5, 32 );
const TextureLoader = new THREE.TextureLoader();
const matcap =TextureLoader.load('../imagenes/Dorado.jpg');
const material = new THREE.MeshMatcapMaterial();
const circle  = new THREE.Mesh( geometry, material );
material.matcap = matcap;
material.flatShading = true;

scene.add( circle );

const edges =new THREE.EdgesGeometry(geometry);
const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x4D4C4D}));

scene.add(line);

camera.position.z = 40;


function animate() {

	requestAnimationFrame( animate );
    circle.rotation.x += 0.1;
	circle.rotation.y += 0.1;
	renderer.render( scene, camera );
    line.rotation.x += 0.1;
	line.rotation.y += 0.1;
}
animate();
