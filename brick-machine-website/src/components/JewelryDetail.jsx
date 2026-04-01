// src/components/JewelryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Weight,
  Gem,
  Calendar,
  Award
} from 'lucide-react';
import { getJewelryBySlug, jewelryProducts } from '../data/jewelryData';

const JewelryDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const foundProduct = getJewelryBySlug(slug);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [slug]);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    alert(`Enquiry sent for ${product?.title}! We'll contact you soon.`);
    setEnquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/jewelry')}
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700"
        >
          Back to Jewelry
        </button>
      </div>
    );
  }

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/jewelry')}
            className="flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Jewelry
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-pink-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-500">(128 reviews)</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-semibold">
                    Save {product.discount}
                  </span>
                </>
              )}
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.fullDescription || product.description}
            </p>
            
            {/* Specifications */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Weight: {product.weight || "15g"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Purity: {product.purity || "22K"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Occasion: {product.occasion || "All"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Hallmarked: Yes</span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Heart className={`h-5 w-5 ${wishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
            </div>
            
            {/* Delivery Info */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-gray-500 mb-1" />
                <p className="text-xs text-gray-500">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-gray-500 mb-1" />
                <p className="text-xs text-gray-500">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto text-gray-500 mb-1" />
                <p className="text-xs text-gray-500">7 Day Returns</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mt-12">
          <div className="flex gap-4 border-b">
            {['description', 'specifications', 'care'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600">{product.fullDescription || product.description}</p>
                <p className="text-gray-600 mt-4">
                  Our jewelry is handcrafted by skilled artisans using traditional techniques. 
                  Each piece is unique and made with love.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Material</p>
                  <p className="font-medium">{product.purity || "22K Gold"}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{product.weight || "15 grams"}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Certificate</p>
                  <p className="font-medium">Hallmark Certified</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Warranty</p>
                  <p className="font-medium">Lifetime Free Service</p>
                </div>
              </div>
            )}
            
            {activeTab === 'care' && (
              <div className="space-y-4">
                <p className="text-gray-600">
                  To maintain the beauty of your jewelry, follow these care instructions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Avoid contact with perfumes, cosmetics, and chemicals</li>
                  <li>Store in a soft cloth pouch when not wearing</li>
                  <li>Clean with a soft, lint-free cloth</li>
                  <li>Remove before swimming or bathing</li>
                  <li>Get professionally cleaned once a year</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Enquiry Form */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Have Questions? Ask Us!</h3>
          <form onSubmit={handleEnquirySubmit} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={enquiryForm.name}
              onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={enquiryForm.email}
              onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={enquiryForm.phone}
              onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              rows={2}
              placeholder="Your Message"
              value={enquiryForm.message}
              onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
              className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JewelryDetail;