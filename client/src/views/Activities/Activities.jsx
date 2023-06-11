import stylesActivities from "./Activities.module.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import ActivitiesContainer from "../../components/ActivitiesContainer/ActivitiesContainer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActivities, numberPage } from "../../redux/actions";

const Activities = () => {
    const dispatch = useDispatch();
    const { activities, numPage } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getActivities());
        dispatch(numberPage(1));
    }, [dispatch])

    let first = (numPage - 1) * 3;
    let second = numPage * 3;
    let pages = Math.ceil(activities.length / 3);
    let currentActivities = activities.slice(first, second);

    return (
        <div className={stylesActivities.div}>
            <Link to="/create" className={stylesActivities.link}>
                <button className={stylesActivities.btn}>New Activity</button>
            </Link>
            <div className={stylesActivities.divPag}>
                <Pagination pages={pages}/>
            </div>
            <div className={stylesActivities.divActs}>
                <ActivitiesContainer currentActivities={currentActivities}/>
            </div>
            {!activities.length && <div className={stylesActivities.divNoActivities}>There are no activities</div>}
        </div>
    );
};

export default Activities;
