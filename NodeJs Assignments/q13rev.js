//WAP that takes a name as a command line arguement and says hello to that name
var text = process.argv.slice(2).toString();

function hello(str){
    return "Hello "+ str + '!';
}

console.log(hello(text));
