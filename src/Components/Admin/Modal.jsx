// Modal.js
import React from 'react';
import { FaXmark } from "react-icons/fa6";

const Modal = ({ isOpen, toggleModal, title, children }) => {
    if (!isOpen) return null;

    return (
        <div tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <button onClick={toggleModal} type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm w-8 h-8 flex items-center justify-center">
                        <FaXmark />
                    </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
