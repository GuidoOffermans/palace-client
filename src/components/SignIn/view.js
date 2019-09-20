import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInForm(props) {
	return (
		<div>
			<h2>Sign In</h2>
			<div className="userform-box">
				<form onSubmit={props.onSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							onChange={props.onChange}
							value={props.values.name}
							placeholder={props.values.name}
						/>
					</label>
					<label>
						Password:
						<input
							type="text"
							name="password"
							onChange={props.onChange}
							value={props.values.password}
							placeholder={props.values.password}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
        <p>don't have an account?</p>
				<Link to="/sign-up">
					<button type="button">go to signUp</button>
				</Link>
			</div>
		</div>
	);
}
