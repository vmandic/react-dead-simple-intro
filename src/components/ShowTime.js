var React = require("react");

var ShowTime = React.createClass({
    ticker: null,

    getInitialState: function() {
        return {
            time: new Date().toLocaleString()
        };
    },

    componentDidMount: function() {
        this.ticker = setInterval(this.setTime, 1000);
    },

    setTime: function() {
        this.setState({
            time: new Date().toLocaleString()
        });
    },

    render: function() {
        return <div>The current time is {this.state.time}</div>;
    },

    componentWillUnmount: function() {
        clearInterval(this.ticker);
    }
})

module.exports = ShowTime;