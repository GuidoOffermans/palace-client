import React from 'react'

export default function SignUpForm(props) {

  return (
    <form onSubmit={props.onSubmit}>
     <h2>Sign Up</h2>
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
  )
}