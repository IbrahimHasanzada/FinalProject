import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const TableAdmin = ({ item, actions, update: UpdateComponent, SubCategory: SubCategory }) => {
    return (
        <div className="w-full">
            <div className='flex justify-start items-center bg-[#374151] text-[#9CA3AF]'>
                <span className='p-4 w-[20%]'>{item.name}</span>
                <span className='p-4 w-[20%]'>{item.slug}</span>
                <span className='p-4 w-[20%]'>{item.id}</span>
                <div className='p-4 w-[33%] flex gap-2'>
                    <UpdateComponent id={item.id} />
                    <button onClick={() => actions(item.id)} className="flex items-center gap-2 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                        <FaRegTrashAlt /> Delete
                    </button>
                    {SubCategory ?  <SubCategory id={item.id} /> : '' } 
                </div>
                {/* <button onClick={() => setOpenSub(!openSub)} className="w-[5%] flex justify-center items-center h-full border p-3"><RxDoubleArrowDown /></button> */}
            </div>
        </div>
    );
};

export default TableAdmin;
