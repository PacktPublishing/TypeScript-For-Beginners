var hello = function (name:string):string{
    return "Hello "+name;
}

function add(num1:number,num2:number):number{
    return num1+num2;
}

function calculator():any{
    function subtract(num1:number,num2:number):number{
        return num1-num2;
    }
    return subtract;
}

function display(id:number,name:string,role:string="Normal"){
    console.log("Id",id);
    console.log("Name",name);
    //if(role!=undefined){
    console.log("Role",role);
   // }
}

console.log(hello("Bharath"));

//console.log(hello("Bharath"));
//console.log("Sum is: "+add(10,20));
//display(1,"Bharath","Admin");

//console.log(calculator()(20,5));