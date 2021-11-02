const Header = ({ title, subtitle }) => {
  return (
    <div className="text-left">
      <h1 className="py-1 text-gray-800 text-xl md:text-3xl font-medium">
        {title}
      </h1>
      <h3 className="py-1 text-sm md:text-lg text-gray-700">{subtitle}</h3>
    </div>
  );
};

export default Header;
