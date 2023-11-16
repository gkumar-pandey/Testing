import productReducer from "./product.reducer";
const initialState = {
  products: [
    {
      id: 1,
      name: "Phone",
      category: "Electronics",
      price: 500,
      inStock: true,
    },
    { id: 2, name: "Shirt", category: "Clothing", price: 20, inStock: true },
    {
      id: 3,
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      inStock: true,
    },
    { id: 4, name: "Jeans", category: "Clothing", price: 40, inStock: false },
  ],
  filters: {
    category: "All",
    searchQuery: "",
    sortBy: "price",
    ascending: true,
    priceRange: { min: 0, max: 1000 },
  },
};

describe("Product Reducer", () => {
  it("should set category filter ", () => {
    const initialState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    };

    const action = {
      type: "SET_CATEGORY",
      payload: "Cloathing",
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "Cloathing",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });
  it("should set search query ", () => {
    const action = {
      type: "SET_SEARCH_QUERY",
      payload: "phone",
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "phone",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });
  it("should set sort", () => {
    const action = {
      type: "SET_SORT",
      payload: "inStock",
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "inStock",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });
  it("should set price range ", () => {
    const action = {
      type: "SET_PRICE_RANGE",
      payload: { min: 20, max: 500 },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: true,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 20, max: 500 },
      },
    });
  });
  it("should toggle availability of the product", () => {
    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: { productId: 2 },
    };
    const updatedState = productReducer(initialState, action);
    expect(updatedState).toEqual({
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true,
        },
        {
          id: 2,
          name: "Shirt",
          category: "Clothing",
          price: 20,
          inStock: false,
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true,
        },
        {
          id: 4,
          name: "Jeans",
          category: "Clothing",
          price: 40,
          inStock: false,
        },
      ],
      filters: {
        category: "All",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 },
      },
    });
  });
});
