require('dotenv').config()
const mongoose = require('mongoose')
const { Doctor } = require('./schema')
const { Patient } = require('./schema')
const { MedicalCondition } = require('./schema')


mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

const saved = async () => {
    await Doctor.remove()

    const joshi = new Doctor({
        name: 'Joshi',
        specialty: 'Heart',
        hospital: 'Emory',
        location: 'Atlanta'
        // patients: [ daniel, gwen ]
    })

    const jimmy = new Patient({
        name: 'Jimmy',
        age: 24,
        address: '1234 lakeview dr lilburn,ga 30039 ',
        medicalHistory: 'I had chicken pox when I was younger.',
    })
    const flu = new MedicalCondition({
        description: 'Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza, commonly called the flu, is not the same as stomach "flu" viruses that cause diarrhea and vomiting.',
     
    })
    jimmy.medicalConditions.push(flu)
    
    joshi.patients.push(jimmy)


    await joshi.save()

    const annie = new Doctor({
        name: 'Annie',
        specialty: 'Brain',
        hospital: 'Rocky',
        location: 'Arkansas', })

    await annie.save()

    db.close()
}

saved()