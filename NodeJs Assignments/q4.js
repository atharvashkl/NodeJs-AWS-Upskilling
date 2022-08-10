var fs = require('fs');
fs.writeFileSync('anotherone.txt', "Hi ,I did'nt write this directly");
var anotherone = fs.readFileSync('anotherone.txt', 'utf8');
console.log(anotherone);

