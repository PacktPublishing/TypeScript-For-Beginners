let password:string = "Test123";
let regEx:any = /(?=.*[A-Z])\w{4,10})/;
if(password.match(regEx)){
    console.log("Valid Password");
}else{
    console.log("Invalid Password "+password);
}
