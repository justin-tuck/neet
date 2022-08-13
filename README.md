# neet

Leet code problems from Neet code

# javascript

## set up

First install nodejs

## Running Tests

import { UnitTests, Test } from "../Utils/Test.js";

let testsToRun = [
new Test(true, [[1, 2, 3, 1]]),
new Test(false, [[1, 2, 3, 4]]),
];
const test = new UnitTests(containsDuplicate, testsToRun);
test.run();
