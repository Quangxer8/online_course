import * as types from '../constant/ActionType';

const initial = [];

const reducerTrainingProgram = (state = initial, action) =>{

    switch (action.type) {
        case types.GET_ALL_TRAINING_PROGRAM_SUCCESS:
            return action.data;
    
        default:
            return state;
    }
}

export default reducerTrainingProgram;