import React, { Component } from 'react'
import axios from 'axios'

class NewDoctorForm extends Component {
    state = {
        doctors: [],
        newDoctor:{
                name: '',
                specialty: '',
                hospital: '',
                location: '',
            }
        }
    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async event => {
        event.preventDefault()
        const transferdata = {
        name: this.state.name,
        specialty: this.state.specialty,
        hospital: this.state.hospital,
        location: this.state.location
        }
        await  axios.post('/api/doctors', transferdata);
        await this.props.getAllDoctors()
    }
   
     render() {
    return(
    <div>
        
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name"  />
                </div>
                <div>
                    <label htmlFor="specialty">Specialty: </label>
                    <input onChange={this.handleChange} type="text" name="specialty"  />
                </div>
                <div>
                    <label htmlFor="hospital">Hospital: </label>
                    <input onChange={this.handleChange} type="text" name="hospital"  />
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input onChange={this.handleChange} type="text" name="location"  />
                </div>
                <button>Submit</button>
            </form>
    
    </div>
        )

        }
    }
   
export default NewDoctorForm
