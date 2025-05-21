<template>
  <div ref="container" id="webgl-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)

onMounted(() => {
  // Global variables}
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let isDragging = false;
  let cubeIsSelected = false;
  let isAnimating = true

  // Create new scene
  const scene = new THREE.Scene()

  // Camera config
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 4, 10);
  camera.lookAt(0, 0, 0);

  // renderer config
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setClearColor(0x1e1e1e);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // Event that controls obj3D movement and grid displacement
  const canvas = renderer.domElement

  canvas.addEventListener('mousedown', (event) => {
  // Coordenadas del mouse normalizadas (-1 a 1)
  const rect = canvas.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  // Lanza un rayo desde la cámara hacia donde está el mouse
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(cube);

  if (intersects.length > 0) {
    isDragging = true;
    cubeIsSelected = true;
    isAnimating = false;
  }
});


  canvas.addEventListener('mouseup', () => {
  isDragging = false;
  cubeIsSelected = false;
  isAnimating = true;
});

canvas.addEventListener('mouseleave', () => {
  isDragging = false;
  cubeIsSelected = false;
  isAnimating = true;
});

  canvas.addEventListener('mousemove', (event) => {
    if (!isDragging || !cubeIsSelected) return;

    const deltaMove = event.movementX
    const rotationSpeed = 0.005
    const displacementSpeed = 0.02
    cube.rotation.y += deltaMove * rotationSpeed
    grid.position.z += deltaMove * displacementSpeed
    terrain.position.z += deltaMove * displacementSpeed
  })

  // lights
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  light.castShadow = true;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 50;
  light.shadow.camera.left = -20;
  light.shadow.camera.right = 20;
  light.shadow.camera.top = 20;
  light.shadow.camera.bottom = -20;
  scene.add(light);

  // Create 3d obj
  const geometry = new THREE.BoxGeometry(3, 3, 3);
  const material = new THREE.MeshStandardMaterial({ color: 0xe6e6e6 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 2, 0);
  cube.castShadow = true;
  scene.add(cube);

  // infinity grid
  const grid = new THREE.GridHelper(1000, 200, 0x888888, 0x444444);
  grid.position.y = -1;
  scene.add(grid);

  // const terrainSize = 1000;
  // const terrainSegments = 200;

  // const geometryTerrain = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);
  // geometryTerrain.rotateX(-Math.PI / 2); // Plano horizontal

  // const materialTerrain = new THREE.MeshBasicMaterial({
  //  opacity: 0,
  //  wireframe: true,
  //  color: 0x888888
  // });

  // const terrain = new THREE.Mesh(geometryTerrain, materialTerrain);
  // scene.add(terrain);

  let time = 0
  // animation of obj
  function animate() {
    // auto movement of obj3D
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.005

    // grid movement
    if (isAnimating) {
      cube.rotation.y += 0.01
    }
    // time += 0.02;
    // const positions = geometryTerrain.attributes.position;
    // const amp = 2;
    // const freq = 0.1;

    // for (let i = 0; i < positions.count; i++) {
    //   const x = positions.getX(i);
    //   const z = positions.getZ(i);
    //   const y = Math.sin(freq * x + time) * Math.cos(freq * z + time) * amp;
    //   positions.setY(i, y);
    // }

    // terrain.position.z += 0.1
    // positions.needsUpdate = true;
    // geometryTerrain.computeVertexNormals();


    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()

  // Resize auto with browser window
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

})
</script>

<style src="../style.css"></style>
