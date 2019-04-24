
//prototype way of creating class in vanilla js
function HelloWorld(){}

HelloWorld.prototype.sayHello= function()
{
    console.log("hello 2");
}

new HelloWorld().sayHello();
