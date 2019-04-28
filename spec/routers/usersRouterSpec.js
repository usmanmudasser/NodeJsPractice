const Config = require('../../.compiled/config/config').Config;
const UsersRouter = require('../../.compiled/routers/usersRouter').UsersRouter;
const UserService = require('../../.compiled/services/userService').UserService;

describe("UserRouter", ()=> {
    it("throws error if config not defied", () => {
        expect(() => new UsersRouter(null)).toThrow(new Error("Config not defined"));
    });

    it("calls config.getUserService()", () => {
        var config = new Config();
        spyOn(config,"getUserService").and.returnValue(new UserService());
        var router = new UsersRouter(config);

        expect(config.getUserService).toHaveBeenCalledTimes(1);
    })
});
