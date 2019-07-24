import React from 'react';
import { FormInput, Button } from "shards-react"

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			item : '',
		};
	}
	handleChanges = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitTodo = e => {
		e.preventDefault();
		this.setState({ item: '' });
		this.props.addItem(e, this.state.item);
	};
	render() {
		console.log('rendering form');
		return (
			<form onSubmit={this.submitTodo}>
				<FormInput type='text' size="lg"value={this.state.item} name='item' onChange={this.handleChanges} />
				<Button theme="success">Add</Button>
			</form>
		);
	}
}

export default Form;
