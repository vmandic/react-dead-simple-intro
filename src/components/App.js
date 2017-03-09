var React = require("react");

var App = React.createClass({
    render: function() {
        return (
            <div>Hello from react! The current time is {new Date().toLocaleString()}</div>
        );
    }
})

module.exports = App;