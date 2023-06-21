const initialState = {
  cartData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_To_Bag':
      return {
        ...state,
        cartData: {...action.payload, quantity: 1},
      };
    default:
      return state;
  }
};
