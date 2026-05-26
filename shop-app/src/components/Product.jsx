import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="category">{product.category}</p>
      </Link>
    </div>
  );
};

export default Product;
