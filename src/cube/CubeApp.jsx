import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';
import RubiksCube from './lib/RubiksCube';



export const CubeApp = () =>{  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initScene();
    test.animate();

    const r = new RubiksCube();
    test.scene.add(r.rubiksCubeGroup);

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    function onMouseDown(event) {
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
    }

    const onKeyDown = (event) => {
      if (event.repeat) {
        return;
      }
      r.onKeyDown(event);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('mousedown', onMouseDown);
  }, []);

  
  return (
    <div>
        <canvas  id="myThreeJsCanvas"></canvas>
    </div>




  );
};

