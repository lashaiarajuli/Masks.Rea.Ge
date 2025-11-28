import ProductCard from './ProductCard';
import { masks } from '../../data.js'; // Import the data array
import './product.css';
import './responsive.css';

const ProductSection = () => {
  return (
    <section className="product" id="product">
      <h1 className="heading">ნიღბები</h1>

      <div className="card-container">
        {/* Use .map() to iterate over the data and render a component for each item */}
        {masks.map((mask) => (
          <ProductCard
            key={mask.id} // Key is crucial for lists in React
            name={mask.name}
            price={mask.price}
            img={mask.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;