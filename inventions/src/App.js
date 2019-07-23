import React from 'react';
import './App.css';
import MetronomeCard from './metronome/components/MetronomeCard';
import TodoCard from './todo list/components/TodoCard'
import 'shards-ui/dist/css/shards.min.css';
import DarkMode from './dark mode/components/DarkMode';

function App() {
	return (
		<div className='App'>
			<DarkMode />
			<MetronomeCard />
      <TodoCard />
		</div>
	);
}

export default App;
