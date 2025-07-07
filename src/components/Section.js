export default function Section({ title, cards }) {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-10 tracking-tight">
        {title}
      </h2>
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 ring-1 ring-transparent hover:ring-green-300 transition-all duration-300 ease-in-out overflow-hidden group"
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-full h-48 object-cover group-hover:opacity-90"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
