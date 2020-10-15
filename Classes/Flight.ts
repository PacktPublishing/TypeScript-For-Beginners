interface IFlight{
    flightNo:number;
    from:string;
    to:string;
    display():void;
}

class Flight implements IFlight{
    flightNo:number;
    from:string;
    to:string;

    constructor(flightNo:number,from:string,to:string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    display(){
        console.log(this.flightNo+" "+this.from+" "+this.to);
    }

}

var flight = new Flight(123,"Austin","Denver");
flight.display();