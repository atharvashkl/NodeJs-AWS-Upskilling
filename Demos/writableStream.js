var fs = require('http'); // WE don't require it here in the code but its part of best practices
var fs = require('fs');


//to create a readable stream
var myReadStream = fs.createReadStream(__dirname + '//loremipsum.txt','utf8'); 
var myWriteStream = fs.createWriteStream(__dirname + '//writableStream.txt','utf8');


myReadStream.on('data', function(chunk) //DEFINING EVENT
{ 
console.log('new chunk recieved: ');
myWriteStream.write(chunk); //this method will write the data in the writable file we mentioned above. It will create the file itself so no worries!
});

// Note : The data being transferred will replace any data if there is pre-existing data in the file. 