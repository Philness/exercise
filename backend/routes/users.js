const router = require("express").Router()
let User = require("../models/user.model")

//GET request that returns the whole thing
router.route("/").get((request, response) => {
    User.find()
        .then(users => response.json(users))
        .catch(error =>response.status('400').json("There is something wrong, "+ error))
    })

//POST request that adds stuff
router.route("/add").post((request, response) => {
    const username = request.body.username
    const newUser = new User({username})

    newUser.save()
        .then( () => response.json("User" + username + " is added."))
        .catch(error => response.status("400").json("Trouble adding a new user: " + error))
}
)


module.exports = router
