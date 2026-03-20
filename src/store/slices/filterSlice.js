import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedCategory: 'all',
    priceRange: { min: 0, max: 2000 },
    minRating: 0,
    sortBy: 'default',
    searchQuery: ''
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setMinRating: (state, action) => {
            state.minRating = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        resetFilters: (state) => {
            return initialState;
        }
    }
});

export const { 
    setCategory, 
    setPriceRange, 
    setMinRating, 
    setSortBy, 
    setSearchQuery, 
    resetFilters 
} = filterSlice.actions;

export default filterSlice.reducer;