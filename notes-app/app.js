const chalk = require('chalk')
const validator = require('validator')
const fs = require('fs')
const add = require('./utils')
const getNotes = require('./notes')

fs.writeFileSync('sample.txt', 'This is testing how it works\n')
fs.appendFileSync('sample.txt', "This is the second line of this file")
const result = add(5, 9)

console.log(result)
console.log(getNotes())
console.log(validator.isEmail("cutejosh@gmail.com"))
console.log(validator.isURL("https://santech.io"))

console.log(chalk.green("[+] Done"))
