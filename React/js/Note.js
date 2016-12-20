var Note = React.createClass({
    edit: function() {
      this.setState({editing: true})  ;
    },
    save: function(){
        var val = this.refs.newText.getDOMNode().value;
        alert('blah' + val);

        this.setState({editing: false})  ;
    },
    remove: function() {
        alert('removing note');
    },
    renderDisplay: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} classname="btn btn-primary glyphicon glyphicon-pencil" />
                    <button onClick={this.remove} classname="btn btn-danger glyphicon glyphicon-trash" />
                </span>
            </div>
        );
    },
    getInitialState: function () {
      return {editing: false}
    },
    renderForm: function(){
        return (
            <div className="note">
                <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"></button>
            </div>
        )

    },
   render: function(){
       if (this.state.editing) {
           return this.renderForm();
       } else {
           return this.renderDisplay();
       }
   }
});
var Board = React.createClass({
    propTypes: {
      count: function(props, propName){
         if (typeof props[propName] !== 'number') {
             return new Error('the count must be a number')
         }
          if (props[propName]>100) {
              return new Error('the count must be less than a hundred')
          }
      }
    },
    render: function() {
        return <div className="board">{this.props.count}</div>
    }
});

React.render(<Board count={10} />,
document.getElementById('react-container'));