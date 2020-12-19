const fs = require("fs")

// 读
const usersString = fs.readFileSync("./db/users.json").toString()
const usersArray = JSON.parse(usersString)
console.log(usersArray instanceof Array);

// 写
const user = { id: 3, name: "tom", password: "yyy" }
usersArray.push(user)
const string = JSON.stringify(usersArray)
fs.writeFileSync("./db/users.json", string)