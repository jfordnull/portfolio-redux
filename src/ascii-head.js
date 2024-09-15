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
let sizes = calculateSizes();

// -----------
// Aspect Ratio and Camera
// -----------
camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 1, 1000);
camera.position.set(0, 1, 7);

// -----------
// Renderer
// -----------
renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ASCII Effect
effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: false });
effect.setSize(sizes.width, sizes.height);
effect.domElement.style.width = `${sizes.width}px`;
effect.domElement.style.height = `${sizes.height}px`;
effect.domElement.style.color = 'black';
effect.domElement.style.fontWeight = 'bolder';
effect.domElement.style.textShadow = '1px 1px 2px black'

canvas.parentNode.replaceChild(effect.domElement, canvas);

// -----------
// Load GLTF Model
// -----------
gltfLoader.load(
    `${import.meta.env.BASE_URL}jacob.glb`,
    (gltf) => {
        jacobModel = gltf.scene;
        scene.add(jacobModel);
        camera.lookAt(jacobModel.position);
        jacobModel.position.set(-.25, -3.25, 0);
        onResize();
    }
);

// -----------
// Lights
// -----------
const pointLight1 = new THREE.PointLight(0xffffff, 4, 0, 0);
pointLight1.position.set(500, 500, 500);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1, 0 ,0);
pointLight2.position.set(-500, -500, -500);
scene.add(pointLight2);

// -----------
// Window Resize Event
// -----------
window.addEventListener('resize', onResize);

function onResize() {
    sizes = calculateSizes();

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    effect.setSize(sizes.width, sizes.height);
    effect.domElement.style.width = `${sizes.width}px`;
    effect.domElement.style.height = `${sizes.height}px`;
}

function calculateSizes() {
    const windowWidth = window.innerWidth;
    let width, height;
    if (windowWidth >= 1280){
        width = window.innerWidth *.5;
        height = window.innerHeight *.75;
    }
    else{
        width = window.innerWidth;
        height = window.innerHeight *.75;
    }
    return {width,height};
}

// -----------
// Animation Loop
// -----------
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    if (jacobModel) {
        jacobModel.rotation.y = elapsedTime * 0.65;
    }
    effect.render(scene, camera);
}

renderer.setAnimationLoop(animate);
