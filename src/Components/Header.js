import { Logo_URL } from "../Utils/constants";

const Header = () => {
    return(
        <div className = "header">
            
            <div className="logo-container">
                <img className = "logo" src={Logo_URL} alt = "Logo"/>
            </div>
            <div className="nav-items">
                <ul className = "navitems">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>    
                </ul>

            </div>
        </div>
    )
}


export default Header;