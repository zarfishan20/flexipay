

import { Link } from "react-router-dom";


const Footer = () => {
    return (


<footer className="text-center py-3 bg-light mt-4">
        <p>&copy; {new Date().getFullYear()} FlexiPay Systems<br /> Powered By
             <a href="https://caramelwebstudios.com" target="_blank" rel="noopener noreferrer" className="mx-3">Caramel Web Studios
               
               </a>| 
            <Link to="/privacy-policy">Privacy Policy</Link> |
<Link to="/terms">Terms & Conditions</Link>
            </p>
      </footer>
        );
    };
    
    export default Footer;