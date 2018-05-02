import React, { Component } from 'react'
import axios from 'axios'

class NewDoctorForm extends Component {
   
    
   
    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit =  (event) => {
        event.preventDefault()
        const transferdata = {
        name: this.state.name,
        specialty: this.state.specialty,
        hospital: this.state.hospital,
        location: this.state.location
        }
         axios.post('/api/doctors', transferdata)
         this.state.getAllDoctors()
    }

   
    render() {
        const doctorsLinks = this.state.doctors.map((doctor, i) => {

        return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input onChange={this.handleChange} type="text" name="name" value={this.doctor.name} />
            </div>
            <div>
                <label htmlFor="specialty">Specialty: </label>
                <input onChange={this.handleChange} type="text" name="specialty" value={this.state.specialty} />
            </div>
            <div>
                <label htmlFor="hospital">Hospital: </label>
                <input onChange={this.handleChange} type="text" name="hospital" value={this.state.hospital} />
            </div>
            <div>
                <label htmlFor="location">Location: </label>
                <input onChange={this.handleChange} type="text" name="location" value={this.state.location} />
            </div>
            <button>Submit</button>
        </form>
        )
    }
        )}

  

export default NewDoctorForm
