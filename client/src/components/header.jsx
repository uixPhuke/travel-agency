
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header bg-cover bg-center h-screen relative">
      <div className="overlay"></div>
      <div className="container mx-auto flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Explore Incredible India</h1>
        <p className="text-xl mb-8">Discover the beauty of Indian tourist destinations</p>
        <a href="#" className="cta-button">Explore Now</a>
      </div>
    </header>
  );
};

export default Header;
