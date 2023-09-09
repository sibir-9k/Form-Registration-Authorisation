import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IRegistForm {
	email: string;
	password: string;
}

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	return <div>RegistrationForm</div>;
};
