import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import stylesNavBar from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div>
            <Link to='/home' className={stylesNavBar.nav}>
                <button className={stylesNavBar.btn}>Home</button>
            </Link>
            <Link to='/create' className={stylesNavBar.nav}>
                <button className={stylesNavBar.btn}>New Activity</button>
            </Link>
            <SearchBar />
        </div>
    )
};

export default NavBar;