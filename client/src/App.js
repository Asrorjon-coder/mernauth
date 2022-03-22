import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Activate from './pages/Activate'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/register" exact component={Register} />
				<Route path="/activate/:email" exact component={Activate} />	
				<Route path="/login" exact component={Login} />
				<Route path="/dashboard" exact component={Dashboard} />
			</BrowserRouter>
		</div>
	)
}

export default App
