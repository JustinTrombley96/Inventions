import React from 'react';
import './App.css';
import MetronomeCard from './metronome/components/MetronomeCard';
import TodoCard from './todo list/components/TodoCard';
import 'shards-ui/dist/css/shards.min.css';
import DarkMode from './dark mode/components/DarkMode';
import Navbar from './Navbar';

function App() {
	return (
		<div className='App'>
			<div className="navbar">
				<div className="header">
			<Navbar />
			</div>
			<DarkMode />
			</div>
			<div className="cards">
			<MetronomeCard />
			<TodoCard />
			</div>
		</div>
	);
}

export default App;
