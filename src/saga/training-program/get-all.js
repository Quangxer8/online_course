import * as types from '../../constant/ActionType';
import { rootURL } from '../../constant/Api';
import { getAllTrainingProgramSuccess} from '../../actions/index';
import { call, put, takeLatest } from 'redux-saga/effects';



function* getAll(action){
   const data = yield call(async (data)=>{
      const res =  await fetch(rootURL + "/training-program/get-all",{
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.error(err));
        return res;
    }, action.data);
    yield put(getAllTrainingProgramSuccess(data));
}

export default function* watchGetAll(){
    yield takeLatest(types.GET_ALL_TRAINING_PROGRAM, getAll);
}