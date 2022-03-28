import { all } from 'redux-saga/effects';
import watchLogin from './login';

export default function* rootLogin(){
    yield all([
        watchLogin(),
    ]);
}