let cell:string = "123456789";
let re:any = /[0-9]{10}/
if(cell.match(re)){
    console.log("Cell number is valid")
}else{
    console.log("invalid cell number "+cell)
}


    function method(a:any):any{
        return a;
    }

   let num:number = method(10)
   
