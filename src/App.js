import React, {useEffect} from 'react';
import './App.css';
import request from 'superagent'
import { Route } from 'react-router-dom';

import Lobby from './components/Lobby'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App(props) {

  useEffect(()=>{
    
  },[])

	return (
		<div className="App">
			<main>
				<Route path="/" exact component={Lobby} />
				<Route path="/login" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
			</main>
		</div>
	);
}

export default App;
