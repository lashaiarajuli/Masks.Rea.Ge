import './footer.css';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="credit">
                Created By <span> Lasha Iarajuli</span> &copy;2025 /
            </div>
            <div className="icons">
                <IoLogoLinkedin className='fa-linkedin'/>
                <FaGithub  className='a-github'/>
                <FaFacebookSquare className='fa-square-facebook'/>
            </div>
        </footer>
    );
};

export default Footer;