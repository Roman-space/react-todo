const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'do smth'
        }, {
            id: 2,
            text: 'not do smth'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todos.length).toBe(todosComponents.length);
    });
});
