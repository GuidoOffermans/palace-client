import React, {useEffect} from 'react';
import './App.css';
import request from 'superagent'
import { Route } from 'react-router-dom';

import Lobby from './components/Lobby'

function App(props) {

  useEffect(()=>{
    
  },[])

	return (
		<div className="App">
			<main>
				<Route path="/" exact component={Lobby} />
			</main>
		</div>
	);
}

export default App;
