import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
    toast("Sign In Successfully");

    return (
        <div className="container container-sm container-md container-lg container-xl container-xxl">
            <div className='px-4 py-4 my-4 text-center'>
                <h1 className='text-success'> Role 2 Homepage </h1>
            </div>
            <ToastContainer autoClose={5000} position="top-center"className="toast-container" toastClassName="dark-toast"  />
        </div>
    )
}
