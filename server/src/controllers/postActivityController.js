const { Country, Activity } = require("../db");

const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const postActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const countriesData = await Country.findAll({
    where: {
      name: countries,
    },
  });

  const countryIds = countriesData.map((country) => country.id);
  await postActivity.addCountries(countryIds);

  return postActivity;
};

module.exports = postActivityController;