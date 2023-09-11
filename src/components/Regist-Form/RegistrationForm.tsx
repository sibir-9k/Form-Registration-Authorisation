import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../shared/UI/Input/Input';
import { Button } from '../../shared/UI/Button/Button';
import './RegistrationFrom.scss';

interface IRegistForm {
	email: string;
	password: string;
}

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegistForm>({
		defaultValues: {},
	});

	const submit: SubmitHandler<IRegistForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={() => handleSubmit(submit)}>
			<Input type="text" {...register('email')} placeholder={'E-mail'} />
			<Input type="password" {...register('password')} placeholder={'Придумайте пароль'} />
			<Input type="password" {...register('password')} placeholder={'Повторите пароль'} />
			<Button text="Зарегистрироваться" />
		</form>
	);
};
