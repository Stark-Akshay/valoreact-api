const Video = require("../models/videoModel");

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await Video.findOneAndDelete({ _id: id });
    if (!deleteData) {
      res
        .status(400)
        .json({ success: false, message: `Sorry Invalid ID: ${id}` });
    }
    res.status(200).json(deletedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = deleteData;
