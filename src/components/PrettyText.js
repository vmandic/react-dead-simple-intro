var React = require("react");

var prettyStyle = {
    color: "pink", 
    textDecoration: "italic", 
    textShadow: "2px 2px 2px yellow"
};

var PrettyText = function (props) {
    return <div style={prettyStyle}>{props ? props.text : "No text provided!"}</div>
};

module.exports = PrettyText;