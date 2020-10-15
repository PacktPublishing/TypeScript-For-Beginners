var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("John", "Bailey", 123);
passenger.display();
var passenger2 = new Passenger("Bob", "Bailey", 456);
passenger2.display();
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
