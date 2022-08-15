class UnitTests {
  /**
   * This class is used to Test javascript leet code algos
   * @param {function} algo
   * @param {Test} testInput
   */
  constructor(algo, testInput) {
    this.algo = algo;
    this.testInput = testInput;
  }

  /**
   * Run will run all tests given in the creation of the Test class and print out the results to the console
   */
  run() {
    for (let i = 0; i < this.testInput.length; i++) {
      let testData = this.testInput[i];

      console.log(
        `Test ${i + 1} ${testData.result} - ${this.algo(...testData.args)}`
      );
    }
  }
}

class Test {
  /**
   * Class to have uniformed test data to run against
   * It would be nice to have type script here since an Interface defining the Test data object
   * @param {*} result
   * @param {Array} args
   */
  constructor(params) {
    this.result = params.result;
    this.args = params.args;
  }
}

export { UnitTests, Test };
