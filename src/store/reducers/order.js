import * as actionTypes from "../actions/actionTypes";

const EMPTY_INVENTORY = {
  shopItem1: 0,
  shopItem2: 0,
  shopItem3: 0,
  shopItem4: 0,
  shopItem5: 0,
  shopItem6: 0,
  shopItem7: 0,
  shopItem8: 0,
};

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state) => {
  return {
    ...state,
    purchased: false,
  };
};

const purchaseStoreStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const purchaseStoreSuccess = (state, action) => {
  localStorage.setItem("inventory", JSON.stringify(EMPTY_INVENTORY));
  localStorage.setItem("totalPrice", JSON.stringify(100));
  const newOrder = { ...action.orderData, ...{ id: action.orderId } };
  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  };
};

const purchaseStoreFail = (state) => {
  return {
    ...state,
    loading: false,
  };
};

const fetchOrdersStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false,
  };
};

const fetchOrdersFail = (state) => {
  return {
    ...state,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_INVENTORY_START:
      return purchaseStoreStart(state, action);
    case actionTypes.PURCHASE_INVENTORY_SUCCESS:
      return purchaseStoreSuccess(state, action);
    case actionTypes.PURCHASE_INVENTORY_FAIL:
      return purchaseStoreFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
