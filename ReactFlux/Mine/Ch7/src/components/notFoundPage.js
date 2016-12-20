/**
 * Created by mitchell_verter on 12/17/16.
 */
"use strict"
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1> Page Not Found </h1>
                <p> nothing </p>
                <p><Link to="app">Back to home </Link></p>
            </div>

        )
    }
})

module.exports = NotFoundPage;