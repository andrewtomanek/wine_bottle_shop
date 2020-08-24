import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

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
  inventory: null,
  listItems: null,
  pricesList: null,
  totalPrice: 100,
  isCartDrawerOpen: false,
  error: false,
  building: false,
};

const addInventory = (state, action) => {
  const updatedInventory = {
    [action.inventoryName]: state.inventory[action.inventoryName] + 1,
  };
  const updatedInventorys = updateObject(state.inventory, updatedInventory);
  const updatedState = {
    inventory: updatedInventorys,
    totalPrice: state.totalPrice + state.pricesList[action.inventoryName],
    building: true,
  };

  localStorage.setItem("inventory", JSON.stringify(updatedState.inventory));
  localStorage.setItem("totalPrice", JSON.stringify(updatedState.totalPrice));
  return updateObject(state, updatedState);
};

const removeInventory = (state, action) => {
  const updatedIng = {
    [action.inventoryName]: state.inventory[action.inventoryName] - 1,
  };
  const updatedIngs = updateObject(state.inventory, updatedIng);
  const updatedSt = {
    inventory: updatedIngs,
    totalPrice: state.totalPrice - state.pricesList[action.inventoryName],
    building: true,
  };
  localStorage.setItem("inventory", JSON.stringify(updatedSt.inventory));
  localStorage.setItem("totalPrice", JSON.stringify(updatedSt.totalPrice));
  return updateObject(state, updatedSt);
};

const setInventory = (state, action) => {
  const inventory = localStorage.getItem("inventory");
  const sumPrice = localStorage.getItem("totalPrice");
  if (inventory) {
    return {
      ...state,
      inventory: JSON.parse(inventory),
      totalPrice: JSON.parse(sumPrice),
    };
  } else {
    return {
      ...state,
      inventory: action.inventory,
      totalPrice: 100,
    };
  }
};

const fetchInventoryFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};

const changeCartDrawer = (state, action) => {
  return {
    ...state,
    isCartDrawerOpen: action.value,
  };
};

const cleanCart = (state, action) => {
  localStorage.setItem("inventory", JSON.stringify(EMPTY_INVENTORY));
  localStorage.setItem("totalPrice", JSON.stringify(100));
  return {
    ...state,
    inventory: EMPTY_INVENTORY,
    totalPrice: 100,
    isCartDrawerOpen: false,
  };
};

const setList = (state, action) => {
  return {
    ...state,
    listItems: action.listItems,
  };
};

const fetchListFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};

const setPrices = (state, action) => {
  return {
    ...state,
    pricesList: action.prices,
  };
};

const fetchPricesFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INVENTORY:
      return addInventory(state, action);
    case actionTypes.REMOVE_INVENTORY:
      return removeInventory(state, action);
    case actionTypes.SET_INVENTORY:
      return setInventory(state, action);
    case actionTypes.FETCH_INVENTORY_FAILED:
      return fetchInventoryFailed(state, action);
    case actionTypes.SET_LIST:
      return setList(state, action);
    case actionTypes.FETCH_LIST_FAILED:
      return fetchListFailed(state, action);
    case actionTypes.SET_PRICES:
      return setPrices(state, action);
    case actionTypes.FETCH_PRICES_FAILED:
      return fetchPricesFailed(state, action);
    case actionTypes.SHOW_CART_DRAWER:
      return changeCartDrawer(state, action);
    case actionTypes.EMPTY_SHOP_CART:
      return cleanCart(state, action);
    default:
      return state;
  }
};

export default reducer;
