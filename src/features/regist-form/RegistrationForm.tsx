import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Input } from 'shared/ui';
import './RegistrationFrom.module.scss';

interface RegistForm {
	email: string;
	password: string;
}

export const RegistrationForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistForm>({
		defaultValues: {},
	});

	const submit: SubmitHandler<RegistForm> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={() => handleSubmit(submit)}>
			<Input type="text" {...register('email')} placeholder="E-mail" />
			<div>{errors?.email && <p>Error!</p>}</div>
			<Input type="password" {...register('password')} placeholder="Придумайте пароль" />
			<Input type="password" {...register('password')} placeholder="Повторите пароль" />
			<Button>Зарегистрироваться</Button>
		</form>
	);
};
