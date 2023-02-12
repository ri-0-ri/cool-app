import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import Cube from './Cube';

export default class RubiksCube {
  constructor() {
    this.scale = 20;
    this.epsilon = 0.5;
    this.selectedCube = null;
    this.rubiksCubeGroup = new THREE.Group();
    this.rubiksCubeGroup.scale.x = this.scale;
    this.rubiksCubeGroup.scale.y = this.scale;
    this.rubiksCubeGroup.scale.z = this.scale;

    this.rubiksCubeGroup.rotation.x = Math.PI / 7;
    this.rubiksCubeGroup.rotation.y = -Math.PI / 4;

    this.initializeRubiksCube();

    //all the above are instance variables.
    
    const anim = (t) => {
      TWEEN.update(t);
      requestAnimationFrame(anim);
    };
    anim();
  }





  rotateAroundWorldAxis(cubeGroup, axis) {
    if (cubeGroup.isRotating) return;
    
    const start = { rotation: 0 };
    const prev = { rotation: 0 };
    const end = { rotation: Math.PI / 2 };
    cubeGroup.isRotating = true;

    const tween = new TWEEN.Tween(start)
      .to(end, 300)
      //chainging the number, changes the speed with which the cube rotates
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ rotation }) => {
        
        cubeGroup.position.applyAxisAngle(axis, rotation - prev.rotation);
        cubeGroup.rotateOnWorldAxis(axis, rotation - prev.rotation);

        // NOTE: Keep track of the previous rotation for tweening.
        prev.rotation = rotation;
      })
      .onComplete(() => {
        cubeGroup.isRotating = false;
        
      });

    tween.start();
  }













  cubeInSameY(c1, c2) {
    return (
      c1.cubeGroup.position.y > c2.cubeGroup.position.y - this.epsilon &&
      c1.cubeGroup.position.y < c2.cubeGroup.position.y + this.epsilon
    );
  }

  cubeInSameX(c1, c2) {
    return (
      c1.cubeGroup.position.x > c2.cubeGroup.position.x - this.epsilon &&
      c1.cubeGroup.position.x < c2.cubeGroup.position.x + this.epsilon
    );
  }


  cubeInSameZ(c1, c2) {
    return (
      c1.cubeGroup.position.z > c2.cubeGroup.position.z - this.epsilon &&
      c1.cubeGroup.position.z < c2.cubeGroup.position.z + this.epsilon
    );
  }
/*THis is for debugging
  getText(key) {
    return (
      {
        w: 'W: rotate up',
        s: 'S: rotate down',
        a: 'A: rotate left',
        d: 'D: rotate right',
        q: 'Q: rotate face left',
        e: 'E: rotate face right',
      }[key] || ''
    );
  }

  displayKey(key) {
    if (this.consoleDebug) {
      console.log(
        `%c ${this.getText(key)} `,
        'background: #fafafa; color: #0a0a0a; font-size: 20px'
      );
    }
  }*/

//left-up L'
  onKeyDown(event) {

    if (this.delay) return;
  this.delay = true;
  setTimeout(() => {
    this.delay = false;
  }, 300);

    if (event.key === 'L') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(-1, 0, 0);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameX(cube, this.selectedCube)) {
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
        }
      });

      
    }

//Left Down - L
    else if (event.key === 'l') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(1, 0, 0);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameX(cube, this.selectedCube))
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
      });
    } 


// down left - D'

    else if (event.key === 'D') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(0, -1, 0);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameY(cube, this.selectedCube))
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
      });
    } 

//Down right - D
    else if (event.key === 'd') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(0, 1, 0);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameY(cube, this.selectedCube))
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
      });
    } 
//Back Anti-Clockwise B    
    else if (event.key === 'b') {
     //debug  this.displayKey(event.key);
      const axis = new THREE.Vector3(0, 0, 1);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameZ(cube, this.selectedCube))
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
      });
    } 
//Back - Clockwise B'    
    else if (event.key === 'B') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(0, 0, -1);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameZ(cube, this.selectedCube))
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
      });
    }
  }

initializeRubiksCube() {
  this.cubes = [];
  var count = 0;
  for(let i =-1; i<=1; i++){
    for(let j=-1; j<=1; j++){
      for(let k=-1; k<=1;k++){
        this.cubes[count] = new Cube(i, j, k);
        count=count + 1;
      }
    }
  }
  this.cubes.forEach((cube) => {
    this.rubiksCubeGroup.add(cube.cubeGroup);
  } );
  this.selectedCube = this.cubes[0];
}
}



























/*




import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import Cube from './Cube';

export default class RubiksCube {
  constructor() {
    this.scale = 20;
    this.epsilon = 0.5;
    this.consoleDebug = true;
    this.selectedCube = null;
    this.rubiksCubeGroup = new THREE.Group();
    this.rubiksCubeGroup.scale.x = this.scale;
    this.rubiksCubeGroup.scale.y = this.scale;
    this.rubiksCubeGroup.scale.z = this.scale;

    this.rubiksCubeGroup.rotation.x = Math.PI / 7;
    this.rubiksCubeGroup.rotation.y = -Math.PI / 4;

    this.initializeRubiksCube();


    
    const anim = (t) => {
      TWEEN.update(t);
      requestAnimationFrame(anim);
    };
    anim();
  }

  rotateAroundWorldAxis(cubeGroup, axis) {

    if (cubeGroup.isRotating) return;

    const start = { rotation: 0 };
    const prev = { rotation: 0 };
    const end = { rotation: Math.PI / 2 };
    cubeGroup.isRotating = true;

    const tween = new TWEEN.Tween(start)
      .to(end, 500)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(({ rotation }) => {
        
        cubeGroup.position.applyAxisAngle(axis, rotation - prev.rotation);
        cubeGroup.rotateOnWorldAxis(axis, rotation - prev.rotation);

        // NOTE: Keep track of the previous rotation for tweening.
        prev.rotation = rotation;
      })
      .onComplete(() => {
        cubeGroup.isRotating = false;
      });

    tween.start();
  }

  cubeInSameY(c1, c2) {
    return (
      c1.cubeGroup.position.y > c2.cubeGroup.position.y - this.epsilon &&
      c1.cubeGroup.position.y < c2.cubeGroup.position.y + this.epsilon
    );
  }

  cubeInSameX(c1, c2) {
    return (
      c1.cubeGroup.position.x > c2.cubeGroup.position.x - this.epsilon &&
      c1.cubeGroup.position.x < c2.cubeGroup.position.x + this.epsilon
    );
  }


  cubeInSameZ(c1, c2) {
    return (
      c1.cubeGroup.position.z > c2.cubeGroup.position.z - this.epsilon &&
      c1.cubeGroup.position.z < c2.cubeGroup.position.z + this.epsilon
    );
  }

//left-up L'
  onKeyDown(event) {
    if (event.key === 'L') {
      //debug this.displayKey(event.key);
      const axis = new THREE.Vector3(-1, 0, 0);
      this.cubes.forEach((cube) => {
        if (this.cubeInSameX(cube, this.selectedCube)) {
          this.rotateAroundWorldAxis(cube.cubeGroup, axis);
        }
      });
    }

  //Down right - D
  else if (event.key === 'd') {
    //debug this.displayKey(event.key);
    const axis = new THREE.Vector3(0, 1, 0);
    this.cubes.forEach((cube) => {
      if (this.cubeInSameY(cube, this.selectedCube))
        this.rotateAroundWorldAxis(cube.cubeGroup, axis);
    });
  } 

  //Back Anti-Clockwise B    
  else if (event.key === 'b') {
    //debug  this.displayKey(event.key);
     const axis = new THREE.Vector3(0, 0, 1);
     this.cubes.forEach((cube) => {
       if (this.cubeInSameZ(cube, this.selectedCube))
         this.rotateAroundWorldAxis(cube.cubeGroup, axis);
     });
   } 

initializeRubiksCube() {
  this.cubes = [];
  var count = 0;
  for(let i =-1; i<=1; i++){
    for(let j=-1; j<=1; j++){
      for(let k=-1; k<=1;k++){
        this.cubes[count] = new Cube(i, j, k);
        count=count + 1;
      }
    }
  }
  this.cubes.forEach((cube) => {
    this.rubiksCubeGroup.add(cube.cubeGroup);
  } );
  this.selectedCube = this.cubes[0];
}
}


*/