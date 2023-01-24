
import React from "react";
import expertImg from '../../assets/expert.jpg'
import userImg from '../../assets/user.jpeg'
import { useLocation } from "react-router-dom";
import { axiosUserInstance } from "../../Instance/Axios";
import { useSelector } from "react-redux";


// const user = { userName: "Aswanth Krishna", image: userImg }
// const expert = { expertName: "Dr. Akhil", image: expertImg }
// const localUser = localStorage.getItem('user')
// console.log("local storage user is: ", localUser);
const Payment = () => {

    const users = useSelector((state) => state.login.userList)
    const expert = useSelector((state) => state.experts.experts)
    const user = users._id
    console.log("user from storee :", users);
    const location = useLocation()
    const plans = location.state
    // console.log("plan data is : ", plans);
    const tax = plans.price * 0.18
    const total = plans.price + tax
    // console.log("taxxx", tax);
    // console.log("plan price is: ", location.state);
    const d = new Date();
    let text = d.toLocaleString();

    const handleCheckout = async () => {
        const response = await axiosUserInstance.post('create-checkout-session', {
            plans,
            total,
            userId: user
        })
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
            })
            .catch((err) => console.log(err.message));
    }
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Booking Summary</h1>
                <p className="text-lg font-medium leading-6 text-gray-600">{text}</p>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-700 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-200">Session details</p>

                        <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                            <div className="w-full md:w-40">
                                <img className="w-full hidden rounded-full md:block" src={expert.image} alt=" dress" />
                                <img className="w-full md:hidden" src={expert.image} alt=" dress" />
                            </div>
                            <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-200">{expert.name} </h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm leading-none text-gray-200">
                                            <span className="text-gray-200">Date : </span>12/01/2023
                                        </p>
                                        <p className="text-sm leading-none text-gray-200">
                                            <span className="text-gray-200">Time : </span>12:00 PM
                                        </p>
                                        {/* <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-600">Ex: </span> Light Blue
                                        </p> */}
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6 text-gray-200">
                                        Complete your payment here and proceed to the session!
                                    </p>
                                    {/* <p className="text-base xl:text-lg leading-6 text-gray-800">01</p> */}
                                    {/* <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">&#8377;  {plans.price}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        GST<span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800"></span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600">&#8377;  {tax} (18%)</p>
                                </div>
                                {/* <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                                </div> */}
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">&#8377; {total}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Proceed to payment</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://img.icons8.com/emoji/512/leafy-green.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">
                                            Serenity
                                            <br />
                                            <span className="font-normal">Be a part of our family</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">&#8377; {total}</p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button onClick={() => handleCheckout()} className="hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 py-5 w-96 md:w-full bg-green-600 rounded text-base font-medium leading-4 text-white">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-700 w-full h-28 xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    {/* <h3 className="text-xl font-semibold leading-5 text-gray-200">User :</h3> */}
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                {/* <img className="w-24 h-24 rounded-full" src={user.image} alt=" avatar" /> */}
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-200">Hi, {users.name}</p>

                                    {/* <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p> */}
                                </div>
                                <p className="text-base pl-40 xl:text-lg leading-6  text-gray-200">
                                    Vent out, identify & understand your issues. Plan your wellness journey with the therapist.
                                </p>
                            </div>

                            {/* <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 text-gray-800">david89@gmail.com</p>
                            </div> */}
                        </div>
                        {/* <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Edit Details</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Payment;








// import React from "react";

// import masterCard from "../../assets/BPD.jpg";
// import paypal from "../../assets/BPD.jpg";
// import "./Payment.css";

// const Payment = () => {
//     return (
//         <>
//             <div className="payment">
//                 <label htmlFor="" className="d-flex align-items-center gap-2">
//                     <input type="radio" /> Direct Bank Transfer
//                 </label>
//             </div>

//             <div className="payment mt-3">
//                 <label htmlFor="" className="d-flex align-items-center gap-2">
//                     <input type="radio" /> Cheque Payment
//                 </label>
//             </div>

//             <div className="payment mt-3 d-flex align-items-center justify-content-between">
//                 <label htmlFor="" className="d-flex align-items-center gap-2">
//                     <input type="radio" /> Master Card
//                 </label>

//                 <img src={masterCard} alt="" />
//             </div>

//             <div className="payment mt-3 d-flex align-items-center justify-content-between">
//                 <label htmlFor="" className="d-flex align-items-center gap-2">
//                     <input type="radio" /> Paypal
//                 </label>

//                 <img src={paypal} alt="" />
//             </div>
//             <div className="payment text-end mt-5">
//                 <button>Reserve Now</button>
//             </div>
//         </>
//     );
// };

// export default Payment;
