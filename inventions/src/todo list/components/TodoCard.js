import React, { useReducer } from 'react';
import { Card, CardTitle, CardBody, CardHeader, CardText } from 'shards-react';
import { reducer, initialState } from '../reducers/reducer';

import TodoList from '../components/Todolist';
import Form from '../components/Form';
import '../../styling/Card.css';
import '../styling/todo.css';

const TodoCard = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const addItem = (e, item) => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: item });
	};

	const toggleTodo = itemid => {
		dispatch({ type: 'TOGGLE_TODO', payload: itemid });
	};

	const clearCompleted = e => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETED' });
	};
	return (
		<Card className='card' style={{ maxWidth: '400px' }}>
			<CardHeader className='cardHeader' />
			<CardBody className='cardBody'>
					<CardTitle>Todo List</CardTitle>
					<Form addItem={addItem} />
					<TodoList todos={state.todos} toggleTodo={toggleTodo} clearCompleted={clearCompleted} />
			</CardBody>
			{/* <CardFooter>Card Footer</CardFooter> */}
		</Card>
	);
};
export default TodoCard;
