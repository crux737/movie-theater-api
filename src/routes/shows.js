const express = require('express');
const Show = require('../../models/Show');
const router = express.Router();
const { check, validationResult } =  require ('express-validator') 


// GET all Show
router.get("/", async (req, res) => {
    const shows = await Show.findAll({});
    res.json (shows) ;
});


// Get one 
router.get("/:id", async (req, res) => {
    const number = req.params.id;
    const showByGenre = await Show.findByPk(number);
    res.json (showByGenre) ;
});

// GET all users who watched a show
router.get("/shows/:id", async (req, res) => {
    const number = req.params.id;
    const usersWatched = await User.findByPk(number);
    res.json (usersWatched) ;
})

// PUT update the `available` property of a show
router.put("/shows", [
    check ("title" ).not ().isEmpty().isLength({max: 25}),
    check ("genre" ).not().isEmpty(),
    check ("rating") .not().isEmpty(),
    check ("available").not ().isEmpty()
],  
async (req, res) => {
    const errors = validationResult (req) ;
    if (!errors. isEmpty ()) {
    res.json({ errors: errors.array() });
   
        }else {
            await Show.update(req.body, {where: {shows: req.params.isEmpty}});
            const updateShows = await shows.findAll();
            res.json(updateShows)
        }
    }
);

// DELETE a show
router.delete('/shows/:id', async (req, res) => {
    const deleteShow = await Show.destroy(req.body, {where: {id: req.params.id}})
    res.json(deleteShow);
})

// GET shows of a particular genre (genre in `req.query`)
router.get("/shows/genre", async (req, res) => {
    const byGenre = req.params.genre;
    const showByGenre = await Show.findByPk(byGenre);
    res.json (showByGenre) ;
});


module.exports = router;
