const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Shopping Cart</h2>
      </div>
      <div className="header-links">
        <a href="/cart">Cart</a>
        <a href="/login">Login</a>
      </div>
    </header>
  );
};

export default Header;
