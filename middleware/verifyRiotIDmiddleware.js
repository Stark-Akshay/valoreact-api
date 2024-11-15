const verifyRiotID = (req, res, next) => {
  const { riotID } = req.body;

  if (!riotID) {
    return res
      .status(400)
      .json({ success: false, message: "Riot ID is not provided" });
  }
  next();
};

module.exports = verifyRiotID;
