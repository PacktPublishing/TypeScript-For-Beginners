var Check = /** @class */ (function () {
    function Check() {
    }
    Check.bankName = "Bank Of America";
    return Check;
}());
var check = new Check();
Check.bankName = "BOA";
var check2 = new Check();
check2.accNo;
console.log(Check.bankName);
