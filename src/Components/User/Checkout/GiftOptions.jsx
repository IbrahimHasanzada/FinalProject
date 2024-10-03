// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const GiftOptions = () => {
//     const [isGift, setIsGift] = useState(false);

//     const handleCheckboxChange = () => setIsGift(!isGift);

//     const validationSchema = Yup.object({
//         firstName: Yup.string().required('Required'),
//         lastName: Yup.string().required('Required'),
//         mobile: Yup.string().required('Required'),
//         note: Yup.string(),
//     });

//     return (
//         <div className='py-9'>
//             <h2 className='text-xl font-["Cormorant_Garamond",_serif]'>Gift options</h2>
//             <p className='text-sm text-[#777] py-2'>Please make sure the delivery address belongs to the one receiving the gift</p>
//             <div className='flex items-center'>
//                 <input 
//                     className='w-[14px] h-[14px]' 
//                     type="checkbox" 
//                     onChange={handleCheckboxChange} 
//                 />
//                 <p className='text-sm px-3'>Send this order as a gift</p>
//             </div>
//             {isGift && (
//                 <Formik
//                     initialValues={{ firstName: '', lastName: '', mobile: '', note: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={(values) => {
//                         // Handle form submission here
//                         console.log(values);
//                     }}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form className="py-4">
//                             <div className='flex w-full my-4'>
//                                 <div className='mr-4 w-[50%]'>
//                                     <label className='uppercase text-sm'>Receiver first name</label>
//                                     <Field 
//                                         name="firstName" 
//                                         className="outline-none w-full text-sm md:text-base h-11 px-5 flex items-center justify-between border mt-1"
//                                         placeholder="Receiver first name" 
//                                     />
//                                     <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>
//                                 <div className='w-[50%]'>
//                                     <label className='uppercase text-sm'>Receiver last name</label>
//                                     <Field 
//                                         name="lastName" 
//                                         className="outline-none w-full text-sm md:text-base h-11 px-5 flex items-center justify-between border mt-1"
//                                         placeholder="Receiver last name" 
//                                     />
//                                     <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>
//                             </div>
//                             <div className='w-full'>
//                                 <label className='uppercase text-sm'>Receiver mobile</label>
//                                 <Field 
//                                     name="mobile" 
//                                     className="outline-none w-full text-sm md:text-base h-11 px-5 flex items-center justify-between border mt-1"
//                                     placeholder="Receiver mobile" 
//                                 />
//                                 <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                             <div className='w-full my-4'>
//                                 <label className='uppercase text-sm'>Note</label>
//                                 <Field 
//                                     name="note" 
//                                     as="textarea" 
//                                     className="min-h-[100px] py-3 px-5 outline-none text-sm md:text-base w-full border mt-1" 
//                                     placeholder="Note" 
//                                 />
//                             </div>
//                         </Form>
//                     )}
//                 </Formik>
//             )}
//         </div>
//     );
// };

// export default GiftOptions;
