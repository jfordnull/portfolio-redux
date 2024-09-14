import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// -----------
// Scene
// -----------
const scene = new THREE.Scene();
const canvas = document.getElementById("ascii-head");
const gltfLoader = new GLTFLoader();
let jacobModel, camera, renderer, effect;
gltfLoader.load(
    '/jacob.glb',
    (gltf) =>
    {
        console.log(gltf)
        scene.add(gltf.scene);
        jacobModel = gltf.scene;
        camera.lookAt(jacobModel.position);
        jacobModel.position.set(-.25,-3.25,0);
    }
);
const pointLight1 = new THREE.PointLight( 0xffffff, 4, 0, 0 );
pointLight1.position.set( 500, 500, 500 );
scene.add( pointLight1 );
const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
pointLight2.position.set( - 500, - 500, - 500 );
scene.add( pointLight2 );

// -----------
// Aspect Ratio and Camera
// -----------
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};
camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(-4.5,2,7);

// -----------
// Renderer
// -----------
renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize( sizes.width, sizes.height );
renderer.setAnimationLoop( animate );

// ASCII Effect
effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: false } );
effect.setSize( sizes.width, sizes.height );
effect.domElement.style.color = 'black';
effect.domElement.style.fontWeight = 'bolder';

canvas.parentNode.replaceChild(effect.domElement, canvas);

// -----------
// Window Resize
// -----------
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(sizes.width, sizes.height);
    effect.setSize(sizes.width, sizes.height);
});

// Animation
const clock = new THREE.Clock()

function animate() {

    const elapsedTime = clock.getElapsedTime()

    if(jacobModel) jacobModel.rotation.y = elapsedTime * 0.75;

    effect.render( scene, camera );

};