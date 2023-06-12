import stylesActivities from "./Activities.module.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import ActivitiesContainer from "../../components/ActivitiesContainer/ActivitiesContainer";
import { useEffect } from "react";
import { getActivities, numberPage, resetting } from "../../redux/actions";

const Activities = () => {
    const dispatch = useDispatch();
    const { activities, numPage, loading } = useSelector((state) => state);
    useEffect(() => {
        dispatch(resetting());
        dispatch(getActivities());
        setTimeout(() => {
            dispatch(numberPage(1));
        }, 300);
    }, [dispatch])

    let first = (numPage - 1) * 5;
    let second = numPage * 5;
    let pages = Math.ceil(activities.length / 5);
    let currentActivities = activities.slice(first, second);

    return (
        <div className={stylesActivities.div}>
            {loading ? (
                <Loading />
            ) : (
            <>
            <div className={stylesActivities.divPag}>
                <Pagination pages={pages}/>
            </div>
            <div className={stylesActivities.divActs}>
                <ActivitiesContainer currentActivities={currentActivities}/>
            </div>
            {!activities.length && <div className={stylesActivities.divNoActivities}>There are no activities</div>}
            </>
            )}
        </div>
    );
};

export default Activities;
