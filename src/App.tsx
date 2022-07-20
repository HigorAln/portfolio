import { motion as m } from 'framer-motion';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Welcome } from './components/Welcome';

function App() {
	return (
		<m.div className="overflow-x-hidden bg-white">
			<Welcome />
			<AboutMe />
			<Projects />
		</m.div>
	);
}

export default App;
