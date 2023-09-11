import React from 'react';
import { Routes, Route } from 'react-router';
import { RegistrationPage } from './RegistrationPage/RegistrationPage';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<RegistrationPage />}></Route>
			{/* <Route path="auth" element={}></Route> */}
		</Routes>
	);
};
