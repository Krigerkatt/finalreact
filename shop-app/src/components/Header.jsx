import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🛒 Магазин
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Товары</Link>
          <Link to="/cart" className="nav-link cart-link">
            Корзина
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
