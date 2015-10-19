describe('mvUser', function() {
    beforeEach(module('app'));

    describe('isAdmin', function () {
        it('should return false if the roles array does not have admin', inject(function () {
            var user = new mvUser(),
                user.roles = ['not admin'],
                expect   user.isAdmin().to.be.falsey
        }));

        it('should return ture if it is admin', inject(function () {
            var user = new mvUser(),
                user.roles = ['admin'],
                expect user.isAdmin().to.be.true
        }));
    })
})
})