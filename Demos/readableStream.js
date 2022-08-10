var fs = require('http'); // WE don't require it here in the code but its part of best practices
var fs = require('fs');



//to create a readable stream
var myReadStream = fs.createReadStream(__dirname + '//loremipsum.txt','utf8'); 


myReadStream.on('data', function(chunk) //DEFINING EVENT
{ 
console.log('new chunk recieved: ');
console.log(chunk);
});

/* Thesis - Buffer is a small storage where a limited amount 
of data can be stored. Since its a small storage , the data
gets filled quickly and can be transfered in small amounts (chunks).
Stream is the continuous flow of this data.
(Bucket/Mug example suits.)
*/