import * as React from 'react';
import Weather from './weather';
import LocationsProvider from '../shared/LocationsProvider';

const WeatherIndex = () => {
	return (
		<div>
			<LocationsProvider>
				<Weather />
			</LocationsProvider>
		</div>
	);
};

export default WeatherIndex;
