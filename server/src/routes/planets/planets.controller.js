const { getAllPlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  try {
    const planets = await getAllPlanets();
    return res.status(200).json(planets);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  httpGetAllPlanets,
};
