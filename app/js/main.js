var ReactDOM = require('react-dom');
var React = require('react');
var QuestionApp = require('./components/QuestionApp.js');

var mainCom = ReactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
)
