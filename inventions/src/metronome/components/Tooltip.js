import React from 'react';
import { Tooltip, Button } from 'shards-react';
import '../styling/ToolTip.css';

export default class TooltipButton extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			top    : false,
			left   : false,
			bottom : false,
			right  : false,
		};
	}

	toggle(pos) {
		const newState = {};
		newState[pos] = !this.state[pos];
		this.setState({ ...this.state, ...newState });
	}
	render() {
		return (
			<div>
				<Button id='TooltipRight' className='mr-2'>
					What is this?
				</Button>
				<Tooltip
					placement='right'
					open={this.state.right}
					target='#TooltipRight'
					toggle={() => this.toggle('right')}>
					This is a device used by musicians that marks time at a selected rate by giving a regular tick.
				</Tooltip>
			</div>
		);
	}
}
