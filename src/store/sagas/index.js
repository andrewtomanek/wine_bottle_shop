import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";
import { initInventorySaga, initListSaga } from "./storeBuilder";
import { purchaseStoreSaga, fetchOrdersSaga } from "./order";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}

export function* watchStoreBuilder() {
  yield takeEvery(actionTypes.INIT_INVENTORY, initInventorySaga);
  yield takeEvery(actionTypes.INIT_LIST, initListSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_INVENTORY, purchaseStoreSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
