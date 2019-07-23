import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import MetronomeCard from '../../metronome/components/MetronomeCard';

export const useDarkMode = () => {
	const [ darkValue, setDarkValue ] = useLocalStorage('Dark Key');
	useEffect(
		() => {
			let body = document.querySelector('body', MetronomeCard);
			darkValue ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
		},
		[ darkValue ],
	);
	return [ darkValue, setDarkValue ];
};
