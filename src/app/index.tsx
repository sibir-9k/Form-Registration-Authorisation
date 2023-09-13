import { RegistrationPage } from 'pages/registration-page/RegistrationPage';
import { Header } from 'shared/ui/header/Header';
import './index.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<RegistrationPage />
			</main>
		</>
	);
}

export default App;
