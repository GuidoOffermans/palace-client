import React from 'react'
import SignUpForm from './view'
import '../UserForm/UserForm.css'
import request from 'superagent'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../redux/actions'

class SignUpContainer extends React.Component {
  state = {
    name: '',
    password: '',
    toLobby: false
  }

  signUp = () => {
    request.post('http://localhost:4000/sign-up')
      .send({ name: this.state.name, password: this.state.password })
      .then(() => this.props.loginUser({name: this.state.name, password: this.state.password}))
      .catch(err => console.error(err))
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.signUp({ name: this.state.name, password: this.state.password })
    this.setState(() => ({ toLobby: true }))
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    if (this.state.toLobby === true) {
      return <Redirect to='/' />
    }
    return <SignUpForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { loginUser })(SignUpContainer)