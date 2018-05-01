const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js')
const { Doctor}  = Schema

// INDEX route
router.get('/', (req, res) => {
    Doctor.find()
        .then(doctors => {
            res.json(doctors)
        })
        .catch((err) => console.log(err))
})
// CREATE route

router.post('/', (req, res) => {
    const newDoctor = new Doctor(req.body.user)
    newDoctor.save().then((doc) => {
        res.json(doc)
    }).catch(console.log)
})

// UPDATE route
router.patch('/:userId/', (req, res) => {
    Doctor.findByIdAndUpdate(req.params.userId, req.body.user, { new: true })
        .then((doc) => {
            res.json(doc)
        }).catch((error) => {
            console.log(error)
        })
})
router.get('/:userId', (req, res) => {
    Doctor.findById(req.params.docId)
        .then((doc) => {
            res.json(doc)
        }).catch((error) => {
            console.log(error)
        })
})

router.delete('/:userId', (req, res) => {
    Doctor.findByIdAndRemove(req.params.docId)
        .then(() => {
            res.sendStatus(400)
        }).catch((error) => {
            console.log(error)
        })
})


module.exports = router