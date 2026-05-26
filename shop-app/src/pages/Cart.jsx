import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getDiscount, getTotalWithDiscount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Корзина пуста</h2>
        <Link to="/">Перейти к покупкам</Link>
      </div>
    );
  }

  const handlePurchase = () => {
    alert('Спасибо за покупку!');
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-item-info">
                  <img src={item.image} alt={item.title} />
                  <span>{item.title}</span>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Подытог:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        {getDiscount() > 0 && (
          <div className="summary-row discount">
            <span>Скидка (10% от 3+ одинаковых товаров):</span>
            <span>-${getDiscount().toFixed(2)}</span>
          </div>
        )}
        <div className="summary-row total">
          <span>Итого:</span>
          <span>${getTotalWithDiscount().toFixed(2)}</span>
        </div>
        <button className="purchase-btn" onClick={handlePurchase}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default Cart;
