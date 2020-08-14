export const reduceCartState = (inventory) => {
  const sum = Object.keys(inventory)
    .map((igKey) => {
      return inventory[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
  return sum;
};
