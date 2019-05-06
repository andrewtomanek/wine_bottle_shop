import * as actionTypes from "./actionTypes";

export const purchaseStoreSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_INVENTORY_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseStoreFail = error => {
  return {
    type: actionTypes.PURCHASE_INVENTORY_FAIL,
    error: error
  };
};

export const purchaseStoreStart = () => {
  return {
    type: actionTypes.PURCHASE_INVENTORY_START
  };
};

export const purchaseStore = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_INVENTORY,
    orderData: orderData,
    token: token
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  };
};
