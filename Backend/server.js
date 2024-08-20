const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  let date = new Date();
	let current_time = date.getHours()+":"+date.getMinutes();
  console.log('Time:', "\x1b[33m" + current_time);
  console.log("\x1b[0m", req.path, req.method);
  next();
});

app.use("/workouts", workoutRoutes);

mongoose.connect(
    "mongodb+srv://youcef:12345678910@cluster0.lpurter.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("listening on port 4000!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
