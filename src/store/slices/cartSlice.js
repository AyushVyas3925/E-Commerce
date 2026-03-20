import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
};

const calculateTotals = (state) => {
    state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            calculateTotals(state);
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            calculateTotals(state);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity = quantity;
                }
                calculateTotals(state);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
