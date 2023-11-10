const express = require('express');
const router = express.Router();

// GET all Users
router.get("/", async (req, res) => {
    const users = await User.findAll({});
    res.json (users) ;
});

// Get one user by ID
router.get("/:id", async (req, res) => {
    const number = req.params.id;
    const userShow = await User.findByPk(number);
    res.json (userShow) ;
});

// Get all shows watched by a user (user id in req.params)
router.get("/user/:id", async (req, res) => {
    const number = req.params.id;
    const userShow = await User.findByPk(number);
    res.json (userShow) ;

})
  // PUT show user have watched
router.put('/user', async (req, res) => {
    const updateUser = await User.update(req.body, {where: {id: req.params.id}})
    res.json(updateUser)
})

    
module.exports = router;

