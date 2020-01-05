var StitchCounter = /** @class */ (function () {
    function StitchCounter(count) {
        this._count = count;
    }
    StitchCounter.prototype.getCounter = function () {
        return this._count;
    };
    StitchCounter.prototype.add = function (event) {
        this._count = this._count + 1;
    };
    StitchCounter.prototype.subtract = function (event) {
        if (this._count > 0) {
            this._count = this._count - 1;
        }
    };
    return StitchCounter;
}());
//create projects and save counts.
var input = document.getElementById('total');
var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var val = parseInt(input.value, 10);
var counter = new StitchCounter(val);
addButton.addEventListener('click', function (e) {
    counter.add(e);
    var result = counter.getCounter();
    input.value = result.toString();
});
subtractButton.addEventListener('click', function (e) {
    counter.subtract(e);
    var result = counter.getCounter();
    input.value = result.toString();
});
