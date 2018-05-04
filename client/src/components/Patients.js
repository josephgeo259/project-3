import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
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

class Patients extends Component {
   


    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        return (
            <FormWrapper>
                <div>
                    <h1>Patients</h1>
                    <form onSubmit={this.handleSignUp}>
                        <div>
                            <label htmlFor="userName">Patients Name</label>
                            <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
                        </div>
                        <button>Sign Up</button>
                        <Link to='/'><button>Go Home</button></Link>
                    </form>
                </div>
            </FormWrapper>
        )
    }
}

export default Patients