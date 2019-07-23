import React from 'react';
import './App.css';
import MetronomeCard from './metronome/components/MetronomeCard';
import 'shards-ui/dist/css/shards.min.css';
import DarkMode from './dark mode/components/DarkMode';

function App() {
	return (
		<div className='App'>
			<DarkMode />
			<MetronomeCard />
		</div>
	);
}

export default App;
