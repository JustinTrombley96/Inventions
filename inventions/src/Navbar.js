import React from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';

export default function NavPillsExample() {
	return (
		<Nav pills>
			<NavItem>
				<NavLink active href='#'>
					Active
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href='#'>Link</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href='#'>Another Link</NavLink>
			</NavItem>
			<NavItem>
				<NavLink disabled href='#'>
					Disabled Link
				</NavLink>
			</NavItem>
		</Nav>
	);
}
