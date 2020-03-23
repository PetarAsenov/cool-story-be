const { Router } = require("express");
const Homepage = require("../models/").homepage;

const router = new Router();

router.get("/",async (req, res) => {
  const homepage = await Homepage.findAll()  
  res.send({
    homepage
  });
}
);


module.exports = router;