/**
 * 
 * SETUP
 * Need the following tools:
    * Test Runner (Mocha, Jest, Jasmine)
    * Execute Tests and Summarize results
 * 
 * Assertion Library (Chai, Jest)
    * Define testing logic, conditions
 * 
 * Headless Browser
    * can use Browser API so that we don't have to click manually to simiulates interaction. No UI
    * Usefull for E-2-E
 * 
 * TYPES OF TESTS
 * UNIT TESTS - fully isolated unit of application
 * Tests a function
 * lots of unit tests.
 * 
 * Ex: Drag and Drop Project validation.test.ts
 * 
 * INTEGRATION TESTS - unit with dependencies
 * Tests a function that calls a function
 * some integration tests
 * 
 * Ex: Drag and Drop Project project-state.test.ts
 * 
 * E2E TESTS - Full flow End to End
 * Validating DOM afer a click
 * few UI tests
 * 
 * Ex: Drag and Drop Project project-input.test.ts
 * 
 * 
 * ASYNCS
 * 
 * MOCKS
 *  * SPY ON FUNCTION
 * It must be associated wiht an object.
 * Alternative you can directly create a spy using Jasmine's .createSpy()
 * Global functions are associated with the window object. So 'window.fn' is a way of saying that 'fn' is global
 * 
 * When spy on a function. Jasmine intercepts your calls and registers:
 * - that the function was called.
 * - what arguments
 * - how many times it was called
 * 
 * So, for all we care window.fn could be null. Because it will never be executed.
 * 
 * /**
 * SPY ON FUNCTION
 * It must be associated wiht an object.
 * Alternative you can directly create a spy using Jasmine's .createSpy()
 * Global functions are associated with the window object. So 'window.fn' is a way of saying that 'fn' is global
 * 
 * When spy on a function. Jasmine intercepts your calls and registers:
 * - that the function was called.
 * - what arguments
 * - how many times it was called
 * 
 * So, for all we care window.fn could be null. Because it will never be executed.
 * 
 * Jasmine test runners
Jasmine comes with an inbuilt test runner. Jasmine tests can run browser tests by including a simple SpecRunner.html[9] file or by using it as a command line test runner supported for various languages like Nodejs, Python, Ruby, or (old way) by using Karma,[10] a simple JavaScript test runner tool.

Comparison between Jasmine and Mocha[11]
Mocha is another popular Javascript testing framework. The comparison between Jasmine and Mocha is given in the table below.

Jasmine	Mocha
Jasmine comes with test doubles by using spies.	Mocha does not come with a test double library, and generally uses an external library like Sinon.
Jasmine has a command line utility to run tests.	Mocha has a command line utility to run tests.
Jasmine has assertions built into it.	Mocha does not have an assertions library and uses Chai for assertions.
Benefits
The aim of Jasmine is to be browser, framework, platform and language independent.[12]
Besides behavior-driven development, Jasmine also supports test driven development.[12]
 */
 