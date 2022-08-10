function abc()
{
    console.log("Hi!");
}
abc();
//this is a normal function

//function expression
var abcd = function(){ //function name not given as it is an anonymous function
    console.log('bye');
};
abc();

function callFunction(fun)
{
   fun();
}
var sayBye = function()
{
    console.log('bye');
};
callFunction(sayBye);//this can also be done