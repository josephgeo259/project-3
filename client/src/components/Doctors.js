import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewDoctorForm from './NewDoctorForm'

class Doctors extends Component {
    state = {
        doctors: [],
        showNewForm: false
    }
    componentWillMount() {
        this.getAllDoctors()
    }

    getAllDoctors = async () => {
        const res = await axios.get('/api/doctors')
        this.setState({ doctors: res.data })
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {
        return (
            <div>
                <h1>Doctors</h1>
                {this.state.doctors.map(doctor => (
                    <Link key={doctor._id} to={`/${doctor._id}`}>
                        <h3>Name: {doctor.name}</h3>
                        <h3>Specialty: {doctor.specialty}</h3>
                        <h3>Hospital: {doctor.hospital}</h3>
                        <h3>Location: {doctor.location}</h3>
                    </Link>
                ))}
                <button onClick={this.toggleShowNewForm}>Create New</button>

                {this.state.showNewForm ? <NewDoctorForm getAllDoctors={this.getAllDoctors} /> : null}
            </div>
        )
    }
}

export default Doctors
