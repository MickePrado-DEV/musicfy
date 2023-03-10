import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoggedNavigation } from './routes';
import { Auth } from './pages';

function App() {
	console.log(getAuth());
	const [user, setUser] = useState(undefined);
	const auth = getAuth();

	onAuthStateChanged(auth, (user) => {
		console.log(user);
		setUser(user);
	});

	if (user === undefined) return null;

	return user ? <LoggedNavigation /> : <Auth />;
}

export default App;
