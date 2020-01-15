import './App.css';
import { Test_Transform } from './Test_Transform';
import * as THREE from 'three';

function App(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  camera.position.z = 5;

  // Starting Test Case Examples
  var testCase = new Test_Transform(scene, camera);
  testCase.runTests(renderer);
  testCase.printResults();
  testCase.cleanUp();

  var animate = function () {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
  };

  animate(); 
  return null;
};

export default App;