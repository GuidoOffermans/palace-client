import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'
import SignInForm from './view'
import '../UserForm/UserForm.css'
import { Redirect } from 'react-router-dom'


class SignInContainer extends React.Component {
  state = {
    name: '',
    password: '',
    toLobby: false
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser({ name: this.state.name, password: this.state.password })
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
    return <SignInForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { loginUser })(SignInContainer)