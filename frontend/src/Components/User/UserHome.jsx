import React from 'react'
import bgHome from '../../assets/home-bg.jpg'
import BPD from '../../assets/BPD.jpg'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { motion } from "framer-motion"

function UserHome() {


    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1609852234838-147db6815968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Anger Issues',
            description: 'Anger becomes a problem when you have trouble controlling it, causing you to say or do things you regret. Anger is bad for your physical and mental health.',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.pexels.com/photos/736843/pexels-photo-736843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Anxiety',
            description: 'Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. It can be a reaction to stress.',
        },
        {
            img: 'https://images.pexels.com/photos/5756480/pexels-photo-5756480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Bipolar Disorder',
            description: 'A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.The exact cause of bipolar disorder isn’t known.',
        },
        {
            img: 'https://i0.wp.com/calocd.com/wp-content/uploads/2020/09/Thought-Action-Fusion-Thought-Suppression.jpeg?w=550&ssl=1',
            title: 'Body Dysmorphic Disorder',
            description: 'Body dysmorphic disorder (BDD), or body dysmorphia, is a mental health condition where a person spends a lot of time worrying about flaws in their appearance . People of any age can have BDD.',
            cols: 2,
        },
        {
            img: 'https://images.pexels.com/photos/568025/pexels-photo-568025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Depression',
            description: 'Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems.',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1620621983410-962c3124dc83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            title: 'OCD',
            description: 'Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.pexels.com/photos/6763596/pexels-photo-6763596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Psychosis',
            description: 'A mental disorder characterised by a disconnection from reality. Psychosis may occur as a result of a psychiatric illness such as schizophrenia.In other instances, it may be caused by a health condition, medication or drug.',
        },
        {
            img: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Relationship Issues',
            description: 'Mental illness can affect many aspects of life, including intimate relationships. Some individuals may experience hesitancy or fear of disclosure to their partner due to the continued stigma surrounding mental illness. ',
        },
        {
            img: 'https://images.pexels.com/photos/568021/pexels-photo-568021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Trauma',
            description: 'Psychological trauma is a response to an event that a person finds highly stressful. Examples include being in a war zone, a natural disaster, or an accident. Trauma can cause a wide range of physical and emotional symptoms.',
            rows: 2,
            cols: 2,
        }

    ];
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/user-experts')
    }


    return (

        <div className='w-full'>
            <div className='w-full relative '>

                <motion.h2
                    animate={{ y: 100 }}
                    transition={{ delay: 2 }}
                    className='font-extrabold text-xl top-10 md:text-6xl md:top-52 right-10 text-green-400 absolute'>How it works?<br /><span className='font-extrabold text:sm sm:text-base top-5 md:text-2xl md:top-20 right-10 text-zinc-200 absolute'>Anywhere, anytime and on any device. Find online therapies with experts simply and conveniently.</span></motion.h2>

                <img className='bg-cover bg-fixed ' src={bgHome} alt="home background image " />



            </div>


            <div className="grid grid-cols-1 gap-5  ">
                <div className='font-bold text-3xl mt-4 text-center'>It's okay, not to be okay
                </div>
                <hr className='h-4 w-60 my-0 rounded border-0 mx-auto bg-green-400' />
                <div className='font-medium text-center mb-4'>"You don’t have to control your thoughts. You just have to stop letting them control you." — Dan Millman
                </div>
            </div>

            {/* image listing */}
            <>
                <Box sx={{ flexGrow: 1 }} className="ml-44 mt-9 mb-8">
                    <Grid className='' container spacing={2}>
                        {itemData.map((item) => (
                            <Card className='p-6' sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        className='rounded-sm h-56 '
                                        component="img"
                                        // height="130"
                                        image={item.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className=''>
                                    <Button onClick={clickHandler} size="small" color="success">
                                        Find Expert Solution
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>
                </Box>
            </>
        </div >
    )
}

export default UserHome












    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     < div className = 'flex flex-col ml-96 space-y-4 py-5 justify-center w-96' >
//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
//             <p class="font-bold pt-6 pl-4 md:justify-center">Anger issues</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />
//         </div>
//     </a>

//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
//             <p class="font-bold pt-6 pl-4">Anxiety and panic attacks</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>

//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 " role="alert">
//             <p class="font-bold pt-6 pl-4">Bipolar disorder</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>

//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">Body dysmorphic disorder (BDD)</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>
//     <a href="">  <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//         <p class="font-bold pt-6 pl-4">Borderline personality disorder</p>
//         {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//         <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//     </div>
//     </a>
//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">Depression</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>

//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">OCD</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>
//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">Psychosis</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>
//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">Relationship issues</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>
//     <a href="">
//         <div class="bg-blue-100 rounded-md border border-blue-500 text-blue-700 px-8 py-3 w-50 grid grid-cols-2 grid grid-cols-2 grid grid-cols-2" role="alert">
//             <p class="font-bold pt-6 pl-4">Trauma</p>
//             {/* <p class="text-sm">Some additional text to explain said message.</p> */}
//             <img className="w-20 ml-12 rounded-md " src={BPD} alt="" />

//         </div>
//     </a>
// </ >