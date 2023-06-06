import stylesDetail from "./Detail.module.css";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getCountryById } from "../../redux/actions";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loading = useSelector((state) => state.loading);
    const countryDetail = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryById(id));
        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id]);

    return (
        <div className={stylesDetail.divDetail}>
            {loading ? (
              <Loading />
            ) : (
                <div className={stylesDetail.divCountry}>
                    <div>
                        <img src={countryDetail.flag} alt={countryDetail.name} className={stylesDetail.img}/>
                    </div>
                    <div>
                        <h2 className={stylesDetail.h2}>NAME | {countryDetail.name}</h2>
                        <h2 className={stylesDetail.h2}>ID | {countryDetail.id}</h2>
                        <h2 className={stylesDetail.h2}>CONTINENT | {countryDetail.continent}</h2>
                        <h2 className={stylesDetail.h2}>CAPITAL | {countryDetail.capital}</h2>
                        {countryDetail.subregion && <h2 className={stylesDetail.h2}>SUBREGION | {countryDetail.subregion}</h2>}
                        {countryDetail.area && <h2 className={stylesDetail.h2}>AREA | {countryDetail.area}</h2>}
                        <h2 className={stylesDetail.h2}>POPULATION | {countryDetail.population}</h2>
                        {countryDetail.Activities && countryDetail.Activities.length ? (<h2 className={stylesDetail.h2}>ACTIVITIES</h2>) : null}
                        {countryDetail.Activities?.map((activity, index) => {
                            return (
                                <div key={index}>
                                    <h3 className={stylesDetail.h3}>Activity: {activity.name}</h3>
                                    <h4 className={stylesDetail.h4}>Difficulty: {activity.difficulty}</h4>
                                    {activity.duration && <h4 className={stylesDetail.h4}>Duration: {activity.duration}</h4>}
                                    <h4 className={stylesDetail.h4}>Season: {activity.season}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;