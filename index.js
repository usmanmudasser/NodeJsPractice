/*
//prototype way of creating class in vanilla js
function HelloWorld(){}

HelloWorld.prototype.sayHello= function()
{
    console.log("hello 2");
}

new HelloWorld().sayHello();
*/

class HelloWorld
{
    sayHello()
    {
        console.log("hello 3");
    }
}

new HelloWorld().sayHello();