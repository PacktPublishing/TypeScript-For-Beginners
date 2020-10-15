var hello = (name:string):string=>{
    return "Hello "+name;
};

var multiply = (num1:number,num2:number):number=>{
    return num1*num2;
}

var myarray:Array<any> = [];

for(var i = 0;i<10;i++){
    myarray.push(():number=>{return i});
}

for(var i = 0;i<10;i++){
   console.log(myarray[i]());
}

//console.log(hello("Bharath"));
console.log("Product is",multiply(5,8));



