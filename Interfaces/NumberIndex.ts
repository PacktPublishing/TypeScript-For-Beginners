interface StudentName{
    [index:number]:string;
}

var studentNames:StudentName = ["John","Bob","Doug"];


interface StudentScore{
    [index:string]:number;
}

var studentScores : StudentScore = {};

studentScores["John"] = 100;
studentScores["Bob"] = 90;

for(var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);
}
