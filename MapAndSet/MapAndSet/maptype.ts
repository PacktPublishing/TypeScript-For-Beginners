let studentScores = new Map([["john",90],["bob",80],["ahmed",90]]);
console.log(studentScores.get("john"));
studentScores.set("bharath",100);
console.log(studentScores.size)
studentScores.delete("bharath")
console.log(studentScores.has("bharath"))
//studentScores.clear()
console.log(studentScores)
console.log(studentScores.keys());
for(let key of Array.from(studentScores.keys())){
    console.log(key);
    console.log(studentScores.get(key));
}

console.log(studentScores.values());
console.log(studentScores.entries())