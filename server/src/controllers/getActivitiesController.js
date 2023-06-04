const { Activity } = require("../db");

const getActivitiesController = async () => {
    const getAllActivities = await Activity.findAll();
    return getAllActivities;
};

module.exports = getActivitiesController;