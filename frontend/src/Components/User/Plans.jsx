import React from 'react';
import { useNavigate } from 'react-router-dom';



const plans = [{ name: "Explore", sessions: 1, price: 399, image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Vent out, discuss your issues & create a plan with your talk therapist" },
{ name: "Initial Step", sessions: 3, price: 999, image: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: "Identify thought patterns, break negative thought loops & initiate positive ones" },
{ name: "Know your mind", sessions: 9, price: 1799, image: 'https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: "Initiate behavioural changes, learn how to manage your thoughts & emotions" }]
export default function Plans() {
    const navigate = useNavigate()
    const buyHandler = () => {
        navigate('/user-payment')
    }
    return (
        <div>
            <div className='font-bold text-3xl mt-6  text-center'>Find A Plan That's Right For You </div>
            <hr className='h-2 mt-2 w-60 my-0 rounded border-0 mx-auto bg-green-400' />
            < div className='flex flex-wrap justify-center justify-between mt-20 mx-5 mb-6 ' >

                {
                    plans.map((item) => {
                        console.log(item)
                        return (


                            <div className="card w-96 bg-gray-100 border mb-4" >
                                <figure className="px-10 pt-10 ">
                                    <img src={item.image} alt=" plans" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="font-bold mt-2">{item.name}</h2>
                                    <p className="mt-2">Total <span className='font-bold text-xl '>{item.sessions}</span> Sessions</p>
                                    <p className='mt-4 mb-4 font-semibold'>{item.description}</p>
                                    <p className="font-bold text-2xl mt-2 mb-2">&#8377; {item.price} </p>
                                    <div className="card-actions">
                                        <button onClick={buyHandler} className="bg-green-400 mb-10  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                                    </div>
                                </div>
                            </div>


                        )
                    })

                }
            </ div >
        </div >
    )

}