import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  inventory: null,
  listItems: "",
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  shopItem1: 50.0,
  shopItem2: 40.0,
  shopItem3: 70.0,
  shopItem4: 80.0,
  shopItem5: 90.0,
  shopItem6: 100.0,
  shopItem7: 150.0,
  shopItem8: 250.0
};

const addInventory = (state, action) => {
  const updatedIngredient = {
    [action.inventoryName]: state.inventory[action.inventoryName] + 1
  };
  const updatedInventory = updateObject(state.inventory, updatedIngredient);
  const updatedState = {
    inventory: updatedInventory,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.inventoryName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeInventory = (state, action) => {
  const updatedIng = {
    [action.inventoryName]: state.inventory[action.inventoryName] - 1
  };
  const updatedIngs = updateObject(state.inventory, updatedIng);
  const updatedSt = {
    inventory: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.inventoryName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setInventory = (state, action) => {
  return updateObject(state, {
    inventory: {
      shopItem1: action.inventory.shopItem1,
      shopItem2: action.inventory.shopItem2,
      shopItem3: action.inventory.shopItem3,
      shopItem4: action.inventory.shopItem4,
      shopItem5: action.inventory.shopItem5,
      shopItem6: action.inventory.shopItem6,
      shopItem7: action.inventory.shopItem7,
      shopItem8: action.inventory.shopItem8
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const fetchInventoryFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const setList = (state, action) => {
  return updateObject(state, {
    listItems: {
      shopItem1: action.listItems.shopItem1,
      shopItem2: action.listItems.shopItem2,
      shopItem3: action.listItems.shopItem3,
      shopItem4: action.listItems.shopItem4,
      shopItem5: action.listItems.shopItem5,
      shopItem6: action.listItems.shopItem6,
      shopItem7: action.listItems.shopItem7,
      shopItem8: action.listItems.shopItem8
    }
  });
};

const fetchListFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addInventory(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeInventory(state, action);
    case actionTypes.SET_INVENTORY:
      return setInventory(state, action);
    case actionTypes.FETCH_INVENTORY_FAILED:
      return fetchInventoryFailed(state, action);
    case actionTypes.SET_LIST:
      return setList(state, action);
    case actionTypes.FETCH_LIST_FAILED:
      return fetchListFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
