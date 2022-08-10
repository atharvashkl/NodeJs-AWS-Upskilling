
//to declare a variable to be accessed outside of the current js file 
//, we use module.exports.(variable name)= value;
// module.exports.counter = function(arr)
// {
//     return 'There are '+ arr.length + ' elements in this array';
// };
// module.exports.adder = function(a,b)
// {
//     return 'A+B is '+ (a+b);
// }
// module.exports.pi = 3.142;
var events = require('events');
var util = require('util');
var Person = function(name)
{
    this.name= name;
};
util.inherits(Person , events.EventEmitter);
var atharva = new Person('Atharva');
var hridit = new Person('Hridit');
var ramesh = new Person('Ramesh');
var people = [atharva,hridit,ramesh];
people.forEach(function(person)
{
    person.on('speak', function(mssg)
    {
        console.log(person.name + ' said:' + mssg);
    });
});
atharva.emit('speak',' Hello');

