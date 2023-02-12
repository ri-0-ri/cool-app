import * as THREE from 'three';

import { vertexShader, fragmentShader } from './Shaders';

export default class Cube {
  constructor(xOffset, yOffset, zOffset) {
    this.cubeGroup = new THREE.Group();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader(),
      fragmentShader: fragmentShader(),
    });
    this.cubeMesh = new THREE.Mesh(geometry, material);

    const lineEdges = new THREE.EdgesGeometry(this.cubeMesh.geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#000000' });
    this.lineMesh = new THREE.LineSegments(lineEdges, lineMaterial);

    this.cubeGroup.add(this.cubeMesh);
    this.cubeGroup.add(this.lineMesh);
    this.cubeGroup.position.x = xOffset;
    this.cubeGroup.position.y = yOffset;
    this.cubeGroup.position.z = zOffset;
  }
}
