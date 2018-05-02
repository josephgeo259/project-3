const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js')
const { Doctor }  = Schema

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
    const newDoctor = new Doctor(req.body.doctor)
    newDoctor.save()
    .then((doctor) => {
        res.json(doctor)
    }).catch(console.log)
})

// router.post('/', (request, response) => {
//     const newDoctor = request.body
//     newDoctor = Doctor.create(newDoctor)
//         .then(() => {
//             response.json(newDoctor)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// UPDATE route
router.patch('/:userId/', (req, res) => {
    Doctor.findByIdAndUpdate(req.params.doctorId, req.body.docters, { new: true })
        .then((doc) => {
            res.json(doc)
        }).catch((error) => {
            console.log(error)
        })
})
router.get('/:userId', (req, res) => {
    Doctor.findById(req.params.doctorId)
        .then((doctor) => {
            res.json(doctor)
        }).catch((error) => {
            console.log(error)
        })
})

router.delete('/:userId', (req, res) => {
    Doctor.findByIdAndRemove(req.params.doctorId)
        .then(() => {
            res.sendStatus(400)
        }).catch((error) => {
            console.log(error)
        })
})


module.exports = router