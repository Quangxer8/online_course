import * as types from '../constant/ActionType';
const userLocal = null;
const initialState = {
    isLogedIn : userLocal ? true : false ,
    user : userLocal ? userLocal : {},
    error : null,
    message : '',
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case types.LOGIN_SUCCESS:
            // localStorage.setItem( 'user',JSON.stringify (action.data));
            return { ...state, isLogedIn : true, user : action.data };
        
        default: 
            return state;
    }
}

export default loginReducer;