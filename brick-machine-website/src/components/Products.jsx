const Products = () => {
  const machines = [
    {
      name: "Automatic Brick Machine",
      desc: "Capacity: 2000 Bricks / Hour"
    },
    {
      name: "Semi Automatic Brick Machine",
      desc: "Capacity: 1200 Bricks / Hour"
    },
    {
      name: "Fly Ash Brick Machine",
      desc: "Eco Friendly & High Efficiency"
    }
  ]

  return (
    <section id="products" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {machines.map((machine, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">{machine.name}</h3>
            <p className="text-gray-600">{machine.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products