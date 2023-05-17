import { take, takeEvery } from 'redux-saga/effects'
import { mobileDetailsSaga, mobileListSaga } from '../Component/maincomponent/Mobiless/Reduxx/MobileSaga';
import { loginSaga } from './Auth/AuthSaga';
import * as action_type from './Constant'



function* RootSaga() {
    yield takeEvery(action_type.LOGIN_REQUEST, loginSaga)
    yield takeEvery(action_type.MOBILELIST_REQUEST, mobileListSaga)
    yield takeEvery(action_type.MOBILEDETAILS_REQUEST, mobileDetailsSaga)
}

export default RootSaga;


