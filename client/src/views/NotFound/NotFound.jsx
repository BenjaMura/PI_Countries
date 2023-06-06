import { Link } from "react-router-dom";
import stylesNotFound from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={stylesNotFound.div}>
            <h1 className={stylesNotFound.h1}>
                404
            </h1>
            <p className={stylesNotFound.p}>
                Wrong way
            </p>
            <Link to="/home">
                <button className={stylesNotFound.btn}>
                    Back Home
                </button>
            </Link>
        </div>         
    )
};

export default NotFound;