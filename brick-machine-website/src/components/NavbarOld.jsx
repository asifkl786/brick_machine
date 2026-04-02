// src/components/NavbarOld.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, X, Menu, ChevronDown, ChevronRight } from 'lucide-react';

const NavbarOld = () => {
  // Your old navbar code here
  return (
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
   
                   {/* ========== DESKTOP MENU WITH MAIN PRODUCTS DROPDOWN ========== */}
                   <div className="hidden md:flex items-center space-x-8">
                     {/* Home */}
                     <a
                       href="#home"
                       className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                     >
                       Home
                     </a>
   
                     {/* ========== MAIN PRODUCTS DROPDOWN (Jewelry + Machinery) ========== */}
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
                             {/* ========== JEWELRY SUB-DROPDOWN ========== */}
                             <div className="relative group jewelry-sub">
                               <button
                                 onClick={() => {
                                   navigate(`/jewelry`);
                                   setIsJewelrySubOpen(!isJewelrySubOpen);
                                   setIsMachinerySubOpen(false);
                                 }}
                                 className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between group"
                               >
                                 <span className="font-medium text-gray-800">💎 Jewelry</span>
                                 <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isJewelrySubOpen ? 'rotate-90' : ''}`} />
                               </button>
                               
                               {/* Jewelry Sub-Dropdown - UPDATED LINKS */}
                               <AnimatePresence>
                                 {isJewelrySubOpen && (
                                   <motion.div
                                     initial={{ opacity: 0, x: -10 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     exit={{ opacity: 0, x: -10 }}
                                     transition={{ duration: 0.2 }}
                                     className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                                   >
                                     {/* ========== UPDATED: Gold Necklace - Proper slug ========== */}
                                     <button
                                       onClick={() => {
                                         window.location.href = '/jewelry/gold-necklace-22k';
                                         setIsProductsDropdownOpen(false);
                                         setIsJewelrySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/jewelry/necklace1.jpg" alt="Necklace" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Gold Necklace</p>
                                         <p className="text-xs text-gray-500">22K Gold</p>
                                       </div>
                                     </button>
                                     
                                     {/* ========== UPDATED: Diamond Earrings - Proper slug ========== */}
                                     <button
                                       onClick={() => {
                                         window.location.href = '/jewelry/diamond-earrings';
                                         setIsProductsDropdownOpen(false);
                                         setIsJewelrySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/jewelry/earrings1.jpg" alt="Earrings" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Diamond Earrings</p>
                                         <p className="text-xs text-gray-500">Solitaire</p>
                                       </div>
                                     </button>
                                     
                                     {/* ========== UPDATED: Engagement Ring - Proper slug ========== */}
                                     <button
                                       onClick={() => {
                                         window.location.href = '/jewelry/engagement-ring';
                                         setIsProductsDropdownOpen(false);
                                         setIsJewelrySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/jewelry/ring1.jpg" alt="Ring" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Engagement Ring</p>
                                         <p className="text-xs text-gray-500">Platinum</p>
                                       </div>
                                     </button>
                                     
                                     {/* ========== UPDATED: Gold Bracelet - Proper slug ========== */}
                                     <button
                                       onClick={() => {
                                         window.location.href = '/jewelry/gold-bangle';
                                         setIsProductsDropdownOpen(false);
                                         setIsJewelrySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/jewelry/bracelet1.jpg" alt="Bracelet" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Gold Bracelet</p>
                                         <p className="text-xs text-gray-500">18K Gold</p>
                                       </div>
                                     </button>
                                     
                                     {/* ========== UPDATED: View All Jewelry - Goes to Jewelry Landing Page ========== */}
                                     <button
                                       onClick={() => {
                                         window.location.href = '/jewelry';
                                         setIsProductsDropdownOpen(false);
                                         setIsJewelrySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors border-t"
                                     >
                                       <div className="flex items-center justify-between">
                                         <span>✨ View All Jewelry</span>
                                         <ChevronRight className="h-4 w-4" />
                                       </div>
                                     </button>
                                   </motion.div>
                                 )}
                               </AnimatePresence>
                             </div>
   
                             {/* ========== MACHINERY SUB-DROPDOWN (UNCHANGED) ========== */}
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
                               
                               {/* Machinery Sub-Dropdown */}
                               <AnimatePresence>
                                 {isMachinerySubOpen && (
                                   <motion.div
                                     initial={{ opacity: 0, x: -10 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     exit={{ opacity: 0, x: -10 }}
                                     transition={{ duration: 0.2 }}
                                     className="absolute left-full top-0 ml-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                                   >
                                     <button
                                       onClick={() => {
                                         window.location.href = '/product/fully-automatic-brick-machine';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/machine1.jpeg" alt="Automatic" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Automatic Brick Machine</p>
                                         <p className="text-xs text-gray-500">2000+ bricks/hour</p>
                                       </div>
                                     </button>
                                     <button
                                       onClick={() => {
                                         window.location.href = '/product/semi-automatic-brick-press';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/machine2.jpeg" alt="Semi-Automatic" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Semi-Automatic Press</p>
                                         <p className="text-xs text-gray-500">1000+ bricks/hour</p>
                                       </div>
                                     </button>
                                     <button
                                       onClick={() => {
                                         window.location.href = '/product/hydraulic-brick-machine';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/machine3.jpeg" alt="Hydraulic" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Hydraulic Machine</p>
                                         <p className="text-xs text-gray-500">1500+ bricks/hour</p>
                                       </div>
                                     </button>
                                     <button
                                       onClick={() => {
                                         window.location.href = '/product/clay-brick-extruder';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/machine4.jpeg" alt="Clay Extruder" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Clay Brick Extruder</p>
                                         <p className="text-xs text-gray-500">800+ bricks/hour</p>
                                       </div>
                                     </button>
                                     <button
                                       onClick={() => {
                                         window.location.href = '/product/concrete-block-machine';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 group border-t"
                                     >
                                       <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                                         <img src="/images/machine5.jpeg" alt="Block Machine" className="w-full h-full object-cover" />
                                       </div>
                                       <div>
                                         <p className="font-medium">Concrete Block Machine</p>
                                         <p className="text-xs text-gray-500">600+ blocks/hour</p>
                                       </div>
                                     </button>
                                     <button
                                       onClick={() => {
                                         window.location.href = '/products';
                                         setIsProductsDropdownOpen(false);
                                         setIsMachinerySubOpen(false);
                                       }}
                                       className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors border-t"
                                     >
                                       <div className="flex items-center justify-between">
                                         <span>🔧 View All Machines</span>
                                         <ChevronRight className="h-4 w-4" />
                                       </div>
                                     </button>
                                   </motion.div>
                                 )}
                               </AnimatePresence>
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
   
                     {/* Other Links */}
                     <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                       Features
                     </a>
                     <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                       Testimonials
                     </a>
                     <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                       Contact
                     </a>
                     
                     <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md">
                       Get Quote
                     </button>
                   </div>
   
                   {/* Mobile Menu Button */}
                   <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className="md:hidden text-gray-600 hover:text-blue-600"
                   >
                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                   </button>
                 </div>
               </div>
   
               {/* ========== MOBILE MENU ========== */}
               <AnimatePresence>
                 {isMenuOpen && (
                   <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     className="md:hidden bg-white border-t"
                   >
                     <div className="px-4 py-2 space-y-2">
                       <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                         Home
                       </a>
                       
                       {/* ========== MOBILE: MAIN PRODUCTS DROPDOWN ========== */}
                       <div>
                         <button
                           onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                           className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                         >
                           <span>Products</span>
                           <ChevronDown className={`h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                         </button>
                         
                         <AnimatePresence>
                           {isProductsDropdownOpen && (
                             <motion.div
                               initial={{ opacity: 0, height: 0 }}
                               animate={{ opacity: 1, height: 'auto' }}
                               exit={{ opacity: 0, height: 0 }}
                               className="pl-4 space-y-2 mt-1"
                             >
                               {/* Jewelry Section - UPDATED MOBILE LINKS */}
                               <div>
                                 <button
                                   onClick={() => setIsJewelrySubOpen(!isJewelrySubOpen)}
                                   className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                                 >
                                   <span>💎 Jewelry</span>
                                   <ChevronRight className={`h-4 w-4 transition-transform ${isJewelrySubOpen ? 'rotate-90' : ''}`} />
                                 </button>
                                 <AnimatePresence>
                                   {isJewelrySubOpen && (
                                     <motion.div
                                       initial={{ opacity: 0, height: 0 }}
                                       animate={{ opacity: 1, height: 'auto' }}
                                       exit={{ opacity: 0, height: 0 }}
                                       className="pl-4 space-y-1 mt-1"
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
                               
                               {/* Machinery Section (UNCHANGED) */}
                               <div>
                                 <button
                                   onClick={() => setIsMachinerySubOpen(!isMachinerySubOpen)}
                                   className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-blue-600 font-medium"
                                 >
                                   <span>⚙️ Machinery</span>
                                   <ChevronRight className={`h-4 w-4 transition-transform ${isMachinerySubOpen ? 'rotate-90' : ''}`} />
                                 </button>
                                 <AnimatePresence>
                                   {isMachinerySubOpen && (
                                     <motion.div
                                       initial={{ opacity: 0, height: 0 }}
                                       animate={{ opacity: 1, height: 'auto' }}
                                       exit={{ opacity: 0, height: 0 }}
                                       className="pl-4 space-y-1 mt-1"
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
                       
                       <a href="#features" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
                       <a href="#testimonials" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                       <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
                       
                       <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                         Get Quote
                       </button>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </nav>
   
  );
};

export default NavbarOld;