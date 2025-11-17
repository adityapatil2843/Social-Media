import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-wide">Social Media</h1>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
        <Link to="/signup" className="hover:text-blue-600">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
