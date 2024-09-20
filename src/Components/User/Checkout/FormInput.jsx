import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = ({ label, name, type, placeholder, change }) => {
    return (
        <div className='w-full'>
            <label className='uppercase text-sm' htmlFor={name}>{label}</label>
            <div className="h-11 w-full px-5 flex items-center justify-between border mt-1">
                <Field
                    id={name} 
                    name={name} 
                    type={type}
                    placeholder={placeholder}
                    className="outline-none w-full text-sm md:text-base" 
                    {...(change && { onChange: change })} 
                />
            </div>
            <ErrorMessage name={name} component="div" className="text-red-500 text-xs mt-1" />
        </div>
    );
};

export default FormInput;
