import cartReducer from "./cart.reducer";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  discounts: [],
};

describe("cartReducer", () => {
  it("should add new item in cart", () => {
    const initialState = {
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: [],
    };
    const action = {
      type: "ADD_TO_CART",
      payload: {
        id: 2,
        productName: "Iphone",
        price: 1000,
        quantity: 1,
      },
    };
    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [
        { id: 1, productName: "Mobile", price: 2000, quantity: 1 },
        {
          id: 2,
          productName: "Iphone",
          price: 1000,
          quantity: 1,
        },
      ],
      totalPrice: 3000,
      totalQuantity: 2,
      discounts: [],
    });
  });
  it("should remove item from cart", () => {
    const initialState = {
      items: [
        { id: 1, productName: "Mobile", price: 2000, quantity: 1 },
        {
          id: 2,
          productName: "Iphone",
          price: 1000,
          quantity: 1,
        },
      ],
      totalPrice: 3000,
      totalQuantity: 2,
      discounts: [],
    };
    const action = {
      type: "REMOVE_FROM_CART",
      payload: { id: 2 },
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: [],
    });
  });

  it("should increase quantity of item by 1", () => {
    const initialState = {
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 3000,
      totalQuantity: 2,
      discounts: [],
    };
    const action = {
      type: "UPDATE_QUANTITY",
      payload: { id: 1 },
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 2 }],
      totalPrice: 4000,
      totalQuantity: 2,
      discounts: [],
    });
  });
  it("should add discount to the cart and the total price is recalculated ", () => {
    const initialState = {
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: [],
    };
    const action = {
      type: "ADD_DISCOUNT",
      payload: { discount: { id: 1, value: 10 } },
    };

    const updatedState = cartReducer(initialState, action);

    expect(updatedState).toEqual({
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 1990,
      totalQuantity: 1,
      discounts: [{ id: 1, value: 10 }],
    });
  });
  it("should add a promotion to the cart and total price is recalculated ", () => {
    const initialState = {
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 1990,
      totalQuantity: 1,
      discounts: [{ id: 1, value: 10 }],
    };
    const action = {
      type: "APPLY_PROMOTION",
      payload: { promotion: { id: 2, value: 10 } },
    };

    const updatedState = cartReducer(initialState, action);

    expect(updatedState).toEqual({
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 1980,
      totalQuantity: 1,
      discounts: [
        { id: 1, value: 10 },
        { id: 2, value: 10 },
      ],
    });
  });

  it("should remove discount from cart and the total price is recalculated ", () => {
    const initialState = {
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 1980,
      totalQuantity: 1,
      discounts: [
        { id: 1, value: 10 },
        { id: 2, value: 10 },
      ],
    };
    const action = {
      type: "REMOVE_DISCOUNT",
      payload: { discountId: 1 },
    };

    const updatedState = cartReducer(initialState, action);

    expect(updatedState).toEqual({
      items: [{ id: 1, productName: "Mobile", price: 2000, quantity: 1 }],
      totalPrice: 1990,
      totalQuantity: 1,
      discounts: [{ id: 2, value: 10 }],
    });
  });
});
