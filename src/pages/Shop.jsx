import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

function Shop() {
    const dispatch = useDispatch();
    const { items: products, status, error } = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    // Filtering and Sorting logic optimized with useMemo
    const filteredProducts = useMemo(() => {
        let result = products.filter(product => {
            // Category
            if (filters.selectedCategory !== 'all' && product.category !== filters.selectedCategory) return false;
            
            // Price
            if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) return false;
            
            // Rating
            if (product.rating < filters.minRating) return false;
            
            // Search
            if (filters.searchQuery && !product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) return false;
            
            return true;
        });

        // Sorting logic
        if (filters.sortBy === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (filters.sortBy === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        } else if (filters.sortBy === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [products, filters.selectedCategory, filters.priceRange, filters.minRating, filters.searchQuery, filters.sortBy]);

    if (status === 'loading' || status === 'idle') {
        return (
            <div className="fade-in" style={{ padding: '40px', textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", color: "#666" }}>Loading Collection...</h2>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="fade-in" style={{ padding: '40px', textAlign: "center", color: "#ff4757" }}>
                <h2 style={{ fontSize: "2rem" }}>Error Loading Products</h2>
                <p>{error}</p>
                <button 
                    onClick={() => dispatch(fetchProducts())}
                    style={{ marginTop: '20px', padding: '10px 20px', background: '#ff4757', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="fade-in" style={{ padding: '20px 0 60px 0' }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "var(--subheading-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Curated Collection
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Handpicked quality for the modern lifestyle.</p>
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {/* Sidebar */}
                <div style={{ flexShrink: 0 }}>
                    <FilterSidebar />
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ marginBottom: '20px', color: '#aaa' }}>
                        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                            <h2 style={{ color: '#eee', marginBottom: '10px' }}>No products found</h2>
                            <p style={{ color: '#aaa' }}>Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    ) : (
                        <div className="product-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '30px'
                        }}>
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Shop;