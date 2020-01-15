import { AbstractTestCase } from './AbstractTestCase';
import { transform_ext } from './transform_ext';
import * as THREE from 'three';

export class Test_Transform extends AbstractTestCase {
    constructor(scene, camera) {
        // Allows 'this' keyword
        super();

        // Create an instance of the extension
        this._transform = new transform_ext();

        // (Future) Message System will prevent excess calls to the scene
        this._scene = scene;
        this._camera = camera;

        // Need to create an object for the example
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this._cube = new THREE.Mesh( geometry, material );

        // This can be a message to the scene class to add an object to the scene. 
        // This will reduce the number of locatioms that this call will be made.
        this._scene.add( this._cube );
    }

    runTests(renderer) {
        // Run all of the tests against the relevant extension(s)

        // Single Instance Calls
        this.TranslateCube(-3, -2, -2);
        this.RotateCube(45, 32, -98);

        // Perform Visual Test
        renderer.render(this._scene, this._camera);
        
        // Store or Print Results of the test
        this.printResults();


        // Multiple Calls can be made for stress testing
        for(let i = 0; i < 3; ++i) {
            this.TranslateCube(i, i, i);
            this.RotateCube(i, i, i);

            // Perform Visual Test
            renderer.render(this._scene, this._camera);
            
            // Store or Print Results of the test
            this.printResults();
            // TODO: Determine the standard for when results will be printed and how these results will be recorded
        }

        // Insert edge-case calls or other test algorithms
    }

    printResults() {
        // Depending on how results are recorded, that will happen here
        // TODO: Come up with a standard for recording results
        console.log("Object Position: ", this._cube.position);
        console.log("Object Rotation: ", this._cube.rotation);
    }

    cleanUp() {
    }

    TranslateCube(x, y, z) {
        this._transform.TranslateObj(this._cube, x, y, z);
    }

    RotateCube(x, y, z) {
        this._transform.RotateObj(this._cube, x, y, z);
    }
}