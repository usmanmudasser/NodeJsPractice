
var express = require('express');
import {UserService} from '../services/userService';

// api/users/*
export class UsersRouter
{
    constructor(config)
    {
        if(!config) throw new Error("Config not defined");
       
        this.config = config;
        this.userService =config.getUserService(); //config.getService("UserService");
        if(!this.userService) throw new Error("User service not found.");
       
    }

    build()
    {
        this.router = new express.Router();
        this.router.route("/")
        .get(async(req,res,next) => {
            var users = await this.userService.getUsersAsync();
            res.json(users);
        })

        return this.router;
    }
}

