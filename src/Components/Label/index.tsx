import React from 'react';

export interface LabelElement {
    type: string,
    children: string
}

export const Label = (props: LabelElement) => {
    const { type, children } = props;
    return (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={type}>
            { children }
        </label>
    )
};