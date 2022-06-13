const Location = require("../Models/Location");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newLocation = new Location(req.body);
  console.log(req);
  console.log(newLocation);
  try {
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLocation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(200).json("Location has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET LOCATION
router.get("/find/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL LOCATION
router.get("/", async (req, res) => {
    try {
      const locations = await Location.find();
      res.status(200).json(locations);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET CLOSE LOCATIONS
router.get("/near", async (req, res) => {
    const location = req.query;
    try {
      const locations = await Location.find({
              $nearSphere: {
                  $geometry: {
                      type: "Point",
                      coordinates: [location.location[0], location.location[1]]
                  },
                  $minDistance: 100,
                  $maxDistance: 5000
              }
      });
      res.status(200).json(locations);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;