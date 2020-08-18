import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

let inventoryStorage = JSON.parse(localStorage.getItem("inventory"));
let totalPriceStorage = JSON.parse(localStorage.getItem("totalPrice")) || 100;

const initialState = {
  inventory: inventoryStorage,
  listItems: "",
  totalPrice: totalPriceStorage,
  isCartDrawerOpen: false,
  error: false,
  building: false,
};

const INVENTORY_PRICES = {
  shopItem1: 50.0,
  shopItem2: 40.0,
  shopItem3: 70.0,
  shopItem4: 80.0,
  shopItem5: 90.0,
  shopItem6: 100.0,
  shopItem7: 150.0,
  shopItem8: 250.0,
};

const addInventory = (state, action) => {
  const updatedInventory = {
    [action.inventoryName]: state.inventory[action.inventoryName] + 1,
  };
  const updatedInventorys = updateObject(state.inventory, updatedInventory);
  const updatedState = {
    inventory: updatedInventorys,
    totalPrice: state.totalPrice + INVENTORY_PRICES[action.inventoryName],
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
    totalPrice: state.totalPrice - INVENTORY_PRICES[action.inventoryName],
    building: true,
  };
  localStorage.setItem("inventory", JSON.stringify(updatedSt.inventory));
  localStorage.setItem("totalPrice", JSON.stringify(updatedSt.totalPrice));
  return updateObject(state, updatedSt);
};

const setInventory = (state, action) => {
  if (localStorage.getItem("inventory"))
    return updateObject(state, {
      inventory: {
        shopItem1: action.inventoryStorage.shopItem1,
        shopItem2: action.inventoryStorage.shopItem2,
        shopItem3: action.inventoryStorage.shopItem3,
        shopItem4: action.inventoryStorage.shopItem4,
        shopItem5: action.inventoryStorage.shopItem5,
        shopItem6: action.inventoryStorage.shopItem6,
        shopItem7: action.inventoryStorage.shopItem7,
        shopItem8: action.inventoryStorage.shopItem8,
      },
      totalPrice: 100,
      error: false,
      building: false,
    });
  return updateObject(state, {
    inventory: {
      shopItem1: action.inventory.shopItem1,
      shopItem2: action.inventory.shopItem2,
      shopItem3: action.inventory.shopItem3,
      shopItem4: action.inventory.shopItem4,
      shopItem5: action.inventory.shopItem5,
      shopItem6: action.inventory.shopItem6,
      shopItem7: action.inventory.shopItem7,
      shopItem8: action.inventory.shopItem8,
    },
    totalPrice: 100,
    error: false,
    building: false,
  });
};

const fetchInventoryFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const changeCartDrawer = (state, action) => {
  return updateObject(state, { isCartDrawerOpen: action.value });
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
      shopItem8: action.listItems.shopItem8,
    },
  });
};

const fetchListFailed = (state, action) => {
  return updateObject(state, { error: true });
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
    case actionTypes.SHOW_CART_DRAWER:
      return changeCartDrawer(state, action);
    default:
      return state;
  }
};

export default reducer;
