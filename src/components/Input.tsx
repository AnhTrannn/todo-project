import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = (props: InputProps): JSX.Element => {
    return <input {...props} className={`border-sky-600 border-2 px-3 py-2 ${props.className}` ?? ``} />
    
};

export default Input;