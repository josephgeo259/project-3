import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                userName: '',
                password: ''
            },
            redirect: false
        }
    }
    createUserName = () => {
        axios.post('/api/doctors', {
            userName: this.state.doc
        }).then((res) => {
            this.setState({ redirectToHome: true, createdUserName: res.data })
        })
    }
    handleSignUp = (e) => {
        e.preventDefault()
        this.createUserName()
    }

    handleChange = (e) => {
        const updatedUser = { ...this.state.user }
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue
        this.setState({ user: updatedUser })
        }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.docLogIn(this.state.user)
        this.setState({ redirect: true })
    }
  

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
            return (
        <div>
            <h1>Log-In</h1>
            <form onSubmit={this.handleSignUp}>
                <div>
                    <label htmlFor="userName">Doctors UserName</label>
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
        )
    }
}

export default LogIn


    