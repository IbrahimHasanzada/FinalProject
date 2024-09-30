import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
const TableAdmin = ({ item, actions, product, update: UpdateComponent, ShowSubCategories }) => {
    return (
        <div className="w-full">
            <div className='flex justify-start items-center bg-[#374151] text-[#9CA3AF]'>
                <span className={`p-4 ${product ? 'w-[10%]' : 'w-[20%]'}`}>{item.id}</span>
                <div className={`p-4 ${product ? 'w-[22%]' : 'w-[20%]'} flex items-center gap-2`}>
                    {product && <img className='rounded-full w-10 h-10' src={item.images[0]} alt={item.id} />}
                    <span>{item?.name}</span>
                </div>
                {product ? (
                    <>
                        <span className={`p-4 ${product ? 'w-[16%]' : 'w-[20%]'}`}>{item.category?.name}</span>
                        <span className={`p-4 ${product ? 'w-[16%]' : 'w-[20%]'}`}>{item.subcategory?.name}</span>
                        <div className={`p-4 ${product ? 'w-[16%]   text-white flex justify-start items-center' : 'w-[20%]'}`}>
                            <span className='bg-[#5C67F7] p-1 rounded-lg'>{item.price}$</span>
                        </div>
                    </>
                ) : <span className='p-4 w-[20%]'>{item.slug}</span>
                }
                <div className='p-4 w-[33%] flex gap-2'>
                    <UpdateComponent id={item.id} />
                    <button onClick={() => actions(item.id)} className="flex items-center gap-2 border-2 text-red-700 bg-transparent border-red-700 hover:text-white hover:bg-red-700  bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                        <FaRegTrashAlt /> Delete
                    </button>
                    {/* {/* {SubCategory ?  <SubCategory  /> : '' }  */}
                    {ShowSubCategories && <ShowSubCategories id={item.id} />}
                </div>
                {/* <button onClick={() => setOpenSub(!openSub)} className="w-[5%] flex justify-center items-center h-full border p-3"><RxDoubleArrowDown /></button> */}
            </div>
        </div>
    );
};

export default TableAdmin;
