import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';
import RubiksCube from './lib/RubiksCube';



export const CubeApp = () =>{  useEffect(() => {
    //https://reactjs.org/docs/hooks-effect.html
    const test = new SceneInit('myThreeJsCanvas');
    test.initScene();
    test.animate();
    //in the above three lines, a new instance of SceneInit class is created as test. and then the functions in SceneInit initScene() and animate() are called
    //note, the first paramemter of the SceneInit constructor is canvas Id, do we give canvasId name here

    const r = new RubiksCube();
    test.scene.add(r.rubiksCubeGroup);
    //new insatnce r is created of RubiksCube
    //add rubiksCubeGroup variable of RubiksCube() to scene of SceneInit()
    //basically adding all the cubeies, making them as a group and adding it to a scene which is in another file
    //React 3D Rubik's Cube-ChatGPT

    //const mouse = new THREE.Vector2();
    //const raycaster = new THREE.Raycaster();
    //https://en.wikipedia.org/wiki/Euclidean_distance
    //https://threejs.org/docs/#api/en/math/Vector2
    //React 3D Rubik's Cube-ChatGPT - for vector2 and raycaster



















    //React 3D Rubik's Cube-ChatGPT for even.clientx that big line
 /*
    function onMouseDown(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, test.camera);
     
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, test.camera);
      const objects = raycaster.intersectObjects(r.rubiksCubeGroup.children);
      const cubeObjects = objects.filter((c) => {
        return c.object.type === 'Mesh';
      });
      if (cubeObjects.length > 0) {
        r.highlightCubes(cubeObjects[0].object);
      }
    }*/

    const onKeyDown = (event) => {
      if (event.repeat) {
        return;
      }
      //if(event.repeat means) over here even if the key is pressed for  long times, only once it happenes.
      r.onKeyDown(event);
    };

    window.addEventListener('keydown', onKeyDown);
    //window.addEventListener('mousedown', onMouseDown);
    //Id kwhy the code works when I have removed the mousedown event
  }
  );

  


  return (
    <div>
        <canvas  id="myThreeJsCanvas"></canvas>
    </div>
  );
};

