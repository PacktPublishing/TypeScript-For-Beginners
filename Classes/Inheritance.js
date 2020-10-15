var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlEnabled = true;
        console.log("Cruising");
    };
    ThreeSeries.prototype.start = function () {
        console.log("Button Start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("Button Stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    FiveSeries.prototype.parkingAssit = function () {
        this.parkingAssistEnabled = true;
        console.log("Parked");
    };
    FiveSeries.prototype.start = function () {
        console.log("Remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("Remote Stop");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();
var fiveSeries = new FiveSeries("BMW", "535", "2018", false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssit();
