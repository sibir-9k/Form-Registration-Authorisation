import { FC } from 'react';
import './Input.module.scss';

interface InputProps {
	type?: string;
	placeholder: string;
}

export const Input: FC<InputProps> = ({ type = 'text', placeholder }) => (
	<input type={type} placeholder={placeholder} />
);
