const express = require("express");
const dotenv = require("dotenv");
const app = express();
const restaurantRoute = require("./routes/restaurant")
dotenv.config();

const port = process.env.PORT || 3005

app.use("/api/v1/restaurants",restaurantRoute)

app.listen(3001,()=>{console.log(`server running on port ${port}`)})