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

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload,
        },
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        filters: {
          ...state.filters,
          searchQuery: action.payload,
        },
      };
    case "SET_SORT":
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload,
        },
      };
    case "SET_PRICE_RANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.payload,
        },
      };
    case "TOGGLE_AVAILABILITY":
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload.productId
            ? { ...product, inStock: !product.inStock }
            : product;
        }),
      };

    default:
      break;
  }
}

export default productReducer;
