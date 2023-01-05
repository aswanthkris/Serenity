import React from 'react'
import bgHome from '../../assets/home-bg.jpg'
import BPD from '../../assets/BPD.jpg'
function UserHome() {
    return (

        <div className='w-full'>
            <div className='w-full'>
                {/* <div className="items-center"> */}
                <img className='bg-cover bg-fixed' src={bgHome} alt="home background image " />

                {/* </div> */}
            </div>

            <div class="grid grid-cols-1 gap-10 ">
                <div className='font-bold text-3xl mt-4 text-center'>It's okay, not to be okay
                </div>
                <hr className='h-4 w-60 my-0 rounded border-0 mx-auto bg-green-400' />
                <div className='font-medium text-center mb-4'>"You don’t have to control your thoughts. You just have to stop letting them control you." — Dan Millman
                </div>
            </div>

            <div className='flex flex-col ml-96 space-y-4 py-5 justify-center w-96' >
                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
                        <p class="font-bold pt-6 pl-4 md:justify-center">Anger issues</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />
                    </div>
                </a>

                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
                        <p class="font-bold pt-6 pl-4">Anxiety and panic attacks</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>

                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
                        <p class="font-bold pt-6 pl-4">Bipolar disorder</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>

                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">Body dysmorphic disorder (BDD)</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>
                <a href="">  <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                    <p class="font-bold pt-6 pl-4">Borderline personality disorder</p>
                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                    <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                </div>
                </a>
                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">Depression</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>

                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">OCD</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>
                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">Psychosis</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>
                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">Relationship issues</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>
                <a href="">
                    <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
                        <p class="font-bold pt-6 pl-4">Trauma</p>
                        {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                        <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

                    </div>
                </a>
            </div>

        </div >
    )
}

export default UserHome