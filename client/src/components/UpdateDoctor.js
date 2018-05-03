import React, { Component } from "react";
import axios from "axios";

class UpdateDoctor extends Component {
    state = {
        doctor: {},
    };

    handleChange = event => {
        const doctor = { ...this.state.doctor };
        doctor[event.target.name] = event.target.value;
        this.setState({ doctor });
    };

    componentDidMount() {
        const doctor = this.props;
        this.setState({ doctor: doctor });
    }

    editDoctor = event => {
        event.preventDefault();
        const doctorId = this.props.doctor._id;
        const transferdata = this.state.doctor;
        axios.put(`/api/doctor/${doctorId}`, transferdata)
            .then(res => {
                this.setState({ doctor: res.data });
                console.log( res.data);
            })
            .catch(err => {
                console.log(err);
            })
            .then(() => {
                this.props.getSingleDoctor();
                this.props.toggleShowUpdate();
            });
    }; 
    static getDerivedStateFromProps(nextProps, prevState) {
        const futureState = {
            updatedDoctor: nextProps.doctor
        }
        return futureState
    }

    render() {
        return 

        <div>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.doctor} />
                </div>
                <div>
                    <label htmlFor="specialty">Specialty: </label>
                    <input onChange={this.handleChange} type="text" name="specialty" value={this.state.doctor}  />
                </div>
                <div>
                    <label htmlFor="hospital">Hospital: </label>
                    <input onChange={this.handleChange} type="text" name="hospital" value={this.state.doctor}  />
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input onChange={this.handleChange} type="text" name="location" value={this.state.doctor}  />
                </div>
                <button>Submit</button>
            </form>

        </div>
            
        }
    }
export default UpdateDoctor;
