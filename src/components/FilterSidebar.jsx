import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCategory,
    setPriceRange,
    setMinRating,
    setSortBy,
    setSearchQuery,
    resetFilters
} from '../store/slices/filterSlice';

function FilterSidebar() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const categories = [
        'all',
        'electronics',
        'clothing',
        'books',
        'sports',
        'home',
        'beauty'
    ];

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        dispatch(setPriceRange({ ...filters.priceRange, max: value }));
    };

    const handleRatingChange = (e) => {
        dispatch(setMinRating(parseInt(e.target.value)));
    };

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value));
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <aside style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            width: '280px',
            position: 'sticky',
            top: '100px'
        }}>
            <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '20px',
                background: 'var(--subheading-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                Filters
            </h3>

            {/* Search */}
            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                    Search Products
                </label>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filters.searchQuery}
                    onChange={handleSearchChange}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontSize: '0.95rem'
                    }}
                />
            </div>

            {/* Category */}
            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                    Category
                </label>
                <select
                    value={filters.selectedCategory}
                    onChange={handleCategoryChange}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        outline: 'none',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                    }}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat} style={{ background: '#222', color: '#fff' }}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Price Range */}
            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                    Price: ${filters.priceRange.min} - ${filters.priceRange.max}
                </label>
                <input
                    type="range"
                    min="0"
                    max="2000"
                    value={filters.priceRange.max}
                    onChange={handlePriceChange}
                    style={{
                        width: '100%',
                        cursor: 'pointer'
                    }}
                />
            </div>

            {/* Rating */}
            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                    Minimum Rating: {filters.minRating}⭐
                </label>
                <select
                    value={filters.minRating}
                    onChange={handleRatingChange}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        outline: 'none',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                    }}
                >
                    <option value={0} style={{ background: '#222', color: '#fff' }}>All Ratings</option>
                    <option value={1} style={{ background: '#222', color: '#fff' }}>1⭐ and up</option>
                    <option value={2} style={{ background: '#222', color: '#fff' }}>2⭐ and up</option>
                    <option value={3} style={{ background: '#222', color: '#fff' }}>3⭐ and up</option>
                    <option value={4} style={{ background: '#222', color: '#fff' }}>4⭐ and up</option>
                    <option value={5} style={{ background: '#222', color: '#fff' }}>5⭐</option>
                </select>
            </div>

            {/* Sort */}
            <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: '#aaa' }}>
                    Sort By
                </label>
                <select
                    value={filters.sortBy}
                    onChange={handleSortChange}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#fff',
                        outline: 'none',
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                    }}
                >
                    <option value="default" style={{ background: '#222', color: '#fff' }}>Default</option>
                    <option value="price-asc" style={{ background: '#222', color: '#fff' }}>Price: Low to High</option>
                    <option value="price-desc" style={{ background: '#222', color: '#fff' }}>Price: High to Low</option>
                    <option value="rating" style={{ background: '#222', color: '#fff' }}>Highest Rated</option>
                </select>
            </div>

            {/* Reset Button */}
            <button
                onClick={handleReset}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    transition: 'opacity 0.3s ease',
                    marginTop: '10px'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
                Reset Filters
            </button>
        </aside>
    );
}

export default FilterSidebar;
