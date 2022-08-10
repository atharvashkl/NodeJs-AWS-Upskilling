var fs = require('fs');
fs.writeFileSync('Q10.txt', "Hey ho , let's go !");
var q10 = fs.readFileSync('Q10.txt', 'utf8');
console.log('Your file was saved !')
console.log(q10);
