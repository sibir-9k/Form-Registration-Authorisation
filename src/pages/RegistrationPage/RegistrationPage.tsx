import React from 'react';
import { Link } from 'react-router-dom';
import { RegistrationForm } from '../../components/Regist-Form/RegistrationForm';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
	return (
		<>
			<div className="reg-form-block">
				<h1>Регистрация</h1>
				<RegistrationForm />
			</div>
			<span>
				Уже зарегистрированы? <Link to={'/auth'}>Войти</Link>
			</span>
		</>
	);
};
