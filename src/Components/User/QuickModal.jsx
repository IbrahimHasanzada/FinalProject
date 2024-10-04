import React from 'react';
import { FaXmark } from 'react-icons/fa6';

const QuickModal = ({ isOpen, toggleModal, children }) => {
    return (
        <>
            {isOpen && (
                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full  max-h-full bg-[#00000082]"
                >
                    <div className="relative p-4 w-full max-w-6xl overflow-y-auto  h-[calc(100%-1rem)] md:h-auto max-h-full">
                        <div className="relative w-full bg-[#FAFAFA] shadow dark:bg-gray-700">
                            <div className="p-4 md:p-5 w-full  space-y-4 flex justify-between">
                                {children}
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="absolute top-5 right-5 text-black text-md w-8 h-8 flex items-center justify-center"
                                >
                                    <FaXmark />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default QuickModal;
