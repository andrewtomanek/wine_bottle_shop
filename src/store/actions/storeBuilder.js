import * as actionTypes from "./actionTypes";

export const addInventory = (name) => {
  return {
    type: actionTypes.ADD_INVENTORY,
    inventoryName: name,
  };
};

export const removeInventory = (name) => {
  return {
    type: actionTypes.REMOVE_INVENTORY,
    inventoryName: name,
  };
};

export const setInventory = (inventory) => {
  return {
    type: actionTypes.SET_INVENTORY,
    inventory: inventory,
  };
};

export const fetchInventoryFailed = () => {
  return {
    type: actionTypes.FETCH_INVENTORY_FAILED,
  };
};

export const initInventory = () => {
  return {
    type: actionTypes.INIT_INVENTORY,
  };
};

export const setList = (listItems) => {
  return {
    type: actionTypes.SET_LIST,
    listItems: listItems,
  };
};

export const initList = () => {
  return {
    type: actionTypes.INIT_LIST,
  };
};

export const setPrices = (prices) => {
  return {
    type: actionTypes.SET_PRICES,
    prices,
  };
};

export const fetchPricesFailed = () => {
  return {
    type: actionTypes.FETCH_PRICES_FAILED,
  };
};

export const initPrices = () => {
  return {
    type: actionTypes.INIT_PRICES,
  };
};

export const showCartDrawer = (value) => {
  return {
    type: actionTypes.SHOW_CART_DRAWER,
    value,
  };
};

export const emptyShopCart = () => {
  return {
    type: actionTypes.EMPTY_SHOP_CART,
  };
};

export const fetchListFailed = () => {
  return {
    type: actionTypes.FETCH_LIST_FAILED,
  };
};
