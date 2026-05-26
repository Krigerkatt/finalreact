import { Link } from 'react-router-dom';

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="categories">
      <h2>Категории</h2>
      <ul className="categories-list">
        <li
          className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => onSelectCategory('all')}
        >
          Все товары
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
