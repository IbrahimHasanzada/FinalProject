import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function RangeSlider() {
    const [value, setValue] = useState([2000, 3700]);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleInputChange = (i, newValue) => {
        const updatedValue = [...value];
        updatedValue[i] = Number(newValue);
        setValue(updatedValue);
    }
    const filterProductByPrice = () => {
        const searchParams = new URLSearchParams(window.location.search);
        if (value[0]) {
            searchParams.set('minPrice', value[0]);
        }
        if (value[1]) {
            searchParams.set('maxPrice', value[1]);
        }
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    }
    return (
        <div>
            <Box sx={{ width: 300 }}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    color="black"
                    min={0}
                    max={10000}
                />
            </Box>
            <div className='flex justify-between w-full gap-5'>
                <input
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    value={value[0]}
                    className='h-8 pl-2 border border-[#EAEAE6] text-sm w-full'
                    type="number"
                />
                <input
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    value={value[1]}
                    className='h-8 pl-2 border border-[#EAEAE6] text-sm w-full'
                    type="number"
                />
                <button onClick={filterProductByPrice} className='w-24 flex justify-center items-center h-8 bg-black text-white rounded-md cursor-pointer'>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
}
