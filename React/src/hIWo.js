var HiWo = React.createClass({
    render: function(){
        return (
            <div>
            <h1>Hi Wo</h1>
        <p> This is some text</p>
        </div>
        );
    }

});

React.render(<HiWo />, document.body );
//React.render(React.createElement('div', null, "hello world"), document.body);
