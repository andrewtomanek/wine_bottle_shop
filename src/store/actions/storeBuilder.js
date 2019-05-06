import * as actionTypes from "./actionTypes";

export const addInventory = name => {
  return {
    type: actionTypes.ADD_INVENTORY,
    inventoryName: name
  };
};

export const removeInventory = name => {
  return {
    type: actionTypes.REMOVE_INVENTORY,
    inventoryName: name
  };
};

export const setInventory = inventory => {
  return {
    type: actionTypes.SET_INVENTORY,
    inventory: inventory
  };
};

export const fetchInventoryFailed = () => {
  return {
    type: actionTypes.FETCH_INVENTORY_FAILED
  };
};

export const initInventory = () => {
  return {
    type: actionTypes.INIT_INVENTORY
  };
};

export const initList = () => {
  return {
    type: actionTypes.INIT_LIST
  };
};
