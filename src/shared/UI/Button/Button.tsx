import React from 'react';
import './Button.scss'

interface BtnProps {
	text: string;
}

export const Button: React.FC<BtnProps> = ({ text }) => {
	return <button>{text}</button>;
};
