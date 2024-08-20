const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} = require("../controllers/workoutController");
const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

router.delete("/:id", (req, res) => {
  res.json({ msg: "delete workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "patch workout" });
});

module.exports = router;
