const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  discounts: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // refer the code done in class if needed
      break;
    case "REMOVE_FROM_CART":
      // refer the code done in class if needed
      break;
    case "UPDATE_QUANTITY":
      // refer the code done in class if needed
      break;
    case "ADD_DISCOUNT":
      const newDiscounts = [...state.discounts, action.payload.discount];
      const newTotalPriceWithDiscounts = calculateTotalPrice(
        state.items,
        newDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newDiscounts,
        totalPrice: newTotalPriceWithDiscounts
      };
    case "APPLY_PROMOTION":
      const newPromotions = [...state.discounts, action.payload.promotion];
      const newTotalPriceWithPromotions = calculateTotalPrice(
        state.items,
        newPromotions,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: newPromotions,
        totalPrice: newTotalPriceWithPromotions
      };

    case "REMOVE_DISCOUNT":
      const remainingDiscounts = state.discounts.filter(
        (discount) => discount.id !== action.payload.discountId
      );
      const newTotalPriceWithoutDiscounts = calculateTotalPrice(
        state.items,
        remainingDiscounts,
        state.totalQuantity
      );
      return {
        ...state,
        discounts: remainingDiscounts,
        totalPrice: newTotalPriceWithoutDiscounts
      };

    default:
      return state;
  }
}

function calculateTotalPrice(items, discounts, totalQuantity) {
  const totalDiscount = discounts.reduce(
    (sum, discount) => sum + discount.value,
    0
  );
  const itemTotalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPrice = itemTotalPrice - totalDiscount;
  return totalPrice;
}

export default cartReducer;
