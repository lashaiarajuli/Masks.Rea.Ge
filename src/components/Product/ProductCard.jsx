import './product.css';
import './responsive.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";


const Stars = () => (
  <div className="stars">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfStroke />
  </div>
);

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      {/* Replace with actual image path logic if needed */}
      <img src={img} alt={name} />
      <Stars />
      <div className="price">
        <p>ფასი:</p>
        <p>{price} &#8382;</p>
      </div>
    </div>
  );
};

export default ProductCard;