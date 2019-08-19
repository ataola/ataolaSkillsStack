let student = {
    name: "ataola",
    age: 22,
    city: "hangzhou",
    bio: "Hello World!"
}

for(let key in student) {
    console.log(`${key}: ${student[key]}`);
}

