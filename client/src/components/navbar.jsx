
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Wanderlust India</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Destinations</a></li>
          <li><a href="#" className="hover:underline">Packages</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
