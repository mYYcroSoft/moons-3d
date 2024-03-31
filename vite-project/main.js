import './style.css';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
scene.background = spaceTexture;



// Camera on scroll
function moveCamera(){
  const rect = document.body.getBoundingClientRect().top

  camera.position.x = Earth.position.x
}

document.body.onscroll = moveCamera;

//const lightHelper = new THREE.PointLightHelper(pointLight)
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper)
//const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);

  
  
 //controls.update();
  renderer.render(scene, camera);
}
animate();

var scroll = 1
function next(NewPos) {
  var initialCameraPosition = { x: camera.position.x };
  var targetCameraPosition = { x: NewPos };
  var duration = 1000;

  var tween = new TWEEN.Tween(initialCameraPosition)
      .to(targetCameraPosition, duration)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function() {
         
          camera.position.x = initialCameraPosition.x;
      })
      .start(); 
      
      
  function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, camera);
  }
  animate();
}



const MOON_LIST = {
  earth: {
    position: {x: 50},
    size: 10,
    text: {
      title: 'Planeta Země',
      text: "Země, nazývaná také Terra nebo Gaia, je třetí planetou sluneční soustavy, nacházející se ve střední vzdálenosti od Slunce přibližně 1 astronomická jednotka (au). Jedná se o jedinou známou planetu, na které je potvrzeno existování života. Země je dynamická a rozmanitá planeta, skládající se z různých sfér, včetně jádra, pláště a kůry. Svoji vodní povrchovou oblastí, která zaujímá přibližně 71% zemského povrchu, a rozmanitou biosférou, je Země jedinečným útočištěm pro mnoho živých organismů. Atmosféra Země je složena převážně z dusíku a kyslíku a je důležitá pro udržení života na povrchu planety. Země je jedinou planetou ve sluneční soustavě, která má známý přirozený satelit - Měsíc."
    }
  },
  venuse: {
    position: {x: 150},
    size: 10,
    text: {
      title: 'Planeta Venuše', 
      text: 'Venuše, druhá planeta od Slunce, je pojmenována po římské bohyni lásky a krásy. Tato terestrická planeta je často označována jako "sesterská planeta" Země kvůli svým podobným vlastnostem. Její eliptická oběžná dráha má malou excentricitu a oběhne kolem Slunce za 224,7 pozemského dne. Venuše je zcela zakryta vrstvou husté oblačnosti, což v minulosti vedlo k spekulacím o jejím povrchu. Studium povrchu Venuše odhalilo sopečnou aktivitu a útvary podobné impaktním kráterům. Atmosféra Venuše je extrémně hustá a tvoří skleníkový efekt, který způsobil extrémní teploty na povrchu, čímž se zabránilo existenci kapalné vody.'
    }
  },
  moon: {
    position: {x: 250},
    size: 10,
    text: {
      title: 'Měsíc', 
      text: 'Měsíc, jediný známý přirozený satelit Země, je fascinujícím objektem naší sluneční soustavy. Jeho střední vzdálenost od Země je přibližně 384 403 km. Přestože je jeho průměr jen zlomkem zemského průměru, Měsíc je největší planetární družicí ve sluneční soustavě vzhledem k velikosti své mateřské planety. Měsíc je důležitým cílem pro výzkum a průzkum, s mnoha misemi, které studují jeho povrch a složení. První přistání člověka na Měsíci bylo historickým okamžikem pro lidskou průzkumnou činnost ve vesmíru, symbolizujícím technologické a vědecké úspěchy lidstva.'
    }
  },
  mars: {
    position: {x: 350},
    size: 10,
    text: {
      title: 'Mars', 
      text: 'Mars je čtvrtá planeta sluneční soustavy v pořadí od Slunce. Je druhou nejmenší planetou sluneční soustavy, těsně před Merkurem. Vzhledem k jeho povrchovému pozorování zemskými pozorovateli byl pojmenován po římském bohu války Marsovi. S Měsícem je to druhý nejbližší vesmírný objekt ke Zemi (po Slunci). Mars je terestrická planeta s tenkou atmosférou, která má povrchové útvary připomínající jak sopečné oblasti, tak i velké kanály a údolí, podobné těm na Zemi. Délka marťanského dne je téměř stejná jako délka zemského dne, ale marťanský rok je téměř dvojnásobně dlouhý jako zemský. Planeta je objektivem mnoha vědeckých a kulturních objevů.'
    }
  },
  jupiter: {
    position: {x: 450},
    size: 10,
    text: {
      title: 'Jupiter', 
      text: 'Jupiter je pátá planeta sluneční soustavy od Slunce. Je největší planetou sluneční soustavy, s hmotností přibližně 2,5krát větší než hmotnost všech ostatních planet dohromady. Jupiter je plynný obr s vnější částí složenou převážně z vodíku a helia. Planeta nemá definovaný pevný povrch, což ji odlišuje od terestrických planet. Jupiter má minimálně 79 známých měsíců, včetně čtyř velkých měsíců zvaných Galileovy měsíce. Jupiter je významný pro svůj systém prstenců, slabý v porovnání s Saturnem. Jupiter má silný magnetický moment a má největší magnetosféru ve sluneční soustavě.'
    }
  },
  saturn: {
    position: {x: 550},
    size: 10,
    text: {
      title: 'Saturn', 
      text: 'Saturn je šestá planeta sluneční soustavy od Slunce a druhá největší po Jupiteru. Se svou prstencovou soustavou je charakteristickou planetou sluneční soustavy. Saturn je plynný obr s vnější částí složenou převážně z vodíku a helia. Jeho prstence se skládají z ledových částic a prachu, ačkoli jsou některé malé měsíce zodpovědné za udržení některých prstenců. Saturn má nejméně 83 známých měsíců, z nichž největší, Titan, je větší než Merkur a je jediným měsícem v sluneční soustavě s výraznou atmosférou.'
    }
  }
};

/*GLOVAL VALUES */
var LAST_PLANET = -1
var PLANETS_COUNT = 0
/* ------------------- */

function renderPlanets() {
  const planets = {};
  for (const planetKey in MOON_LIST) {
      if (Object.hasOwnProperty.call(MOON_LIST, planetKey)) {
          const planetData = MOON_LIST[planetKey];
          const planetTexture = new THREE.TextureLoader().load(`images/${planetKey}.jpg`);
          const planetGeometry = new THREE.SphereGeometry(planetData.size, 32, 32);
          const planetMaterial = new THREE.MeshStandardMaterial({
              map: planetTexture,
          });

          const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
          planetMesh.position.x = planetData.position.x
          scene.add(planetMesh);
          PLANETS_COUNT += 1
          planets[planetKey] = planetMesh;

      }
  }
    return planets;
}

const RenderedPlanets = renderPlanets();


function planetsRotateAnimation() {
  requestAnimationFrame(planetsRotateAnimation);
  for (const planetKey in RenderedPlanets) {
    RenderedPlanets[planetKey].rotation.y += 0.003;
    
    
  }  
  

  renderer.render(scene, camera);
}
planetsRotateAnimation();


var nextBtn = document.getElementById('button')
console.log(LAST_PLANET);
console.log(PLANETS_COUNT);
window.addEventListener('wheel', function(event){


 if (event.deltaY > 0) {
  console.log("DOWN");
  if(LAST_PLANET != PLANETS_COUNT){
    LAST_PLANET += 1; 
    var PLANET_DATA = MOON_LIST[Object.keys(MOON_LIST)[LAST_PLANET]]
    var PLANET_NAME = Object.keys(MOON_LIST)[LAST_PLANET]; 
    console.log(PLANET_NAME);
    startVoice(PLANET_NAME)

    SetElementHtmlContent(PLANET_DATA)
    next(PLANET_DATA.position.x - 15)
   }
 } else {
  console.log(("UP"));
  if(LAST_PLANET != 0){
    console.log(LAST_PLANET);
    LAST_PLANET -= 1; 
    var PLANET_DATA = MOON_LIST[Object.keys(MOON_LIST)[LAST_PLANET]]
    var PLANET_NAME = Object.keys(MOON_LIST)[LAST_PLANET]; 
    startVoice(PLANET_NAME)
    console.log(PLANET_DATA.position);
    SetElementHtmlContent(PLANET_DATA)
    next(PLANET_DATA.position.x - 15)
   }
 }
  
});




function SetElementHtmlContent(PLANET_DATA) {
  var title = document.getElementById('title')
  var text = document.getElementById('text')

  title.innerHTML = PLANET_DATA.text.title
  text.innerHTML = PLANET_DATA.text.text
}

let previousAudio = null;

function startVoice(name) {
  if (previousAudio !== null) {
      previousAudio.pause();
      previousAudio.currentTime = 0; 
  }
  

  let audioElement = document.getElementById("silentAudio");

  audioElement.src = `audio/${name}.mp3`;
  

  audioElement.play(); 

  previousAudio = audioElement;
}