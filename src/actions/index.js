import cities from '../data/cities';

export function getCities() {
	return {
		type: 'GET_CITIES',
		payload: cities
	}
}

export function selectCity(city) {
	return {
		type: 'SELECT_CITY',
		payload: city
	}
}

