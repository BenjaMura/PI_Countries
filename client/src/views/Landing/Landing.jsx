import { Link } from "react-router-dom";
import stylesLanding from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={stylesLanding.div}>
            <Link to="/home" className={stylesLanding.link}>
                <button className={stylesLanding.btn}>
                    START
                </button>
            </Link>
        </div>
    );
};

export default Landing;