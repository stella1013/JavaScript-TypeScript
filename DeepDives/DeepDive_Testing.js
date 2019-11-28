/**
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
 */