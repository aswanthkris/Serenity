import React, { useEffect, useState } from 'react'

import BgExperts from '../../assets/counseling.jpg'

import { axiosUserInstance } from '../../Instance/Axios';

//2
// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//datepicker import
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Button from '@mui/material/Button';
import { minHeight } from '@mui/system';
import { useDispatch } from 'react-redux';
import { language } from '../../redux/filterSlice';
import { specialization } from '../../redux/filterSlice';


import { motion } from "framer-motion"
import Box from '@mui/material/Box';


//filter section


function DropdownComponent() {
    // const [date, setDate] = useState('');

    // const [time, setTime] = useState('');
    const [date, setDate] = React.useState(dayjs(Date.now()));
    const [time, setTime] = React.useState('');
    const [languages, setLanguages] = useState('');
    const [specializations, setSpecializations] = useState('');
    const dispatch = useDispatch()


    // useEffect(() => {
    const filterExperts = async () => {
        // const response = await axiosUserInstance.post("/filter-expert", { languages, specialization })
        // console.log("res is", response.data)
        dispatch(language(languages))
        dispatch(specialization(specializations))

    }


    // filterExperts()
    // }, [])


    // console.log("date is", date);

    // console.log("Time is", time);



    // const dateHandler = (e) => {
    //     setDate(e.target.value)

    //Date formatting
    // function formatDate(input) {
    //     var datePart = input.match(/\d+/g),
    //         year = datePart[0].substring(2), // get only two digits
    //         month = datePart[1], day = datePart[2];

    //     return day + '/' + month + '/' + year;
    // }

    // console.log(formatDate('2010/01/18'));;

    // console.log("neww", date);
    // }
    const languageHandler = (e) => {
        // console.log("ifjind");
        setLanguages(e.target.value)
    }
    const specializationHandler = (e) => {
        setSpecializations(e.target.value)
    }
    const timeHandler = (e) => {
        setTime(e.target.value)
        console.log(e.target.value);
    }


    ///2

    console.log("Language is", languages);
    console.log("Specialization is", specialization);
    console.log("mu state", time);
    console.log("date picker : ", date.toDate("DD/MM/YYYY"));

    const handleTime = (event) => {
        setTime(event.target.value);
    };

    //datepicker

    const handleDate = (newValue) => {
        setDate(newValue);
    };


    return (



        <div >
            {/* <div className='relative'>
                <Box className='absolute'
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <motion.h2
                    animate={{ y: 100 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }}
                    className='font-extrabold text-6xl top-52 right-10 text-green-400 absolute'>How it works?<br /><span className='font-extrabold text-2xl top-20 text-gray-200 absolute'>Anywhere, anytime and on any device. Find online therapies with experts simply and conveniently.</span></motion.h2>
                <img src={BgExperts} alt=" background" />
            </div> */}
            <div className='font-bold text-3xl mt-6  text-center'>Find an expert who is comfortable to you </div>
            <hr className='h-2 mt-2 mb-6 w-60 my-0 rounded border-0 mx-auto bg-green-400' />
            <div className='flex justify-center'>


                {/* date */}
                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                            <DesktopDatePicker
                                label="Session Date"
                                inputFormat="DD/MM/YYYY"
                                value={date}
                                onChange={handleDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <InputLabel id="demo-simple-select-error-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={languages}
                        label="Age"
                        onChange={languageHandler}
                        renderValue={(value) => ` ${value}`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Malayalam"}>Malayalam</MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                        <MenuItem value={"Hindi"}>Hindi</MenuItem>
                        <MenuItem value={"Tamil"}>Tamil</MenuItem>

                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <InputLabel id="demo-simple-select-error-label">Specialization</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={specializations}
                        label="Age"
                        onChange={specializationHandler}
                        renderValue={(value) => ` ${value}`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Anxiety"}>Anxiety</MenuItem>
                        <MenuItem value={"Depression"}>Depression</MenuItem>
                        <MenuItem value={"Family Therapy"}>Family Therapy</MenuItem>
                        <MenuItem value={"Psycho-Somatic Disorders"}>Psycho-Somatic Disorders</MenuItem>
                        <MenuItem value={"Couple counselling"}>Couple counselling</MenuItem>
                        <MenuItem value={"Sexual issues"}>Sexual issues</MenuItem>

                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>
                {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-readonly-label"
                        id="demo-simple-select-readonly"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        inputProps={{ readOnly: true }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Read only</FormHelperText>
                </FormControl> */}
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={time}
                        label="Time"
                        onChange={handleTime}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl required sx={{ m: 1, minWidth: 120 }}>

                    <Button className='h-14' onClick={filterExperts} variant="contained" >Search</Button>

                </FormControl>
            </div>
        </div >


    );
}

export default DropdownComponent