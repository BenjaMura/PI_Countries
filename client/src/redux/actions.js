import axios from "axios";
import { GET_COUNTRIES, LOADING, GET_COUNTRY_BY_NAME, NEXT_PAGE, PREV_PAGE, NUMBER_PAGE, GET_COUNTRY_BY_ID, CLEAN_DETAIL, POST_ACTIVITY, RESET, GET_ACTIVITIES, SORT_BY_NAME, SORT_BY_POPULATION, FILTER_CONTINENT, FILTER_ACTIVITY } from "./actionsTypes";

const endpointCountries = "http://localhost:3001/countries";
const endpointActivities = "http://localhost:3001/activities"

export const getCountries = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING });
            const { data } = await axios.get(`${endpointCountries}`);
            if (!data.length) throw Error();
            return dispatch({ type: GET_COUNTRIES, payload: data})
        } catch (error) {
            alert("Countries couldn't be loaded");           
        }
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpointCountries}/name?name=${name}`);
            if (!data) throw Error();
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data})
        } catch (error) {
            alert("Try another name please");           
        }
    };
};

export const getCountryById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING });
            const { data } = await axios.get(`${endpointCountries}/${id}`);
            if (!data) throw Error();
            return dispatch({ type: GET_COUNTRY_BY_ID, payload: data})
        } catch (error) {
            alert("Couldn't load the detail of the country");           
        }
    };
};

export const postActivity = (form) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endpointActivities}`, form);
            if (!data) throw Error();
            return dispatch({ type: POST_ACTIVITY, payload: data });
        } catch (error) {
            alert("Failed to create activity")
        }
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpointActivities}`);
            if (!data.length) throw Error();
            return dispatch({ type: GET_ACTIVITIES, payload: data})
        } catch (error) {
            alert("Activities couldn't be loaded");           
        }
    };
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    };
};

export const sortByName = (value) => {
    return {
        type: SORT_BY_NAME,
        payload: value,
    };
};
export const sortByPopulation = (value) => {
    return {
        type: SORT_BY_POPULATION,
        payload: value,
    };
};
export const filterContinent = (value) => {
    return {
        type: FILTER_CONTINENT,
        payload: value,
    };
};
export const filterActivity = (value) => {
    return {
        type: FILTER_ACTIVITY,
        payload: value,
    };
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    };
};
export const prevPage = () => {
    return {
        type: PREV_PAGE,
    };
};
export const numberPage = (number) => {
    return {
        type: NUMBER_PAGE,
        payload: number,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};

export const resetting = () => {
    return {
        type: LOADING,
    };
};