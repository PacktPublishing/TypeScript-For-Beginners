var hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    //if(role!=undefined){
    console.log("Role", role);
    // }
}
console.log(hello("Bharath"));
//console.log(hello("Bharath"));
//console.log("Sum is: "+add(10,20));
//display(1,"Bharath","Admin");
//console.log(calculator()(20,5));
