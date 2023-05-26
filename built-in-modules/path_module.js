const path = require('path');

//path.sep returns the segment separator specified for the platform
console.log(path.sep)


//path.join joins the specified paths into one
const filePath = path.join('./sub','subsub','sub.txt')
console.log(filePath)

//basename returns the last part of the path
const base = path.basename(filePath);
console.log(base);

//path.resolve resolves specified path into an absolute path
const absolute = path.resolve(__dirname,'/sub','subsub','sub.txt');
console.log(absolute)

//dirname returns the directories of a path
console.log(path.dirname(filePath));

//extname() returns the file extension of a path
console.log(path.extname(filePath))