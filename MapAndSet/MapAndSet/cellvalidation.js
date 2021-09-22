var cell = "123456789";
var re = /[0-9]{10}/;
if (cell.match(re)) {
    console.log("Cell number is valid");
}
else {
    console.log("invalid cell number " + cell);
}
