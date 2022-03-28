import { rootURL } from '../../constant/Api';
import * as types from '../../constant/ActionType';
import { createUserFailed, createUserSuccess, loadding } from '../../actions/index';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

async function asyncCreateUser(data){
    const response = await fetch(rootURL + "/register",{
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
        console.log(res.message);          
        if(res._id){
            return {status: true, message: "Chúc mừng! Bạn đã tạo tài khoản thành công."}
        }else {
            if(res.errors){
                return {status: false, message: res.errors[0].msg}
            }
            return {status: false, message: res.message}
        }

    })
    .catch(err => {
        console.error(err);
    });
    return response;
}

function* createUser(action){
    yield put(loadding(true));
    try {
        const data = yield call(asyncCreateUser,action.data);
        yield put(loadding(false));
        yield put(createUserSuccess( data ));
        yield delay(3000);
        yield put(createUserSuccess({status: true, message: ''}))

    } catch (error) {
        yield put(loadding(false));
        yield put(createUserFailed({status: false, message: error}));
        yield delay(3000);
        yield put(createUserFailed({status: false, message: ''}))
    }

}

export default function* watchCreate(){
    yield takeLatest(types.CREATE_USER, createUser);
}