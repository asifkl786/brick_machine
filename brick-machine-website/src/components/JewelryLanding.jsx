// src/components/JewelryLanding.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Search, 
  Filter, 
  X, 
  ChevronRight, 
  Star, 
  Heart,
  ShoppingBag,
  Eye,
  ChevronDown
} from 'lucide-react';
import { jewelryProducts, jewelryCategories } from '../data/jewelryData';

const JewelryLanding = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Filter products
  let filteredProducts = jewelryProducts.filter(product => {
    // Category filter
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    
    // Search filter
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Price filter
    if (priceRange !== "all") {
      const price = parseInt(product.price.replace(/[^0-9]/g, ''));
      if (priceRange === "under10000" && price > 10000) return false;
      if (priceRange === "10000-25000" && (price < 10000 || price > 25000)) return false;
      if (priceRange === "25000-50000" && (price < 25000 || price > 50000)) return false;
      if (priceRange === "above50000" && price < 50000) return false;
    }
    
    return true;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
  } else if (sortBy === "discount") {
    filteredProducts.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (slug) => {
    navigate(`/jewelry/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Jewelry Collection</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry. From traditional to modern designs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          
          {/* Filter and Sort */}
          <div className="flex gap-3 w-full md:w-auto">
            {/* Category Filter (Desktop) */}
            <div className="hidden md:flex gap-2">
              {jewelryCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-pink-50 border border-gray-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Discount: High to Low</option>
            </select>
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <Filter className="h-5 w-5" />
              Filter
            </button>
          </div>
        </div>

        {/* Results Count */}
        {/* <div className="mb-6">
          <p className="text-gray-600">Showing {filteredProducts.length} of {jewelryProducts.length} products</p>
        </div> */}
         {/* Results Count & Back Button - Premium Version */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            {/* Left side - Results with badge */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-gray-800">{filteredProducts.length}</span> products found
                <span className="text-gray-400 text-xs ml-1">(out of {jewelryProducts.length} total)</span>
              </p>
            </div>
            
            {/* Right side - Back button with icon */}
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-pink-300 rounded-xl transition-all duration-300 text-gray-600 hover:text-pink-600 text-sm font-medium shadow-sm hover:shadow-md cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handleProductClick(product.slug)}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    {product.discount} OFF
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleProductClick(product.slug)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Quick View
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-pink-600 font-medium bg-pink-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-500 ml-1">4.9</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleProductClick(product.slug)}
                    className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
              className="mt-4 text-pink-600 hover:text-pink-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-end md:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-t-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h3 className="font-bold text-lg">Filter Products</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-1">
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-4 space-y-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {jewelryCategories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          selectedCategory === cat.id
                            ? 'bg-pink-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { id: "all", label: "All Prices" },
                      { id: "under10000", label: "Under ₹10,000" },
                      { id: "10000-25000", label: "₹10,000 - ₹25,000" },
                      { id: "25000-50000", label: "₹25,000 - ₹50,000" },
                      { id: "above50000", label: "Above ₹50,000" }
                    ].map(range => (
                      <button
                        key={range.id}
                        onClick={() => setPriceRange(range.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg ${
                          priceRange === range.id
                            ? 'bg-pink-50 text-pink-600 font-medium'
                            : 'text-gray-600'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSearchTerm("");
                    setIsFilterOpen(false);
                  }}
                  className="w-full py-2 bg-gray-100 text-gray-600 rounded-lg font-medium"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JewelryLanding;