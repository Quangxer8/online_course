
import * as types from '../../constant/ActionType';
import {rootURL} from '../../constant/Api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loadding, loginSuccess } from '../../actions';
import loading from '../../components/loading';

async function loginAsyns(data){
    const token = "";
    const resp = await fetch(rootURL+"/login", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => { return data})
        .catch(error => console.error(error));
    return resp;
}

function* login ( action ){
    try {
        const data = yield call( loginAsyns, action.data );
        console.log(data);
        console.log('oke2');
        yield put( loadding(true));
        yield put( loginSuccess( data ));
        yield put( loading(false));
        
    } catch (error) {
        console.log(error)
    }
}

export default function* watchLogin(){
    yield takeLatest( types.LOGIN, login);
}