export let initialState = {
    cart: [],
};
console.log(initialState.cart);
console.log(initialState.cart.length);

let reducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
