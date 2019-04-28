export class UserService
{
    getUsersAsync()
    {
        return new Promise((resolve,reject) => {
            resolve([{userId:100},{userId:101}]);
        });
    }
}