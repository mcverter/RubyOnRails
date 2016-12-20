var HiWo = React.createClass({displayName: "HiWo",
    render: function(){
        return (
            React.createElement("div", null, 
            React.createElement("h1", null, "Hi Wo"), 
        React.createElement("p", null, " This is some text")
        )
        );
    }

});

React.render(React.createElement(HiWo, null), document.body );
//React.render(React.createElement('div', null, "hello world"), document.body);
