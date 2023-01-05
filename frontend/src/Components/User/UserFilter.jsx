import React, { useEffect, useState } from 'react'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import BgExperts from '../../assets/counseling.jpg'
import './UserFilter.css'
import { axiosUserInstance } from '../../Instance/Axios';


//filter section


function DropdownComponent() {

    const [date, setDate] = useState('');
    const [language, setLanguage] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [time, setTime] = useState('');

    // useEffect(() => {
    const filterExperts = async () => {
        const response = await axiosUserInstance.post("/filter-expert", { language, specialization })
        console.log("res is", response.data);
    }


    filterExperts()
    // }, [])


    // console.log("date is", date);
    console.log("Language is", language);
    console.log("Specialization is", specialization);
    // console.log("Time is", time);



    const dateHandler = (e) => {
        setDate(e.target.value)

        //Date formatting
        // function formatDate(input) {
        //     var datePart = input.match(/\d+/g),
        //         year = datePart[0].substring(2), // get only two digits
        //         month = datePart[1], day = datePart[2];

        //     return day + '/' + month + '/' + year;
        // }

        // console.log(formatDate('2010/01/18'));;

        // console.log("neww", date);
    }
    const languageHandler = (e) => {
        setLanguage(e.target.value)
    }
    const specializationHandler = (e) => {
        setSpecialization(e.target.value)
    }
    const timeHandler = (e) => {
        setTime(e.target.value)
        console.log(e.target.value);
    }



    return (
        <>
            <div className=''>
                <img src={BgExperts} alt=" background" />
            </div>
            < div className='bg-gray-400  h-32 ' >
                <section className="availability " id="availability">
                    <form  >
                        <div className="flex flex-wrap justify-between ml-2">
                            {/* <div className="box">
                            <p>Check in</p>
                            <input type="date" name="check_in" className="input" required />
                        </div> */}
                            <div className=" mt-5">
                                <p>Check out</p>
                                <input type="date" value={date} id="datepicker" name=" check_out" className="input border bg-gray-300" onChange={dateHandler} required />
                            </div>
                            <div className=" mt-5">
                                <p>Language</p>
                                <select name="adults" onChange={languageHandler} className="input border bg-gray-300" required>
                                    <option value="-"></option>
                                    <option value="English">English</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Tamil">Tamil</option>


                                </select>
                            </div>
                            <div className=" mt-5">
                                <p>Specializatio</p>
                                <select name="childs" onChange={specializationHandler} className="input border bg-gray-300" required>

                                    <option value="-"></option>
                                    <option value="Anxiety">Anxiety</option>
                                    <option value="Depression">Depression</option>
                                    <option value="Family Therapy">Family Therapy</option>
                                    <option value="Psycho-Somatic Disorders">Psycho-Somatic Disorders</option>
                                    <option value="couple counselling">Couple counselling</option>
                                    <option value="Sexual issues">Sexual issues</option>
                                    <option value="suicidal ideation">Suicidal ideation</option>

                                </select>
                            </div>
                            <div className=" mt-5">
                                <p>Time</p>
                                <select name="rooms" onChange={timeHandler} className="input border bg-gray-300" required>
                                    <option value="-"></option>
                                    <option value="7AM - 11AM">7AM - 11AM</option>
                                    <option value="11AM - 3PM">11AM - 3PM</option>
                                    <option value="3PM - 7PM">3PM - 7PM</option>
                                    <option value="7PM - 11PM">7PM - 11PM</option>

                                </select>
                            </div>
                            <br />
                            {/* <button type='submit' onSubmit={handleSubmit} className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded mt-8 mr-20 '>Find experts</button> */}
                        </div>

                        {/* <input type="submit" value="check availability" name="check" className="btn"/> */}
                    </form>
                </section >

            </div >
        </>



    );
}

export default DropdownComponent