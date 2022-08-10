//2 var fs = require('fs');
//1 var readme = fs.readFileSync('readme.txt', 'utf8');
//2 fs.readFile('readme.txt', 'utf8',function(err,data)
//2 {
//2 console.log(data);
//2 });
//1 console.log(readme);
//1 fs.writeFileSync('anotherone.txt', readme);
//2 console.log('test');//this will print first as only once the file is fully read only then the async function will execute
