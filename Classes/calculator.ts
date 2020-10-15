class Calculator{
    static sum(num1:number,num2:number):number{
        return num1+num2;
    }

    static sub(num1:number,num2:number):number{
        return num1-num2;
    }
}

console.log(Calculator.sum(10,20));
console.log(Calculator.sub(30,20));