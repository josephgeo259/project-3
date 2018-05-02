import React from 'react';
import { Link } from 'react-router-dom'


const SingleDoctor = () => {
    return (
        <div>
            <h1>Specfic doctors</h1>
            <Link to='/'><button>Go Home</button></Link>
        </div>
    );
};

export default SingleDoctor;