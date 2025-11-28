import { FaSquareFacebook } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { FaViber } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import './contact.css';
import './responsive.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="map">
        <p className="title-con">
          მოგვწერე ფეისბუქზე ან დაგვირეკეთ<br /> მითითებულ ნომერზე
        </p>

        {/* Replace with your actual image path/component */}
        <img src="./Photos/woman1.png" alt="Contact Person" />

        <a href="https://www.facebook.com/Tegila15" target="_blank" rel="noopener noreferrer">
          <FaSquareFacebook className="fa-facebook-square"/>
        </a>

        <div className="number">
          <p className="contact-info">
            <FiPhone className="ri-phone-line"/>
            593 15 87 96
            <FaViber className="fa-viber"/>
            <IoLogoWhatsapp className="fa-square-whatsapp" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;