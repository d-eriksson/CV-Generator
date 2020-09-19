import * as React from 'react'
import { useOvermind, useState, useActions } from './overmind'

const App: React.FunctionComponent = () => {
	// General
	//const { state, actions, effects, reaction } = useOvermind()
	// Or be specific
	const { isLoggedIn, name } = useState().auth
	const { logIn, logOut } = useActions().auth
	if(isLoggedIn){
		return(
			<>
				<p>{name} is Logged In</p>
				<button onClick= {() => logOut()}>Log out</button>
			</>
		)
	}
	return (
		<>
			<p>Not Logged In</p>
			<button onClick= {() => logIn("David")}>Log in</button>
		</>
	)
}

export default App