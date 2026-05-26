import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';

const apiurl_products = "https://fakestoreapi.com/products";
const apiurl_categories = "https://fakestoreapi.com/products/categories";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch(apiurl_products),
          fetch(apiurl_categories)
        ]);

        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error('Ошибка загрузки данных');
        }

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="home">
      <h1>Магазин</h1>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Products products={filteredProducts} />
    </div>
  );
};

export default Home;
