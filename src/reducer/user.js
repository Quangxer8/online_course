import * as types from '../constant/ActionType';

const initialState = {
    status: false,
    message: ''
};

function reducerUser( state = initialState, action){

    switch (action.type) {
        case types.CREATE_USER_SUCCESS:

            return {...action.data};
        case types.CREATE_USER_FAILED:
            return {...action.data}
        default:
            return state;
    }
}

export default reducerUser;