import authorReducer from './authorReducer';
import languageReducer from './languageReducer';
import typeReducer from './typeReducer';
import unitReducer from './unitReducer';
import materialReducer from './materialReducer';
import optionReducer from './optionReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  author: authorReducer,
  language: languageReducer,
  type: typeReducer,
  unit: unitReducer,
  material: materialReducer,
  option: optionReducer
});

export default rootReducer;
