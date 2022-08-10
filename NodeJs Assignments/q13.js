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
var people = [atharva, hridit, ramesh];
people.forEach(function(person)
{
    person.on('speak', function(mssg)
    {
        console.log(person.name + mssg);
    });
});
atharva.emit('speak',' Hello, Atharva!');
hridit.emit('speak',' Hello, Hridit!');
