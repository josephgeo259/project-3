require('dotenv').config()
const { Doctor } = require('./schema')
const { Patient } = require('./schema')
const { MedicalCondition } = require('./schema')
const mongoose = require('mongoose')


mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection


Doctor.remove()
    .then(() => {
        const joshi = new Doctor({
            name: 'Joshi',
            specialty: 'Heart',
            hospital: 'Emory',
            location: 'Atlanta'
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

        return joshi.save()
    })
    .then(() => {

        const annie = new Doctor({
            name: 'Annie',
            specialty: 'Brain',
            hospital: 'Rocky',
            location: 'Arkansas',
        })
        const joey = new Patient({
            name: 'Joey',
            age: 37,
            address: '1234 windbrook dr tucker,ga 30078 ',
            medicalHistory: 'I had chicken pox when I was younger.',
        })
        const cold = new MedicalCondition({
            description: 'The common cold, also known simply as a cold, is a viral infectious disease of the upper respiratory tract that primarily affects the nose. The throat, sinuses, and larynx may also be affected. ',

        })
        joey.medicalConditions.push(cold)

        annie.patients.push(joey)

        return annie.save()

    })

    .catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`
            Finished seeding database...
            
            Disconnected from MongoDB
          `)
    })