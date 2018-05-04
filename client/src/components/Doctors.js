import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewDoctorForm from './NewDoctorForm'
import SingleDoctor from './SingleDoctor';
import styled from 'styled-components';

const FormWrapper = styled.div`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: palevioletred;
border: 6px solid turquoise;
text-align: center;

body {
    min-height: 100vh;
    margin: 0 auto;
    font: 12pt Comic Sans MS;
    display: flex;
    flex-direction: column;
    justify-content: space - between;
}
section {
    flex-grow: 1;
}
`;

class Doctors extends Component {
    state = {
        doctors: [],
        showNewForm: false
    }
    componentDidMount() {
        this.getAllDoctors()
    }

    getAllDoctors = () => {
        axios.get('/api/doctors')
            .then(res => {
                console.log("Saving users to state", res.data)
                this.setState({ doctors: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }
    createDoctor = (newDoctor) => {
        console.log('create new doctor called')
        axios.post('/api/doctors', { newDoctor })
            .then((res) => {
                const doctors = [this.state.doctors]
                doctors.push(res.data)
                this.setState({ doctors })
            })
    }
  
   
  
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {

        const doctorsLinks = this.state.doctors.map((doctor, i) => {
            return (
                
                <div key={i}>
                    <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
                     <h3>Name: {doctor.name}</h3>
                    <h3>Specialty: {doctor.specialty}</h3>
                    <h3>Hospital: {doctor.hospital}</h3>
                    <h3>Location: {doctor.location}</h3>

                </div>)

        })

        return (
            <FormWrapper>
            <div>
                <h1>Doctors</h1> <Link to="/login">Doctor Login </Link>
                {doctorsLinks}
                <button onClick={this.toggleShowNewForm}>Create New Doctor </button>
                {this.state.showNewForm ? <NewDoctorForm getAllDoctors={this.getAllDoctors}/> : null}
                
               
                
            </div>
                </FormWrapper>

        );
    }
}
export default Doctors

