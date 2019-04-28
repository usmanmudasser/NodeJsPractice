// const express = require("express");
// var app = express();
// app.get("/",(req,res)=> res.send("Hello World!"));
// app.listen(3000,()=>console.log("Running on 3000"));

import {Config} from './config/Config';
import {Server} from './servers/Server';
import {UsersRouter} from './routers/usersRouter';
import {UserService} from './services/userService';


var config =  new Config()
.setPort(3000)
.addTransient("UserService", UserService);

new Server(config)
    .addRouter("/api/users", new UsersRouter(config))
    .start();