const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center mt-10 mb-6">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </header>
  );
};

export default Header;
