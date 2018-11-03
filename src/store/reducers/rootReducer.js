import authorReducer from './authorReducer';
import languageReducer from './languageReducer';
import typeReducer from './typeReducer';
import unitReducer from './unitReducer';
import materialReducer from './materialReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  author: authorReducer,
  language: languageReducer,
  type: typeReducer,
  unit: unitReducer,
  material: materialReducer
});

export default rootReducer;
