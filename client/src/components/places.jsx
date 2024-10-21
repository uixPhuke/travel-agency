
import '../css/Places.css';

const Places = () => {
  const places = [
    { id: 1, name: 'Goa Beaches', price: '₹15,000', description: 'Relax on the sunny beaches of Goa.' },
    { id: 2, name: 'Delhi Heritage', price: '₹10,000', description: 'Explore the cultural heritage of Delhi.' },
    { id: 3, name: 'Kerala Backwaters', price: '₹12,000', description: 'Enjoy the serene backwaters of Kerala.' }
  ];

  return (
    <section className="places py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Top Destinations</h2>
        <div className="places-grid">
          {places.map((place) => (
            <div key={place.id} className="place-card hover:scale-105">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <span>{place.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
