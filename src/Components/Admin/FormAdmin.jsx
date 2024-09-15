import React from 'react';
import { FaXmark } from "react-icons/fa6";

const FormAdmin = ({ formFields, onSubmit, deleletImage, formTitle, submitButtonLabel, handleFileChange, product, image }) => {
    return (
        <form onSubmit={onSubmit}>
            {/* <h2 className="text-lg font-medium mb-4">{formTitle}</h2> */}
            <div className="grid gap-4 mb-4 grid-cols-2">
                {formFields.map((field, index) => (
                    <div key={index} className={`col-span-2 ${field.colSpan ? field.colSpan : ''}`}>
                        <label htmlFor={field.name} className={`block mb-2 text-sm font-medium ${product ? 'text-white' : 'text-gray-900'}`}>
                            {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea onChange={field.onChange} value={field.value} name={field.name} rows={field.rows || 4} className="bg-transparent text-white border text-sm rounded-lg block w-full p-2.5" placeholder={field.placeholder} />
                        ) : field.type === 'select' ? (
                            <select multiple={field.multiple} onChange={field.onChange} value={field.value} name={field.name} className="bg-[#1F2937] text-white border text-sm rounded-lg block w-full p-2.5" >
                                <option value="">{field.placeholder}</option>
                                {field.options.map((option, idx) => (
                                    <option className='my-1 border rounded-lg p-2.5' key={idx} value={option.value}> {option.label} </option>
                                ))}
                            </select>
                        ) : field.type === 'file' ? (
                            <>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor={field.name} className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  dark:bg-gray-700 hover:bg-[#374151] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id={field.name} type="file" className="hidden" onChange={handleFileChange} multiple />
                                    </label>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    {image?.map((item, i) => (
                                        <div className='relative' key={i}>
                                            <button type='button' onClick={(e) => {
                                                e.preventDefault();
                                                deleletImage(item)
                                            }} className='absolute right-2 top-2'>
                                                <FaXmark className='text-red-600 text-xl' />
                                            </button>
                                            <img src={item} alt={field.name} className="w-24 h-24 rounded-lg border-2 border-gray-300" />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <input onChange={field.onChange} value={field.value} type={field.type} name={field.name} className={`${product ? 'bg-transparent text-white' : 'bg-gray-50'} border text-sm rounded-lg block w-full p-2.5`} placeholder={field.placeholder} />
                        )}
                    </div>
                ))}
            </div>
            <button type="submit" className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"> {submitButtonLabel} </button>
        </form>
    );
};

export default FormAdmin;
