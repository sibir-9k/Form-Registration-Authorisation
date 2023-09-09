import React from 'react';
import { RegistrationForm } from '../components/Regist-Form/RegistrationForm';
import './RegistrationPage.scss';

export const RegistrationPage = () => {
	return (
		<>
			<div className="reg-form-block">
				<h1>Регистрация</h1>
				<RegistrationForm />
			</div>
			<span> Уже зарегистрированы? <a href="">Войти</a> </span>
		</>
	);
};
