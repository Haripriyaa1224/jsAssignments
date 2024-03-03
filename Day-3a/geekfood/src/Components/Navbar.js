import './Navbar.css'

import { Button } from './Button';


//to import logo
import logo from '../assets/logo.svg'

function Navbar(){
    return(
    <>
    <nav className="navbar">
        <div className="nav-logo verticle-center">
            {/* Add logo and name */}
            <img src={logo} alt="logo"></img>
            <span>GeekFood</span>
            </div>
        <div className="nav-links verticle-center">
            <div><span>Home</span></div>
            <div><span>Quote</span></div>
            <div><span>Restaurant</span></div>
            <div><span>Foods</span></div>
            <div><span>Contact</span></div>
        </div>
        <div className="verticle-center">
            <Button borderRadius={"8px"} backgroudKaColor={"#1C4ED8"} fontColor={"#FFFFFF"}>Get Started</Button>
            {/* <Button backgroudColor={"blue"} fontColor={"#FFFFFF"}>Get Started</Button> */}
        </div>
    </nav>
    </>
    );
}

export default Navbar;