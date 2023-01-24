import React, { useEffect, useState } from 'react'
// import ExpertImg from '../../assets/expert.jpg'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { experts } from '../../redux/expertSlice'

//Expert display section

function UserExperts() {
    const { languageList, specializationList } = useSelector((state) =>
        state.filter
    )

    // const expertsToFilter = languageList.expert
    // console.log("expert in languagelist ", expertsToFilter);
    console.log("language filter from store", languageList)
    console.log("specialization filter from store", specializationList)


    const navigate = useNavigate()
    const [expert, setExpert] = useState([])
    console.log("mapping state now :", expert);
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()



    const fetchExperts = async () => {
        const experts = await axios.get('http://localhost:5050/user/experts-list')
        // console.log(experts.data.data);
        const expertData = experts.data.data
        // console.log("expert without filter", expertData)
        setExpert(expertData)

    }

    useEffect(() => {
        fetchExperts()
    }, [])



    const profileHandler = (id) => {
        // console.log("the data:", id)
        navigate('/user-experts-profile', { state: id })

    }

    const bookingHandler = (expertDetails) => {
        navigate('/user-plans', expertDetails)
        dispatch(experts(expertDetails))
    }


    useEffect(() => {
        const applyFilter = () => {

            console.log("list hoiiiiiiiiiiiiiii");

            let filtered = expert;

            if (languageList) {
                console.log("inside language list iffff");
                filtered = filtered.filter(
                    (doctor) => doctor.language === languageList)
            }
            if (specializationList) {
                console.log("inside special list iffff");
                filtered = filtered.filter((doctor) => doctor.specialization === specializationList);
            }
            // if (filters.search) {
            //     filtered = filtered.filter((vehicle) =>
            //         vehicle.Name.toLowerCase().includes(filters.search.toLowerCase())
            //     );
            // }
            setExpert(filtered)
        }
        applyFilter()
    }, [])




    return (
        <div>
            <div className='flex flex-wrap justify-center'>

                {
                    expert.map((item) => {
                        // console.log(item.approved)
                        if (item.approved) {
                            return (
                                < div className='p-4 ' >
                                    <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-end px-4 pt-4">
                                            {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                            <span class="sr-only">Open dropdown</span>
                                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </button> */}
                                            <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                                                <ul className="py-1" aria-labelledby="dropdownButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center pb-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image} alt=" Bonnie image" />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.qualification}
                                            </span>
                                            <div className='pt-4'>
                                                <label className='font-bold '>Specialization</label>
                                                <ul className="list-disc">
                                                    <li>{item.specialization[0]}</li>
                                                    <li>{item.specialization[1]}</li>
                                                    <li>{item.specialization[2]}</li>
                                                </ul>
                                            </div>
                                            <div className="flex mt-4 px-2 space-x-3 md:mt-6">
                                                <a onClick={() => bookingHandler(item)} className="inline-flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-center text-white bg-emerald-600 rounded-lg hover:bg-emerald-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book session</a>
                                                <a onClick={() => { profileHandler(item._id) }} className="inline-flex items-cent   er cursor-pointer px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700" > View profile</a>
                                            </div>

                                        </div>
                                    </div>
                                </ div>
                            )
                        }
                    })}

            </div>
        </div >
    )
}

export default UserExperts 