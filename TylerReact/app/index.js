/**
 * Created by mitchell_verter on 12/14/16.
 */


var React = require('react');
var ReactDOM = require('react-dom')

var HelloWorld = React.createClass({
    render: function() {
        return(
            <div>
                Hello ReactWorld
            </div>
        )
    }
})


var HelloWorld2 = React.createClass({
    render: function() {
        return (
            <div> Hello {this.props.name} </div>
        )
    }
});

ReactDOM.render(<HelloWorld2 name="Tyler" />, document.getElementById('app'))

var FriendsContainer = React.createClass({
    render: function(){
        var name = 'Tyler';
        var friends = ['Joe', 'Time', "frank"];
        return (
            <div>
                <h2> Name: {name} </h2>
                <ShowList name={friends} />
            </div>
        )
    }
});

var ShowList = React.createClass({
    remder: function() {
        var listItems=this.props.map(function(friend) {
            return <li> {friend}</li>
        });
        return (
            <div>
                <h3>Friends </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
})

var ProfilePic = React.createClass({
   render: function(){
       return (
           <img src={'https://photo.fb.com/' + this.props.username} />
       )
   }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <a href={"https://www.fb.com" + this.props.username}>
                {this.props.username}
            </a>
        )
    }
})

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        )

    }
});

<Avatar username="mitchell" />