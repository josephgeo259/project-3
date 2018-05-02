const express = require('express')
const router = express.Router()
const Schema = require('../db/schema.js')
const { Doctor } = Schema

// index route
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find({})
        res.json(doctors)
    } catch (err) {
        console.log(err)
    }
})

// get doctor by id 
router.get('/:id', async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.find({doctorId})
        res.json(doctor)
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// creat route
router.post('/', async (req, res) => {
    try {
        const newDoctor = req.body
        const savedDoctor = await Doctor.create(newDoctor)
        res.json(savedDoctor)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// update route
router.patch('/:id', async (req, res) => {
    try {
        const doctorId = req.params.id
        const updatedDoctor = req.body
        const savedDoctor = await Doctor.findByIdAndUpdate(doctorId, updatedDoctor)
        res.json(savedDoctor)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// show route
router.get('/:id', async (req, res) => {
    try {
        const doctorId = req.params.id
        const doctor = await Creature.findById(doctorId)
        res.json(doctor)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// delete route
router.delete('/:id', async (req, res) => {
    try {
        const doctorId = req.params.id
        await Doctor.findByIdAndRemove(doctorId)
        res.json({
            msg: 'Successfully Deleted'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router 