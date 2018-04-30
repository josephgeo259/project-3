const mongoose = require('mongoose')

const Schema = mongoose.Schema

const medicalConditionSchema = new Schema({
    description: String
});

const patientSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    medicalHistory: String,
    medicalConditions: [medicalConditionSchema]
 
});

const doctorSchema = new Schema({
    name: String,
    specialty: String,
    hospital: String,
    location: String,
    patients: [patientSchema]
})

const Doctor = mongoose.model('Doctor', doctorSchema)
const Patient = mongoose.model('Patient', patientSchema)
const MedicalCondition = mongoose.model('MedicalConditions', medicalConditionSchema )

module.exports = {
    Doctor,
    Patient,
    MedicalCondition
}