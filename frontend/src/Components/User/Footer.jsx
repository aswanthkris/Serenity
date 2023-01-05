import React from 'react'

function Footer() {
    return (
        <div className='w-full h-72 bg-amber-400 mb-auto'>
            <div div className=' grid grid-cols-4 gap-4 pt-6 ' >
                <div className='flex flex-row pt-2 pl-6'>
                    {/* <img
                        className="h-12 w-12 "
                        src="https://img.icons8.com/color/512/spinach.png"
                        alt="Workflow"
                    /> */}
                    {/* <div className='pt-2'>
                        <a className="text-gray-900 text-xl font-bold text-emerald-600 sm:text-center " href="/">Serenity</a>

                    </div> */}
                </div>
                <div className='font-bold'>Quick Links</div>
                <div className='font-bold'>Legal Stuff</div>
                <div className='font-bold'>Trademark Policy</div>
                <div></div>
                <div>For therapists</div>
                <div>Disclaimer</div>
                <div>Contact</div>
                <div></div>

                <div>Privacy policy</div>
                <div>About us</div>
                <div>Terms of services</div>




            </div >
            <div className='flex justify-center'>
                <p className='font-bold mt-8 sm:text-center'>If you are in a life-threatening situation - DO NOT use this site. Try to get immediate help.
                    <br /> <span className='flex justify-center'>© Serenity. All rights reserved.</span>
                </p>
            </div>
        </div>

    )
}

export default Footer