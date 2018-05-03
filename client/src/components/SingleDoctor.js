import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class SingleDoctor extends Component {

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

    render() {
        return (
        <div>
            <h1>Specfic doctors</h1>
            <Link to='/'><button>Go Home</button></Link>
            <button onClick={this.removeDoctor}>Delete Doctor</button>

        </div>
    );
};
}
export default SingleDoctor;