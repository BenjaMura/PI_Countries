import { Link } from "react-router-dom";
import stylesCard from "./Card.module.css";

const Card = (countries) => {
    return (
        <div>
            <Link to={`/detail/${countries.id}`} className={stylesCard.link}>
            <img className={stylesCard.img} src={countries.flag} alt={countries.name}/>
            </Link >
            <Link to={`/detail/${countries.id}`} className={stylesCard.link}>
            <h2>{countries.name}</h2>
            </Link>
            <h3>{countries.continent}</h3>
        </div>
    )
};

export default Card;