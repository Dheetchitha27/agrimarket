export default function Contact() {
  return (
    <div
      className="bg-cover bg-center text-white py-24 px-4 min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 backdrop-blur-sm p-10 rounded-xl shadow-2xl max-w-2xl w-full animate-fade-in">
        <h1 className="text-4xl font-extrabold text-green-400 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-md text-gray-200 text-center mb-8">
          We're here to help! Reach out for partnership, support, or just to say hello.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-green-200 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-green-200 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-green-200 mb-1">Your Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:ring-2 focus:ring-green-300 outline-none"
              rows={4}
              placeholder="Let us know how we can assist you."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            📩 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
