var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.print = function () {
        console.log("Employee Details");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Manager.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Manager;
}(Employee));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    function Lead(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Lead.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Lead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Developer;
}(Employee));
var employees = new Array(new Manager("John", "Ferguson", "Manager"), new Lead("Doug", "Bailey", "Lead"), new Developer("Bharath", "Thippireddy", "developer"));
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    employee.print();
}
