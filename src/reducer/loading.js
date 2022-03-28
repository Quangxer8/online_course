import * as types from '../constant/ActionType';

const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.LOADING :
            return { loading: action.data };
        default:
            return state;
    }
}
export default loadingReducer;