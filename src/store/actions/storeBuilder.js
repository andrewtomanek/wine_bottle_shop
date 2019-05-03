import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addInventory = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    inventoryName: name
  };
};

export const removeInventory = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
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

export const setList = listItems => {
  return {
    type: actionTypes.SET_LIST,
    listItems: listItems
  };
};

export const fetchListFailed = () => {
  return {
    type: actionTypes.FETCH_LIST_FAILED
  };
};

export const initInventory = () => {
  return dispatch => {
    axios
      .get("https://bottle-2f0f4.firebaseio.com/inventory.json")
      .then(response => {
        dispatch(setInventory(response.data));
      })
      .catch(error => {
        dispatch(fetchInventoryFailed());
      });
  };
};

export const initList = () => {
  return dispatch => {
    axios
      .get("https://bottle-2f0f4.firebaseio.com/list.json")
      .then(response => {
        dispatch(setList(response.data));
      })
      .catch(error => {
        dispatch(fetchListFailed());
      });
  };
};
