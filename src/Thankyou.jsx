import React from 'react';
import thank from './images/illustration-thank-you.svg'

function Thankyou({items}) {
    return (
        <div className='container-1'>
                <img src={thank} className = "mx-auto block mb-10"alt="" />
                <p className=' text-sm p-rating bg-gray-700 text-center mx-16 tracking-widest rounded-full py-1'>You selected {items} out of 5</p>

                <h2 className='text-white text-center text-3xl my-6'>Thank you!</h2>

                <p className='text-gray-300  text-center  mb-10'>We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</p> 
        </div>
    );
}

export default Thankyou;