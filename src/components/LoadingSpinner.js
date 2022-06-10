import React from 'react';
import { Circles } from 'react-loader-spinner';
import '../styles/loading.css';

const LoadingSpinner = () => {
	return (
		<div className='loader-wrapper'>
			<Circles color='var(--purple)' />
			<span>Loading</span>
		</div>
	);
};

export default LoadingSpinner;
