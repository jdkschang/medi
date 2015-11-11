var React = require('react');

var Hello = React.createClass({
    displayName: 'Hello',
    render: function () {
        return "<div>Hello, {this.props.name}</div>"
    }
})

React.render("<Hello name='World!'/>", document.body)
