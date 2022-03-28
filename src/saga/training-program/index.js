import { all } from "redux-saga/effects";
import watchGetAll from "./get-all";

export default function* rootTrainingProgram(){
    yield all([
        watchGetAll(),
    ])
}