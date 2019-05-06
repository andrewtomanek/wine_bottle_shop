import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../actions";

export function* initInventorySaga(action) {
  try {
    const response = yield axios.get(
      "https://bottle-2f0f4.firebaseio.com/inventory.json"
    );
    yield put(actions.setInventory(response.data));
  } catch (error) {
    yield put(actions.fetchInventoryFailed());
  }
}
export function* initListSaga(action) {
  try {
    const response = yield axios.get(
      "https://bottle-2f0f4.firebaseio.com/list.json"
    );
    yield put(actions.setList(response.data));
  } catch (error) {
    yield put(actions.fetchListFailed());
  }
}
