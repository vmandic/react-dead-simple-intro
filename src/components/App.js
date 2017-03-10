var React = require("react");
var PrettyText = require("./PrettyText");
var ShowTime = require("./ShowTime");
var SumNumbers = require("./SumNumbers");

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello from react!</h1>
                <PrettyText text="This a pretty hello yeah!!!!" />
                <ShowTime />
                <SumNumbers />
            </div>
        );
    }
})

module.exports = App;