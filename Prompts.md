# Development Journey & AI Collaboration

This document captures the iterative process of upgrading the **ShopZone SPA** from Context API to a full enterprise-grade **Redux Toolkit** state management system. It reflects the key technical questions, architectural decisions, and debugging sessions I initiated while building each level of the upgrade.

---

## 🏗️ Level 1: Redux Setup & Cart Migration

**Goal**: Replace Context API entirely with Redux Toolkit. Establish the global store, migrate cart and auth state into dedicated slices, and ensure state persists across page refreshes.

### 1. Why Redux Over Context API?
> "My ShopZone app uses Context API for the cart. As the app grows with filtering, theming, and more global state, Context is getting messy. What is the core difference between Context API and Redux Toolkit, and why would I choose RTK for a growing e-commerce application?"

### 2. Setting Up the Redux Store
> "I want to set up a Redux store using `configureStore` from Redux Toolkit. I also want to use `redux-persist` so that my cart and auth state survive a page refresh using `localStorage`. How do I wire these together in a `store.js` file and wrap my app with both `<Provider>` and `<PersistGate>` in `main.jsx`?"

### 3. Creating the Cart Slice
> "I need to migrate my existing `CartContext.jsx` logic into a Redux `cartSlice`. The slice needs `addToCart` (which increments quantity if the item already exists), `removeFromCart`, `updateQuantity`, and `clearCart` actions. How do I write this using `createSlice` from RTK while keeping all state updates immutable?"

### 4. Connecting Components to the Store
> "Now that my cart logic is in Redux, how do I update my `Navbar.jsx`, `Cart.jsx`, and `ProductDetails.jsx` to read state using `useSelector` and dispatch actions using `useDispatch`? Show me how to replace the old `useCart()` hook calls with the RTK equivalents."

### 5. Verifying Redux with DevTools
> "How do I use the Redux DevTools Chrome extension to verify that my `cart/addToCart` and `cart/removeFromCart` actions are firing correctly when I interact with the app? What should I look for in the action log and state diff panels?"

---

## 🔍 Level 2: Complex Filtering with Global State

**Goal**: Build an advanced product filtering system where all active filter values live in the Redux store, and the product grid updates instantly based on global state.

### 6. Designing the Filter Slice
> "I want to add advanced filtering to my Shop page. The filter state needs to hold `selectedCategory`, `priceRange` (min/max), `minRating`, `sortBy`, and `searchQuery`. How do I create a `filterSlice` in Redux Toolkit with actions for each of these, plus a `resetFilters` action that clears everything back to defaults?"

### 7. Fetching Products with createAsyncThunk
> "Currently my `Shop.jsx` fetches products from `dummyjson.com` using a local `useState` and `useEffect`. I want to move this API call into Redux using `createAsyncThunk` inside a `productsSlice`. How do I handle the three async states — pending, fulfilled, and rejected — inside the slice's `extraReducers`?"

### 8. Building the Filter Sidebar Component
> "I need to build a `FilterSidebar.jsx` component that dispatches Redux actions when the user interacts with filters. It should have category buttons, a price range slider, a star rating selector, a sort dropdown, a search bar, and a reset button. How do I connect each control to its corresponding Redux action using `useDispatch`?"

### 9. Applying Filters in the Product Grid
> "In my `Shop.jsx`, I want to read the active filter values from the Redux store using `useSelector` and apply them to the fetched product list. How do I chain multiple filter conditions — category, price range, minimum rating, and search query — and then apply a sort, all within the component render?"

---

## ⚡ Level 3: Render Optimization & Theme Manager

**Goal**: Ensure the application performs efficiently when filtering large product lists, and implement a Dark/Light theme manager controlled entirely through Redux global state.

### 10. Optimizing Filtering with useMemo
> "My `Shop.jsx` re-runs the entire filter and sort logic on every render, even when unrelated state changes. How do I wrap this filtering logic in `useMemo` so it only recalculates when the actual filter values or the product list changes? What should go in the dependency array?"

### 11. Preventing Re-renders with useCallback
> "I'm passing handler functions like `onCategoryChange` and `onPriceChange` from `Shop.jsx` down to `FilterSidebar.jsx` as props. Every re-render of `Shop.jsx` creates new function references, causing `FilterSidebar` to re-render unnecessarily. How do I use `useCallback` to fix this?"

### 12. Memoizing the Product Card
> "My product grid renders 30+ cards. When a filter changes, all 30 cards re-render even if their own data hasn't changed. How do I extract the card into a separate `ProductCard.jsx` component and wrap it with `React.memo` so it only re-renders when its own `product` prop actually changes?"

### 13. Creating the Theme Slice
> "I want to add a Dark/Light mode toggle to ShopZone that is controlled entirely by Redux. How do I create a `themeSlice` with a `toggleTheme` action, read the theme value in `App.jsx` using `useSelector`, and apply it as a `data-theme` attribute on the root element so that CSS custom properties like `--bg-primary` and `--text-primary` update the entire UI instantly?"

### 14. Making Theme Persist Across Refreshes
> "My theme toggle works, but when I refresh the page it resets to dark mode. I'm already using `redux-persist`. What change do I need to make to my `persistConfig` in `store.js` to ensure the `theme` slice is also saved to `localStorage` and restored on reload?"

### 15. Verifying Optimization with React Profiler
> "How do I use the React DevTools Profiler to confirm my `useMemo`, `useCallback`, and `React.memo` optimizations are working? What should I look for when I record a filter interaction — which components should re-render and which ones should not?"

---