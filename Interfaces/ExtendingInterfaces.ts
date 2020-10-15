interface Exterior{
    color:string;
    numOfDoors:Number;
}

interface Interior{
    seats:number;
    auto:boolean;
}

interface Car extends Exterior,Interior{
    make:string;
    model:String;
    year:number;
}

var myCar:Car ={
    make:"Honda",
    model:"Civic",
    year:2018,
    color:"Black",
    numOfDoors:4,
    seats:4,
    auto:true
}


