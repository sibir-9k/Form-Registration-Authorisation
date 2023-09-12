import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { RegistrationPage } from './registration-page/RegistrationPage';

export const Routing: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<RegistrationPage />}></Route>
			{/* <Route path="auth" element={}></Route> */}
		</Routes>
	);
};
