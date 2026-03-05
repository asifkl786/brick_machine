const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <p className="mb-2">📍 Hyat Nagar Sambhal, Uttar Pradesh</p>
      <p className="mb-2">📞 +91 9456453983,7037206692</p>
      <p className="mb-2"> GSTIN: 09AXMPK1223A2ZW</p>
      <p className="mb-2"> PROP. M.H (Qadri Sahab)</p>
      <p className="mb-6">📧 abcbrickmachine@gmail.com</p>

      <a 
        href="https://wa.me/919876543210"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
      >
        Chat on WhatsApp
      </a>
    </section>
  )
}

export default Contact