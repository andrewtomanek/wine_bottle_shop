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

export const showCartDrawer = (value) => {
  return {
    type: actionTypes.SHOW_CART_DRAWER,
    value,
  };
};

export const fetchListFailed = () => {
  return {
    type: actionTypes.FETCH_LIST_FAILED,
  };
};
