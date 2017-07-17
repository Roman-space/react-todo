const React = require('react');

const TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                { 
                    id: 1,
                    text: 'Hello world'
                },
                { 
                    id: 2,
                    text: 'Walk the dog'
                },
                { 
                    id: 3,
                    text: 'Hello dog'
                } ]
        };
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});
module.exports = TodoApp;
