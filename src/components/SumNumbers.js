var React = require("react");

var SumNumbers = React.createClass({

    getInitialState: function() {
        return {
            firstNumber: 0,
            secondNumber: 0
        };
    },

    setFirstNumber: function(e) {
        this.setState({
            firstNumber: Number(e.target.value)
        });
    },

    setSecondNumber: function(e) {
        this.setState({
            secondNumber: Number(e.target.value)
        });
    },

    render: function() {
        return (
            <div>
                <h2>Sum two numbers:</h2>
                <div>
                    <input onChange={this.setFirstNumber} />
                    <div>+</div>
                    <input onChange={this.setSecondNumber} />
                    <div>=</div>
                    <div>{this.state.firstNumber + this.state.secondNumber}</div>
                </div>
            </div>
        );
    }
});

module.exports = SumNumbers;