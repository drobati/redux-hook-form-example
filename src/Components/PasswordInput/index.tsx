import React from 'react';
import { LoginInput } from '../LoginInput';

export interface PasswordInputElement {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
    children: string
}

export const PasswordInput = (props: PasswordInputElement) => {
    const { onChange, children } = props;
    const label = {
        type: "password",
    }
    const input = {
        id: "password",
        type: "password",
        placeholder: "******************",
        onChange
    }
    return (
        <LoginInput css="mb-6" label={label} input={input}>
            { children }
        </LoginInput>
    )
};