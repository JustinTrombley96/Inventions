import React from 'react';
import Todo from './Todo';
import {Button, ListGroup, ListGroupItem, ListGroupItemHeading} from 'shards-react'
import '../styling/todo.css'

const TodoList = props => {
	return (
		<ListGroup >
			<ListGroupItemHeading className="heading">Current List</ListGroupItemHeading>
			<ListGroupItem className="list" active="true" >{props.todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />)}</ListGroupItem>
			<Button theme="danger" className='clear-btn' onClick={props.clearCompleted}>
				Clear Completed
			</Button>
		</ListGroup>
	);
};

export default TodoList;
