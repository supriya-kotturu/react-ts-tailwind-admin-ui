import { RootProvider } from './RootProvider';
import { Dashboard } from './components/Dashboard';

import './App.css';

function App() {
	return (
		<RootProvider>
			<div className="main-container">
				<Dashboard />
			</div>
		</RootProvider>
	);
}

export default App;
