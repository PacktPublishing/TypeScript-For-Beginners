class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerNo:number; 
    
    constructor(firstName:string,lastName:string,frequentFlyerNo:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){
        console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);
    }
    
}

var passenger = new Passenger("John","Bailey",123);
passenger.display();
var passenger2 = new Passenger("Bob","Bailey",456);
passenger2.display();


for(let item in passenger){
    if(passenger[item] instanceof Function){
        continue;
    }else{
        console.log(item);
        console.log(passenger[item]);
    }

}









