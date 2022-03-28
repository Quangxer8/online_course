import { all } from 'redux-saga/effects';
import loginSaga from './login';
import userSaga from './user';
import trainingProgramSaga from './training-program';


export default function* rootSaga(){
    yield all([
        loginSaga(),
        userSaga(),
        trainingProgramSaga(),
    ]);
}