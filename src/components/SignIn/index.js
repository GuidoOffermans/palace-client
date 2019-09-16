import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class SignInContainer extends React.Component {
  state = { name: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser({ name: this.state.name, password: this.state.password })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { loginUser })(SignInContainer)