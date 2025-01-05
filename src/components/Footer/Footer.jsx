import './Footer.css';
import LogoYummy from './../../assets/LogoYummy.svg';

function Footer() {
    return (
        <footer>
        <div className="container footer-container">
            <a href="/" className="logo">
                <img src={LogoYummy} alt="logo" />
            </a>
            <h2>Приєднуйся і живи зі мною у світі солодощів!</h2>
        </div>
        </footer>
    );
  }
  
  export default Footer;