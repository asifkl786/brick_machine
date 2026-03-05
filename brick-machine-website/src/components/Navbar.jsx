const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">H.N CRAFT INDIA </h1>
      <div className="space-x-6 hidden md:block">
        <a href="#about" className="hover:text-orange-400">Home</a>
        <a href="#about" className="hover:text-orange-400">Gallery</a>
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#products" className="hover:text-orange-400">Products</a>
        <a href="#contact" className="hover:text-orange-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar