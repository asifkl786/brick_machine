// src/components/Landing.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone,
  Mail, 
  MapPin,   // Address ke liye
  FileText, // GSTIN ke liye
  ChevronRight,
  Award,
  Users,
  Factory,
  Clock,
  Star,
  CheckCircle,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Play,
  Settings,
  Shield,
  Headphones,
  Truck,
  ChevronDown,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Machine Images Data
const machineImages = [
  {
    id: 1,
    url:"/images/machine1.jpeg",
    title: "Fully Automatic Brick Machine",
    description: "High production capacity 2000+ bricks/hour",
    category: "Automatic",
    features: ["PLC Controlled", "High Pressure", "Low Maintenance"]
  },
  {
    id: 2,
    url:"/images/machine2.jpeg",
    title: "Semi-Automatic Brick Press",
    description: "Perfect for medium-scale industries",
    category: "Semi-Automatic",
    features: ["Hydraulic System", "Easy Operation", "Durable"]
  },
  {
    id: 3,
    url:"/images/machine3.jpeg",
    title: "Hydraulic Brick Machine",
    description: "Advanced hydraulic technology",
    category: "Hydraulic",
    features: ["Energy Efficient", "High Output", "Precision Molds"]
  },
  {
    id: 4,
    url:"/images/machine4.jpeg",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
  {
    id: 5,
    url:"/images/machine5.jpeg",
    title: "Concrete Block Machine",
    description: "Multi-size block production",
    category: "Concrete",
    features: ["Vibration Tech", "Quick Mould Change", "High Density"]
  },
   {
    id: 6,
    url:"/images/machine6.jpeg",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
   {
    id: 7,
    url:"/images/machine7.jpeg",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
   {
    id: 8,
    url:"/images/machine8.jpeg",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
   {
    id: 9,
    url:"/images/brickmak.jpg",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
   {
    id: 10,
    url:"/images/logo.png",
    title: "Clay Brick Extruder",
    description: "Traditional clay brick manufacturing",
    category: "Extruder",
    features: ["Vacuum System", "Consistent Quality", "Low Waste"]
  },
];

// Stats Data
const stats = [
  { icon: Award, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Factory, value: '1000+', label: 'Machines Sold' },
  { icon: Star, value: '4.9', label: 'Customer Rating' }
];
// Stats Social 
const socialLinks = [
  {
    Icon: Facebook,
    href: "https://facebook.com/yourpage",
    bgColor: "bg-[#1877F2]",
    label: "Facebook"
  },
  {
    Icon: Twitter,
    href: "https://twitter.com/yourhandle", 
    bgColor: "bg-[#1DA1F2]",
    label: "Twitter"
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/company/yourcompany",
    bgColor: "bg-[#0A66C2]",
    label: "LinkedIn"
  },
  {
    Icon: Instagram,
    href: "https://instagram.com/yourhandle",
    bgColor: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
    label: "Instagram"
  },
  {
    Icon: Youtube,
    href: "https://youtube.com/@yourchannel",
    bgColor: "bg-[#FF0000]",
    label: "YouTube"
  }
];
const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
    // ========== ADD THESE 3 STATES FOR DROPDOWN CLOSE WHEN CLICK OUTSIDE ==========
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isJewelrySubOpen, setIsJewelrySubOpen] = useState(false);
  const [isMachinerySubOpen, setIsMachinerySubOpen] = useState(false);

  const navigate = useNavigate();

    // ========== NEW: Close dropdown when clicking outside ==========
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close main products dropdown if clicking outside
      if (isProductsDropdownOpen && !event.target.closest('.products-dropdown')) {
        setIsProductsDropdownOpen(false);
        // Also close sub-dropdowns when main closes
        setIsJewelrySubOpen(false);
        setIsMachinerySubOpen(false);
      }
      
      // Close jewelry sub-dropdown if clicking outside
      if (isJewelrySubOpen && !event.target.closest('.jewelry-sub')) {
        setIsJewelrySubOpen(false);
      }
      
      // Close machinery sub-dropdown if clicking outside
      if (isMachinerySubOpen && !event.target.closest('.machinery-sub')) {
        setIsMachinerySubOpen(false);
      }
    };
    
    // Add event listener
    document.addEventListener('click', handleClickOutside);
    
    // Cleanup on component unmount
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProductsDropdownOpen, isJewelrySubOpen, isMachinerySubOpen]);
  

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navbar */}
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => window.location.href = '/'}
              >
                <Factory className="h-8 w-8 text-blue-600" />
                <div>
                  <span className="font-bold text-xl text-gray-800">HN<span className="text-blue-600">Craft India</span></span>
                  <p className="text-xs text-gray-500">Since 2004</p>
                </div>
              </motion.div>

              {/* ========== DESKTOP MENU (UNCHANGED) ========== */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Home */}
                <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>

                {/* MAIN PRODUCTS DROPDOWN */}
                <div className="relative products-dropdown">
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                      >
                        {/* JEWELRY SUB-DROPDOWN */}
                        <div className="relative group jewelry-sub">
                          <button
                            onClick={() => {
                              navigate(`/jewelry`)
                              setIsJewelrySubOpen(!isJewelrySubOpen);
                              setIsMachinerySubOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between group"
                          >
                            <span className="font-medium text-gray-800">💎 Jewelry</span>
                            <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isJewelrySubOpen ? 'rotate-90' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isJewelrySubOpen && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                              >
                                <button onClick={() => { window.location.href = '/jewelry/gold-necklace-22k'; setIsProductsDropdownOpen(false); setIsJewelrySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/jewelry/necklace1.jpg" alt="Necklace" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Gold Necklace</p><p className="text-xs text-gray-500">22K Gold</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/jewelry/diamond-earrings'; setIsProductsDropdownOpen(false); setIsJewelrySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/jewelry/earrings1.jpg" alt="Earrings" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Diamond Earrings</p><p className="text-xs text-gray-500">Solitaire</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/jewelry/engagement-ring'; setIsProductsDropdownOpen(false); setIsJewelrySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/jewelry/ring1.jpg" alt="Ring" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Engagement Ring</p><p className="text-xs text-gray-500">Platinum</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/jewelry/gold-bangle'; setIsProductsDropdownOpen(false); setIsJewelrySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/jewelry/bracelet1.jpg" alt="Bracelet" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Gold Bracelet</p><p className="text-xs text-gray-500">18K Gold</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/jewelry'; setIsProductsDropdownOpen(false); setIsJewelrySubOpen(false); }} className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors border-t">
                                  <div className="flex items-center justify-between"><span>✨ View All Jewelry</span><ChevronRight className="h-4 w-4" /></div>
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* MACHINERY SUB-DROPDOWN */}
                        <div className="relative group machinery-sub border-t">
                          <button
                            onClick={() => {
                              setIsMachinerySubOpen(!isMachinerySubOpen);
                              setIsJewelrySubOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between group"
                          >
                            <span className="font-medium text-gray-800">⚙️ Machinery</span>
                            <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isMachinerySubOpen ? 'rotate-90' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isMachinerySubOpen && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                              >
                                <button onClick={() => { window.location.href = '/product/fully-automatic-brick-machine'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/machine1.jpeg" alt="Automatic" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Automatic Brick Machine</p><p className="text-xs text-gray-500">2000+ bricks/hour</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/product/semi-automatic-brick-press'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/machine2.jpeg" alt="Semi-Automatic" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Semi-Automatic Press</p><p className="text-xs text-gray-500">1000+ bricks/hour</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/product/hydraulic-brick-machine'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/machine3.jpeg" alt="Hydraulic" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Hydraulic Machine</p><p className="text-xs text-gray-500">1500+ bricks/hour</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/product/clay-brick-extruder'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/machine4.jpeg" alt="Clay Extruder" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Clay Brick Extruder</p><p className="text-xs text-gray-500">800+ bricks/hour</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/product/concrete-block-machine'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t">
                                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden"><img src="/images/machine5.jpeg" alt="Block Machine" className="w-full h-full object-cover" /></div>
                                  <div><p className="font-medium">Concrete Block Machine</p><p className="text-xs text-gray-500">600+ blocks/hour</p></div>
                                </button>
                                <button onClick={() => { window.location.href = '/products'; setIsProductsDropdownOpen(false); setIsMachinerySubOpen(false); }} className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors border-t">
                                  <div className="flex items-center justify-between"><span>🔧 View All Machines</span><ChevronRight className="h-4 w-4" /></div>
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
                
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md">
                  Get Quote
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => 
                  setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* ========== MOBILE MENU - FIXED VERSION ========== */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t max-h-[80vh] overflow-y-auto"
              >
                <div className="px-4 py-3 space-y-2">
                  {/* Home Link */}
                  <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </a>
                  
                  {/* ========== FIXED: MOBILE PRODUCTS DROPDOWN ========== */}
                  <div>
                    <button
                      onClick={() => {
                        // ========== FIX: Toggle main products dropdown ==========
                        setIsProductsDropdownOpen(!isProductsDropdownOpen);
                        // ========== FIX: Keep sub-dropdowns closed when toggling main ==========
                        setIsJewelrySubOpen(false);
                        setIsMachinerySubOpen(false);
                      }}
                      className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                    >
                      <span>Products</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-2 overflow-hidden"
                        >
                          {/* ========== FIX: Jewelry Section with proper toggle ========== */}
                          <div>
                            <button
                              onClick={() => {
                                navigate(`/jewelry`);
                                // ========== FIX: Toggle only jewelry sub-dropdown ==========
                                setIsJewelrySubOpen(!isJewelrySubOpen);
                                // ========== FIX: Close machinery when opening jewelry ==========
                                setIsMachinerySubOpen(false);
                              }}
                              className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                              <span>💎 Jewelry</span>
                              <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isJewelrySubOpen ? 'rotate-90' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isJewelrySubOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 space-y-1 mt-1 overflow-hidden"
                                >
                                  <button onClick={() => { window.location.href = '/jewelry/gold-necklace-22k'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">✨ Gold Necklace</button>
                                  <button onClick={() => { window.location.href = '/jewelry/diamond-earrings'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">💎 Diamond Earrings</button>
                                  <button onClick={() => { window.location.href = '/jewelry/engagement-ring'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">💍 Engagement Ring</button>
                                  <button onClick={() => { window.location.href = '/jewelry/gold-bangle'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">📿 Gold Bracelet</button>
                                  <button onClick={() => { window.location.href = '/jewelry'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg">✨ View All Jewelry →</button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          {/* ========== FIX: Machinery Section with proper toggle ========== */}
                          <div>
                            <button
                              onClick={() => {
                                // ========== FIX: Toggle only machinery sub-dropdown ==========
                                setIsMachinerySubOpen(!isMachinerySubOpen);
                                // ========== FIX: Close jewelry when opening machinery ==========
                                setIsJewelrySubOpen(false);
                              }}
                              className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                              <span>⚙️ Machinery</span>
                              <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isMachinerySubOpen ? 'rotate-90' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isMachinerySubOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 space-y-1 mt-1 overflow-hidden"
                                >
                                  <button onClick={() => { window.location.href = '/product/fully-automatic-brick-machine'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">🏭 Automatic Brick Machine</button>
                                  <button onClick={() => { window.location.href = '/product/semi-automatic-brick-press'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">⚙️ Semi-Automatic Press</button>
                                  <button onClick={() => { window.location.href = '/product/hydraulic-brick-machine'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">💪 Hydraulic Machine</button>
                                  <button onClick={() => { window.location.href = '/product/clay-brick-extruder'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">🏺 Clay Brick Extruder</button>
                                  <button onClick={() => { window.location.href = '/product/concrete-block-machine'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">🧱 Concrete Block Machine</button>
                                  <button onClick={() => { window.location.href = '/products'; setIsMenuOpen(false); }} className="block w-full text-left py-2 px-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg">🔧 View All Machines →</button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Other Links */}
                  <a href="#features" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
                  <a href="#testimonials" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                  <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
                  
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mt-2">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6"
              >
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">Trusted by 500+ Companies</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">High-Quality</span>
                <span className="text-blue-600">Clay Mixing Machines</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Leading manufacturer of automatic and semi-automatic brick making machines with 20+ years of excellence in construction equipment industry.
              </p>

              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-8 w-8 text-blue-500" />
                      <div>
                        <div className="font-bold text-xl">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg flex items-center"
                >
                  Explore Machines <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={machineImages[0].url}
                  alt="Featured Machine"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold">{machineImages[0].title}</p>
                  <p className="text-white/80 text-sm">{machineImages[0].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Premium Brick Machines</h2>
          </motion.div>

          {/* Machine Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineImages.map((machine, index) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={machine.url}
                    alt={machine.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {machine.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{machine.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{machine.description}</p>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center">
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact With Us</h2>
              <p className="text-lg text-white/90 mb-6">
                Get in touch with us for a free consultation and quote.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+91 7037206692,9456453983</span>
                </div>
                
                {/* GSTIN Number - NAYA ADD KIYA */}
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-white/80" />
                  <span className="text-white/90 font-mono">GSTIN: 09AXMPK1223A2ZW</span> {/* font-mono for code style */}
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>hncraftindia@gmail</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>Moh. Haji Nasirabad HyatNagar, Sambhal, Uttar Pradesh - 244303, INDIA</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send Enquiry</h3>
              
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-8 w-8 text-blue-500" />
                <span className="font-bold text-xl">HN Craft India</span>
              </div>
              <p className="text-gray-400 text-sm">
                Leading manufacturer of brick making machines since 2004.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {['About Us', 'Products', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                {['Automatic Machines', 'Semi-Automatic', 'Spare Parts'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram,Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div> */}
            <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 HN Craft India Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;