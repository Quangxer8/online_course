import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import loading from './loading';
import trainingProgram from './training_program';

const rootReducer = combineReducers({
    login,
    user,
    loading,
    trainingProgram,
});

export default rootReducer;