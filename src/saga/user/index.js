import watchCreate from './create';
import { all } from 'redux-saga/effects';

export default function* rootUser(){
    yield all([
        watchCreate(),
    ])
}