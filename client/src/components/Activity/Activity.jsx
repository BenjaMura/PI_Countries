import { useDispatch } from "react-redux";
import stylesActivity from "./Activity.module.css";
import { deleteActivity } from "../../redux/actions";

const Activity = (activities) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        if (confirm("Are you sure want to delete the activity?")) {
            dispatch(deleteActivity(activities.id));
            alert("The activity has been successfully deleted");
            }
    };

    return (
        <div className={stylesActivity.div}>
            <div className={stylesActivity.divAct}>
                <button onClick={handleDelete}>❌</button>
                <h3>Name: {activities.name}</h3>
                <h4>Difficulty: {activities.difficulty}</h4>
                <h4>Duration: {activities.duration}</h4>
                <h4>Season: {activities.season}</h4>
                <p>Countries: {activities.countries?.join(", ")}</p>
            </div>
        </div>
    );
};

export default Activity;