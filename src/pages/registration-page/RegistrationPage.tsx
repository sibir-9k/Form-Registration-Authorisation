import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RegistrationForm } from 'features/regist-form';
import { Title } from 'shared/ui';
import './RegistrationPage.module.scss'

export const RegistrationPage: FC = () => {
	return (
		<>
			<div className="reg-form">
				<Title>Регистрация</Title>
				<RegistrationForm />
			</div>
			<span>
				Уже зарегистрированы? <Link to={'/auth'}>Войти</Link>
			</span>
		</>
	);
};
