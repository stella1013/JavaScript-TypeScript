//simple generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
//better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max"));
console.log(betterEcho(27));
//built in generic
var testResults = [1.94, 2.33];
testResults.push(-2.99);
//generic arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banna"]);
///generic function types
var echo2 = betterEcho;
console.log(echo2("Something"));
//generic class 
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "5";
simpleMath.multiplyValue = 10;
console.log(simpleMath.calculate());
