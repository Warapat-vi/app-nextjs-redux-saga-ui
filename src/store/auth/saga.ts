import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import AuthService from "@/service/AuthService";

import {
    loginFailure,
    loginSuccess,
    signupSuccess,
    signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionTypes";
import { IAuth } from "./types";

const signup = async (payload: { email: string; password: string }) => {
    const { data } = await axios.post<IAuth>(
        "https://reqres.in/api/register",
        { ...payload },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
    );

    return data;
};

function* loginSaga(action: any) {
    try {
        const response: { 
            data: { 
                token: string; 
                messages: string ;
                user : { 
                    name: string; 
                    role: string;
                }  ; 
            }; 
            status: number; 
             
        } = yield call(AuthService.login, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        });

        yield put(
            loginSuccess({
                token: response.data.token,
                user: response.data.user
            })
        );
        action.payload.callback.suscess(response.data.token);

    } catch (e: any) {
        yield put(
            loginFailure({
                error: e.response.data.message,
            })
        );
    }
}

function* signupSaga(action: any) {
    try {
        const response: { token: string } = yield call(signup, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        });

        yield put(
            signupSuccess({
                token: response.token,
            })
        );
        action.payload.callback(response.token);
    } catch (e: any) {
        yield put(
            signupFailure({
                error: e.message,
            })
        );
    }
}

function* authSaga() {
    yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
    yield all([takeLatest(SIGNUP_REQUEST, signupSaga)]);
}

export default authSaga;