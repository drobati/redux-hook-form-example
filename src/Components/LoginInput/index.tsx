import React from 'react';
import { Label } from '../Label';
import { Input } from '../Input';

export interface LoginInputElement {
    css: string,
    label: {
        type: string
    },
    input: {
        id: string,
        placeholder: string,
        type: string,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => any
    }
    children: string
}

export const LoginInput = (props: LoginInputElement)  => {
    const { css, label, input, children } = props;
    const inputStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    return (
        <div className={css}>
            <Label type={label.type}>
                { children }
            </Label>
            <Input id={input.id} css={inputStyle} placeholder={input.placeholder} type={input.type} onChange={input.onChange}/>
        </div>
    )
};