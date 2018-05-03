import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UpdateDoctor from './UpdateDoctor';


class SingleDoctor extends Component {
    state = {
        doctor: {},
       }

    toggleShowUpdate = () => {
        this.setState({ updateDoctor: !this.state.updateDoctor });
    };

    async componentDidMount() {
        this.getSingleDoctor();
    }

    getSingleDoctor = async () => {
        const doctorId = this.props.match.params.id;
        const res = await axios.get(`/api/doctor/${doctorId}`);
        const doctor = res.data;
        this.setState({ doctor });
         };

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
        this.setState({ docotrs: newDoctors })
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
    );
};
}
export default SingleDoctor;