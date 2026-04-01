// src/components/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  Factory, 
  Gauge, 
  Weight, 
  Ruler, 
  Zap,
  ChevronRight,
  Phone,
  Mail,
  Send
} from 'lucide-react';

// Machine data (same as in Landing)
const machineImages = [
  {
    id: 1,
    slug: "fully-automatic-brick-machine",
    url: "/images/machine1.jpg",
    title: "Fully Automatic Brick Machine",
    shortTitle: "Automatic",
    description: "High production capacity 2000+ bricks/hour",
    fullDescription: "The Fully Automatic Brick Machine is a state-of-the-art machine designed for high-volume brick production. With PLC controlled system, it ensures consistent quality and maximum efficiency.",
    category: "Automatic",
    features: ["PLC Controlled", "High Pressure", "Low Maintenance", "Energy Efficient"],
    specifications: {
      capacity: "2000-2500 bricks/hour",
      power: "45 HP",
      weight: "8500 kg",
      dimensions: "3200 x 2200 x 2800 mm",
      pressure: "250 tons",
      mouldSize: "230 x 110 x 75 mm"
    }
  },
  {
    id: 2,
    slug: "semi-automatic-brick-press",
    url: "/images/machine2.jpg",
    title: "Semi-Automatic Brick Press",
    shortTitle: "Semi-Auto",
    description: "Perfect for medium-scale industries",
    fullDescription: "The Semi-Automatic Brick Press offers the perfect balance between automation and manual control. Ideal for medium-scale brick manufacturing businesses.",
    category: "Semi-Automatic",
    features: ["Hydraulic System", "Easy Operation", "Durable", "Cost Effective"],
    specifications: {
      capacity: "1000-1200 bricks/hour",
      power: "25 HP",
      weight: "4500 kg",
      dimensions: "2800 x 1800 x 2400 mm",
      pressure: "150 tons",
      mouldSize: "230 x 110 x 75 mm"
    }
  },
  {
    id: 3,
    slug: "hydraulic-brick-machine",
    url: "/images/machine3.jpg",
    title: "Hydraulic Brick Machine",
    shortTitle: "Hydraulic",
    description: "Advanced hydraulic technology",
    fullDescription: "Advanced hydraulic brick machine with superior pressure control and energy efficiency. Perfect for high-quality brick production.",
    category: "Hydraulic",
    features: ["Energy Efficient", "High Output", "Precision Molds", "Low Noise"],
    specifications: {
      capacity: "1500-1800 bricks/hour",
      power: "35 HP",
      weight: "6200 kg",
      dimensions: "3000 x 2000 x 2600 mm",
      pressure: "200 tons",
      mouldSize: "230 x 110 x 75 mm"
    }
  },
  {
    id: 4,
    slug: "clay-brick-extruder",
    url: "/images/machine4.jpg",
    title: "Clay Brick Extruder",
    shortTitle: "Clay Extruder",
    description: "Traditional clay brick manufacturing",
    fullDescription: "Traditional clay brick extruder with vacuum system for consistent quality. Perfect for red clay brick manufacturing.",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste", "Easy Maintenance"],
    specifications: {
      capacity: "800-1000 bricks/hour",
      power: "30 HP",
      weight: "3800 kg",
      dimensions: "3500 x 1500 x 2200 mm",
      pressure: "100 tons",
      mouldSize: "230 x 110 x 75 mm"
    }
  },
  {
    id: 5,
    slug: "concrete-block-machine",
    url: "/images/machine5.jpg",
    title: "Concrete Block Machine",
    shortTitle: "Block Machine",
    description: "Multi-size block production",
    fullDescription: "Versatile concrete block machine capable of producing multiple sizes of blocks and pavers. Advanced vibration technology ensures high density products.",
    category: "Concrete",
    features: ["Vibration Tech", "Quick Mould Change", "High Density", "Multi-size Output"],
    specifications: {
      capacity: "600-800 blocks/hour",
      power: "20 HP",
      weight: "3200 kg",
      dimensions: "2500 x 1800 x 2200 mm",
      pressure: "120 tons",
      mouldSize: "400 x 200 x 200 mm"
    }
  }
];

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Find product by slug
    const foundProduct = machineImages.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [slug]);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(`Enquiry sent for ${product?.title}! We'll contact you soon.`);
    setEnquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar placeholder - you can use same navbar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <img 
                src={product.url} 
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.fullDescription || product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Factory className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Production Capacity</p>
                      <p className="font-semibold">{product.specifications.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Power</p>
                      <p className="font-semibold">{product.specifications.power}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Weight className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-semibold">{product.specifications.weight}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-semibold">{product.specifications.dimensions}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+919876543210'}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Enquire About {product.title}
            </h2>
            
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({...enquiryForm, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;