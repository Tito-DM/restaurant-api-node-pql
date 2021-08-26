const router = require("express").Router();
const restaurantController = require("../controllers/restaurant");

//index route
router.get("/",restaurantController.index);

// show route
router.get("/:id", restaurantController.show);

//create route
router.post("/add",restaurantController.create);

//update route
router.put("/:id",restaurantController.update);

//delete route
router.delete("/:id",restaurantController.destroy);


module.exports = router