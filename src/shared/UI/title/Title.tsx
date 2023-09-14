import { FC, PropsWithChildren } from 'react';

interface TitleProps extends PropsWithChildren<unknown> {}

export const Title: FC<TitleProps> = ({ children }) => <h1>{children}</h1>;
