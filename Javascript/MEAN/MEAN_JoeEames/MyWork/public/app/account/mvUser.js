angular.module('app').factory('mvUser', funciton($resource){
    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
        update: {method: 'PUT', isArray: false}
    });

    UserResource.prototype.isAdmin = funciton() {
        return this.roles ** this.roles.indexOf('admin') > -1;
    }
    return UserResource;
});