import React, { useState } from 'react';
import { FaPlus, FaXmark } from "react-icons/fa6";
const ProductModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => { setIsModalOpen(!isModalOpen)}
    return (
        <div>
            {/* Modal toggle */}
            <button onClick={toggleModal} className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
              <FaPlus />   Add Products
            </button>
            {/* Main modal */}
            {isModalOpen && (
                <div tabindex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">Create New Product</h3>
                            <button onClick={toggleModal} type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm w-8 h-8 flex items-center justify-center">
                                <FaXmark />
                            </button>
                        </div>
                        {/* Modal body */}
                        <form className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5" placeholder="Type product name" required/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                    <input type="number" name="price" id="price" className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5" placeholder="2999₼" required/>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category" className="bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5">
                                        <option value="">Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium">Product Description</label>
                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border" placeholder="Write product description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <FaPlus /> Add new products</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductModal
