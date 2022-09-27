let totalOfRadii = 0;
for (let i = 0; i < dataBase.radii.length; i++) {
    if (dataBase.radii[i] == "" && dataBase.radii[i] != undefined) {
        continue
    } else {
        totalOfRadii += parseFloat(dataBase.radii[i])
    }
}
let averagePlanetRadius = totalOfRadii / dataBase.radii.length

document.getElementById("radius").innerHTML = averagePlanetRadius
const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.0001, 700),
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("canvas"),
    }),
    controls = new OrbitControls(camera, renderer.domElement);
controls.update()
let pixality = 1;
let brightness = 0.7;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


camera.position.set(0, 2, 20);

const ambientLight = { light: new THREE.AmbientLight(0xfffff3, brightness) },
    cubeLight = new THREE.PointLight(0x00ff00, 0.1, 1, 1),
    pointLight = new THREE.PointLight(0xfcba03, 0.1, 1, 1),
    lightHelper = new THREE.PointLightHelper(cubeLight),
    gridHelper = new THREE.GridHelper(500, 500);

pointLight.position.set(0, 0, 0)
scene.add(pointLight, ambientLight.light, /*lightHelper gridHelper*/ );

let skyboxRadius = 100
const skyboxTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/Revtrov/Alt2/master/skybox.jpg');
const skybox = new THREE.SphereGeometry(skyboxRadius, 12, 6);
const skyboxMaterial = new THREE.MeshStandardMaterial({ map: skyboxTexture, side: THREE.DoubleSide });
const skyboxMesh = new THREE.Mesh(skybox, skyboxMaterial);
scene.add(skyboxMesh)
skyboxMesh.position.set(0, 0, 0)

let spacing = 1;
let earthRadius = 1
const earthTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/Revtrov/Alt2/master/earth.jpg');
const earth = new THREE.SphereGeometry(earthRadius, 32, 16);
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const EarthMesh = new THREE.Mesh(earth, earthMaterial);
scene.add(EarthMesh)
EarthMesh.rotateZ((Math.PI / 180) * 16);
EarthMesh.position.set(+((averagePlanetRadius + earthRadius) / 2) + spacing, 0, 0)

const averagePlanetTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/Revtrov/Alt2/master/averagePlanet.jpg');
const averagePlanet = new THREE.SphereGeometry(averagePlanetRadius, 32, 16);
const averagePlanetMaterial = new THREE.MeshStandardMaterial({ map: averagePlanetTexture });
const averagePlanetMesh = new THREE.Mesh(averagePlanet, averagePlanetMaterial);
scene.add(averagePlanetMesh)
averagePlanetMesh.position.set(-((averagePlanetRadius + earthRadius) / 2) - spacing, 0, 0)

var customMaterial = new THREE.ShaderMaterial({
    uniforms: {
        "c": { type: "f", value: 1.0 },
        "p": { type: "f", value: 1.4 },
        glowColor: { type: "c", value: new THREE.Color(0x08C8F3) },
        viewVector: { type: "v3", value: camera.position }
    },
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true
});
var customMaterial2 = new THREE.ShaderMaterial({
    uniforms: {
        "c": { type: "f", value: 1.0 },
        "p": { type: "f", value: 1.4 },
        glowColor: { type: "c", value: new THREE.Color(0xfebbbb) },
        viewVector: { type: "v3", value: camera.position }
    },
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true
});
let atmosphere = new THREE.Mesh(earth.clone(), customMaterial.clone());
let atmosphere2 = new THREE.Mesh(averagePlanet.clone(), customMaterial2.clone());
atmosphere.position.x = EarthMesh.position.x;
atmosphere.position.y = EarthMesh.position.y;
atmosphere.position.z = EarthMesh.position.z;
atmosphere2.position.x = averagePlanetMesh.position.x;
atmosphere2.position.y = averagePlanetMesh.position.y;
atmosphere2.position.z = averagePlanetMesh.position.z;
atmosphere2.scale.multiplyScalar(1.2);
atmosphere.scale.multiplyScalar(1.2);
scene.add(atmosphere, atmosphere2);

function animate() {
    requestAnimationFrame(animate);
    atmosphere.material.uniforms.viewVector.value =
        new THREE.Vector3().subVectors(camera.position, EarthMesh.position);
    atmosphere2.material.uniforms.viewVector.value =
        new THREE.Vector3().subVectors(camera.position, averagePlanetMesh.position);
    EarthMesh.rotateY(0.003)

    skyboxMesh.position.set(camera.position.x, camera.position.y, camera.position.z)
    controls.update()

    renderer.render(scene, camera);
}
animate()