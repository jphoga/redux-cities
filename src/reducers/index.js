import { combineReducers } from 'redux';

import CitiesReducer from './cities_reducer';
import SelectedCityReducer from './selected_city_reducer';

const rootReducer = combineReducers({
	cities: CitiesReducer,
	activeCity: SelectedCityReducer
});

export default rootReducer;
