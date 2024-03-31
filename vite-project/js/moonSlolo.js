
// Earth
const EarthTexture = new THREE.TextureLoader().load('images/earth.jpg');
const Earth = new THREE.Mesh(
  new THREE.SphereGeometry(MoonSize, 32, 32),
  new THREE.MeshStandardMaterial({
    map: EarthTexture,
  })
);
Earth.position.x = 0
scene.add(Earth);

// MOON
const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(MoonSize, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);
moon.position.x = 50
scene.add(moon);



// VENUSE
const venuseTexture = new THREE.TextureLoader().load('images/moon.jpg');
const venuse = new THREE.Mesh(
  new THREE.SphereGeometry(MoonSize, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venuseTexture,
  })
);
venuse.position.x = 100
scene.add(venuse);
