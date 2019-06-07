import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../actions";

export function* purchaseStoreSaga(action) {
  yield put(actions.purchaseStoreStart());
  try {
    console.log(action.token)
    const response = yield axios.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(
      actions.purchaseStoreSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseStoreFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  console.log(action.token)
  yield put(actions.fetchOrdersStart());
  const queryParams =
    "?auth=" +
    action.token +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  try {
    const response = yield axios.get("/orders.json" + queryParams);
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key
      });
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}
