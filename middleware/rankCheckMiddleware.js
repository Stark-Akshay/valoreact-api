const verifyRank = (req, res, next) => {
  const { rank } = req.body;
  const ValidRanks = [
    "Iron",
    "Bronze",
    "Gold",
    "Platinum",
    "Diamond",
    "Ascendant",
    "Immortal",
    "Radiant",
  ];
  if (!rank || !ValidRanks.includes(rank)) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a valid rank" });
  }
  next();
};

module.exports = verifyRank;
