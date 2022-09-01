const express = require('express');
const router = express.Router()
const posts = require('../modelo/posts');

router.use(express.json());
router.use(express.urlencoded());

router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()))

})



router.post("/new", (req, res) => {

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)


    res.send("Post adicionado")
})


module.exports = router;