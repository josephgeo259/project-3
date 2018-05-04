import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UpdateDoctor from './UpdateDoctor';
import styled from 'styled-components';

const FormWrapper = styled.div`
border-radius: 3px;
padding: 0.25em 1em;
margin: 0 1em;
background: transparent;
color: royalblue;
border: 6px solid turquoise;
text-align: center;
background-image: url("https://i.imgur.com/vXLmIPv.jpg");
body {
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
section {
    flex-grow: 1;
}

h3 {
    font-family: 'Sacramento', cursive;
    font-size:65px;
    padding:7px;
}
h1 {
    font-family: 'Sacramento', cursive;
    font-size:130px;
    padding:7px;
}

a {
    margin: 5px;
}
button{
border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #6C3FFD;
  border-radius:20px;
  border: 2px solid ;

}
`;

class SingleDoctor extends Component {
    state = {
        doctor: {},
       }

    toggleShowUpdate = () => {
        this.setState({ updateDoctor: !this.state.updateDoctor });
    };

//     async componentDidMount() {
//         this.getSingleDoctor();
//     }

// getSingleDoctor = async () => {
//         const doctorId = this.props.match.params.id;
//         const res = await axios.get(`/api/doctors/${doctorId}`);
//         const doctor = res.data;
//         this.setState({ doctor });
//          };

    removeDoctor = () => {
        const doctorId = this.props.match.params.id;
        axios.delete(`/api/doctors/${doctorId}`)
            .then(() => {
                this.history.push("/")
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleChange = (changedDoctor, event) => {
        const doctors = [...this.state.doctors]
        const newDoctors = doctors.map((doctor) => {
            if (doctor._id === changedDoctor._id) {
                doctor[event.target.name] = event.target.value
            }
            return doctor
        })
        this.setState({ doctors: newDoctors })
    }
    updateDoctor = (doctor) => {
        console.log("updating the doctor in the db")
        console.log("doctor Id being Updated", this.state.doctor._id)
        axios.patch(`/api/doctors/${this.state.doctor._id}${doctor._id}`, { doctor })
            .then(res => {
                this.setState({ doctors: res.data.doctor })
            })
    }

    render() {
        return (
            <FormWrapper>
        <div>
            <h1>Specfic doctors</h1>
            <Link to='/'><button>Go Home</button></Link>
            <button onClick={this.removeDoctor}>Delete Doctor</button>
                <h3>Name: {this.state.doctor.name}</h3>
                <h3>Specialty: {this.state.doctor.specialty}</h3>
                <h3>Hospital: {this.state.doctor.hospital}</h3>
                <h3>Location: {this.state.doctor.location}</h3>
               
                <button onClick={this.toggleShowUpdate}>
                    Update {this.state.doctor.name}
                </button>
                {this.state.updateDoctor ? (
                    <UpdateDoctor
                        doctor={this.state.doctor}
                        toggleShowUpdate={this.toggleShowUpdate}
                        getSingleDoctor={this.getSingleDoctor}
                    />
                ) : null}
        </div>
                </FormWrapper>
    );
};
}
export default SingleDoctor;