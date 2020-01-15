export class AbstractTestCase {
    constructor() {
        // Constructor is where the extended test class will initialize any data/variables it needs
        if (this.constructor === AbstractTestCase) {
            throw new TypeError('Abstract class "AbstractTestCase" cannot be instantiated directly.');
        }

        // Runs all the tests made for the extended test class
        if(this.runTests === undefined) {
            throw new TypeError('Classes extending the AbstractTestCase must include "runTests"');
        }

        // Prints the results to the console for each of the tests
        if(this.printResults === undefined) {
            throw new TypeError('Classes extending the AbstractTestCase must include "printResults"');
        }

        // Any listeners or otherwise that need cleaned up when this test is finished should be handled here
        if(this.cleanUp === undefined) {
            throw new TypeError('Classes extending the AbstractTestCase must include "cleanUp"');
        }
    } 
}