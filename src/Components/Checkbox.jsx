import React, { useState } from 'react'

const CheckBox = ({ checkbox, setCheckbox }) => {

    const [check, setCheck] = useState(false)

    setCheckbox && setCheckbox(check)

    return (
        <div onClick={() => setCheck(!check)} className={`${check && 'bg-black'} w-5 h-5 border flex justify-center items-center border-[#000000] cursor-pointer`}>
            <div className={`${check ? 'block' : 'hidden'} stroke-white w-3 h-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 _1fragem2i _1fragemsd _1fragemog _1fragemo6 _1fragemri"><path strokeLinecap="round" strokeLinejoin="round" d="m12.1 2.8-5.877 8.843a.35.35 0 0 1-.54.054L1.4 7.4"></path></svg>
            </div>
        </div>
    )
}

export default CheckBox