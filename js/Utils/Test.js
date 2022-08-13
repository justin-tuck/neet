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
   * @param {*} result
   * @param {Array} args
   */
  constructor(result, args) {
    this.result = result;
    this.args = args;
  }
}

export { UnitTests, Test };
