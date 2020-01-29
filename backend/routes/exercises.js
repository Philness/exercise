const router = require('express').Router()
let Exercise = require("../models/exercise.model")

router.route("/").get((request, response) => {
    Exercise.find()
        .then(exercises => response.json(exercises))
        .catch(error => response.status('400').json("We didn't find any exercises because:" + error))
})

router.route("/add").post((request, response) => {
    const username = request.body.username
    const description = request.body.description
    const duration = Number(request.body.duration)
    const date = Date.parse(request.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => response.json("new exercise " + description + " added."))
        .catch(error => response.status('400').json("So yeah, this just happened:" + error))
})

router.route("/:id").get((request, response) => {
    Exercise.findById(request.params.id)
    .then(exercise => response.json(exercise))
    .catch(error => response.status("400").json("There was a problem finding the exercise with id "+request.params.id+" because "+error))
})

router.route("/:id").delete((request, response) => {
    Exercise.findByIdAndDelete(request.params.id)
    .then(exercise => response.json(exercise + " removed from database."))
    .catch(error => response.status(400).json("Failed to delete exercise because of "+ error))
})

router.route("/update/:id").post((request,response)=>{
    Excercise.findById(request.params.id)
    .then(exercise => {
        exercise.username = request.body.username
        exercise.description = request.body.description
        exercise.duration = Number(request.body.duration)
        exercise.date = Date.parse(request.body.date)
        exercise.save()
        .then(() => response.json(exercise.description + "has been updated."))
        .catch(error => response.status(400).json("Failed to update: "+error))
    })
    .catch(error => response.json("Could not find exercise because: "+error))
})
module.exports = router