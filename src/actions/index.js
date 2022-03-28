import * as types from '../constant/ActionType';

//LOGIN
export const loginSuccess = (data) => { return { type: types.LOGIN_SUCCESS, data: data }};

//USER
export const createUserSuccess = (data) =>{return { type: types.CREATE_USER_SUCCESS, data: data}};
export const createUserFailed = (data) => {return {type: types.CREATE_USER_FAILED, data: data}};

//LOADING
export const loadding = (data) => { return {type: types.LOADING, data: data}};

//TRAINING PROGRAM
export const getAllTrainingProgramSuccess = (data) => ({type: types.GET_ALL_TRAINING_PROGRAM_SUCCESS, data: data});