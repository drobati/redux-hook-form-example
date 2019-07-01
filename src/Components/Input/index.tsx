import React from 'react';

export interface InputElement {
    css: string,
    id: string,
    placeholder: string,
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
}

export const Input: React.StatelessComponent<InputElement> = (props) => {
    const { css, id, type, placeholder, onChange } = props;
    return (
        <input className={css} id={ id } type={type} placeholder={placeholder} onChange={onChange} />
    )
};