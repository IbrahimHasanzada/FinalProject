import React from 'react';

const FormAdmin = ({ formFields, onSubmit, formTitle, submitButtonLabel }) => {
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-lg font-medium mb-4">{formTitle}</h2>
            <div className="grid gap-4 mb-4 grid-cols-2">
                {formFields.map((field, index) => (
                    <div key={index} className="col-span-2">
                        <label htmlFor={field.name} className="block mb-2 text-sm font-medium text-gray-900">
                            {field.label}
                        </label>
                        <input
                            onChange={field.onChange}
                            value={field.value}
                            type={field.type}
                            name={field.name}
                            className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5"
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                {submitButtonLabel}
            </button>
        </form>
    );
};

export default FormAdmin;
