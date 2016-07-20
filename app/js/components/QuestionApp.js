var React = require('react');
var ReactDOM = require('react-dom');
var ShowAddButton = require('./ShowAddButton.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');
var _ = require('lodash');

module.exports = React.createClass({
	getInitialState:function(){
		var questions = [
			{
				key: 1,
				title:'李逵问焦挺',
				description:'（李逵）坐在地下，仰着脸问道：“你这汉子姓甚名谁？”那汉（焦挺）道：“老爷没姓……”',
				voteCount: 10,
			},
			{
				key: 2,
				title:'武松',
				description:'我实在想不出单手平地砍马头需要多大的力量，薛平一刀削三首也是在马上有冲力，武二的力量简直惊天动地——所以我想他杀潘金莲的时候一定还是有些许的不忍，或许是一丝犹豫，不然以他的力量肯定能手撕潘金莲。',
				voteCount: 8,
			},
		];

		return {
			questions: questions,
			formDisplayed: false,
		}
	},
	onToggleForm:function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed,
		})
	},
	onNewQuestion:function( newQuestion ){
		newQuestion.key = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat( newQuestion );

		newQuestions = this.sortQuestion( newQuestions );

		this.setState({
			questions: newQuestions,
		})
	},
	sortQuestion:function(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	},
	onVote:function(key,newCount){
		var questions = _.uniq( this.state.questions );
		var index = _.findIndex( questions, function(qst){
			return qst.key == key;
		} )

		questions[index].voteCount = newCount;

		questions = this.sortQuestion(questions);

		this.setState({
			questions: questions
		})
	},
	render:function(){
		return (
		<div>
			<div className="jumbotron text-center">
			    <div className="container">
			      <h1>水浒人物</h1>
			      <ShowAddButton onToggleForm={this.onToggleForm} />
			    </div>
			</div>
			<div className="main container">
			  <QuestionForm  
			  	onNewQuestion={this.onNewQuestion }
			  	onToggleForm={this.onToggleForm} 
			  	formDisplayed={this.state.formDisplayed } />
			  
			  <QuestionList onVote={this.onVote} questions={this.state.questions } />

			</div>
		</div>
		)
	}
})