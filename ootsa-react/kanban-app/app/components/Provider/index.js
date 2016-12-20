/**
 * Created by mitchell_verter on 12/17/16.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Provider.prod')
} else {
    module.exports = require('./Provider.dev')
}