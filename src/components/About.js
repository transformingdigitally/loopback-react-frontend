import React from 'react'
import pic from "../../src/img-ref.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const About = () => {
    toast("Sign In Successfully");

    return (
        <div className="container container-sm container-md container-lg container-xl container-xxl">
            <div className='px-4 py-4 my-4 text-center'>
                <h1 className='text-warning'> Role 1 Homepage</h1>
            </div>
            

            <div className="overflow-hidden">
            <div className="text-center">
                <img src={pic} width={650} height={650} className='img-fluid border rounded-3 shadow-lg' />       
                </div>
              </div>
              <ToastContainer autoClose={5000} position="top-center"className="toast-container" toastClassName="dark-toast"  />
        </div>
        

    )
}
