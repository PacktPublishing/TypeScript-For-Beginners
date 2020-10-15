var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.name = "Bob";
console.log(student.name);
