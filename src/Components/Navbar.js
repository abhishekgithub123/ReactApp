import '../Css/Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div className="navbar">
        <li>
                <NavLink to="/"  style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>Posts</NavLink>
            </li>
            <li>
                <NavLink to="/comments"  style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>Comments</NavLink>
            </li>
        </div>
        
    )
}

export default Navbar;