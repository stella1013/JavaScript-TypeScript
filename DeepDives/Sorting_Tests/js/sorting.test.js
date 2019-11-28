describe("Sorting", () => {
    beforeEach(() => {
        window.getResults = () => {};
        spyOn(window, "getResults");
    });
 
   it("initial sort", () => {
        expect(getResults).toHaveBeenCalledTimes(1);
    });
    /*
    it("with 'once', a function runs one time", () => {
        window.onceFn = once(window.myFn);
        spyOn(window, "onceFn").and.callThrough();
        onceFn();
        onceFn();
        onceFn();
        expect(onceFn).toHaveBeenCalledTimes(3);
        expect(myFn).toHaveBeenCalledTimes(1);
    });
    */
});