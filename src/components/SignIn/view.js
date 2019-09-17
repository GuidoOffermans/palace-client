import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInForm(props) {

  return (
    <div className="userform-box">
      <form onSubmit={props.onSubmit}>
        <label>
          Name:
      <input type="text" name="name" onChange={props.onChange} value={props.values.name} placeholder={props.values.name} />
        </label>
        <label>
          Password:
      <input type="text" name="password" onChange={props.onChange} value={props.values.password} placeholder={props.values.password} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to='/sign-up'><button type="button">signUp</button></Link>
    </div>
  )
}