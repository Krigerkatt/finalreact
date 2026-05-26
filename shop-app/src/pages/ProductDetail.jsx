import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Товар не найден</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Товар добавлен в корзину!');
  };

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Назад к товарам</Link>
      <div className="product-detail-content">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category-badge">{product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price-large">${product.price.toFixed(2)}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
