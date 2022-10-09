import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Header />
					<Body />
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
