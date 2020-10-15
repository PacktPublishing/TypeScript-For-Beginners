var student = {
    firstName:"John",
    lastName:"Bailey",
    score:90
};

console.log(student.firstName);
console.log(student.score);

for(var item in student){
    console.log(item);
    console.log(student[item])
}

var {firstName,lastName} = student;
console.log(firstName+" "+lastName);

