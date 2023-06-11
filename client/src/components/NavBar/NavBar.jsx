import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import stylesNavBar from "./NavBar.module.css";

const NavBar = () => {
    const location = useLocation();
    return (
        <div className={stylesNavBar.divNav}>
            <Link to='/home' className={stylesNavBar.nav}>
                <button className={stylesNavBar.btn}>Home</button>
            </Link>
            {location.pathname === "/home" && <SearchBar />}
            <Link to='/activities' className={stylesNavBar.nav}>
                <button className={stylesNavBar.btn}>Activities</button>
            </Link>
        </div>
    )
};

export default NavBar;