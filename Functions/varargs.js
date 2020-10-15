var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
