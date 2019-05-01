import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  ingredients: null,
  listItems: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  wine1: 50.0,
  wine2: 40.0,
  wine3: 70.0,
  wine4: 80.0,
  wine5: 90.0,
  wine6: 100.0,
  wine7: 150.0,
  wine8: 250.0
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      wine1: action.ingredients.wine1,
      wine2: action.ingredients.wine2,
      wine3: action.ingredients.wine3,
      wine4: action.ingredients.wine4,
      wine5: action.ingredients.wine5,
      wine6: action.ingredients.wine6,
      wine7: action.ingredients.wine7,
      wine8: action.ingredients.wine8
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const setList = (state, action) => {
  return updateObject(state, {
    listItems: {
      wine1: action.list.wine1,
      wine2: action.list.wine2,
      wine3: action.list.wine3,
      wine4: action.list.wine4,
      wine5: action.list.wine5,
      wine6: action.list.wine6,
      wine7: action.list.wine7,
      wine8: action.list.wine8
    }
  });
};

const fetchListFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    case actionTypes.SET_LIST:
      return setList(state, action);
    case actionTypes.FETCH_LIST_FAILED:
      return fetchListFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
