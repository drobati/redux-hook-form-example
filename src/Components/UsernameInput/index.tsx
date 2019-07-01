import React from 'react';
import { LoginInput } from '../LoginInput';

export interface UsernameInputElement {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
    children: string
}

export const UsernameInput = (props: UsernameInputElement) => {
    const { onChange, children } = props;
    const label = {
        type: "username",
    }
    const input = {
        id: "username",
        type: "text",
        placeholder: "Username",
        onChange
    }
    return (
        <LoginInput css="mb-4" label={label} input={input}>
            { children }
        </LoginInput>
    )
};