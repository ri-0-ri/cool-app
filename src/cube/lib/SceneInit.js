import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class SceneInit {
  //class SceneInit has constructor(), initScene(), animate(), render()
  constructor(canvasID, camera, scene, stats, controls, renderer, fov = 36) {
    this.fov = fov;
    this.scene = scene;
    this.stats = stats;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
    this.canvasID = canvasID;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(this.fov, 881/753, 1, 1000);
    this.camera.position.z = 196;
    this.scene = new THREE.Scene();
    const canvas = document.getElementById(this.canvasID);
    this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    this.renderer.setSize(881,753);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

   /* let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    let spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    this.scene.add(spotLight);
    */
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    //https://chat.openai.com/chat/9193d787-824e-41da-ba16-da4b074bdd2c
    this.render();

    //this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}























































































/*import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  //class SceneInit has constructor(), initScene(), animate(), render()
  constructor(canvasID, camera, scene, stats, controls, renderer, fov = 36) {
    this.fov = fov;
    this.scene = scene;
    this.stats = stats;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
    this.canvasID = canvasID;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      //window.innerWidth / window.innerHeight,
      881/753,
      1,
      1000
    );
    this.camera.position.z = 196;

   // this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();

    // NOTE: Load space background.
    // this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./pics/space.jpeg');

    // NOTE: Declare uniforms to pass into glsl shaders.
    //this.uniforms = {
    //  u_time: { type: 'f', value: 1.0 },
    //  colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //  colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    //};

    // specify a canvas which is already created in the HTML file and tagged by an id
    // aliasing enabled
    const canvas = document.getElementById(this.canvasID);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    //this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(881,753);

    //document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    //this.stats = Stats();
    //document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    // spot light which is illuminating the chart directly
    let spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    this.scene.add(spotLight);
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    //this.stats.update();
    //this.controls.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    //this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
    //this.renderer is webglrenderer
  }
}








*/
