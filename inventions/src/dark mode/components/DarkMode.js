import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import '../styling/DarkMode.css';

const DarkMode = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className='navbar'>
			<div className='header'>
				<h5 className='name'>Dark Mode</h5>
				<div className='dark-mode__toggle'>
					<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
				</div>
			</div>
		</nav>
	);
};

export default DarkMode;
