import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";
import { axiosAdminInstance } from '../../Instance/Axios';
import { useNavigate } from 'react-router-dom';






const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function AdminExperts() {
    //States
    const [experts, setExperts] = useState([])

    const navigate = useNavigate()


    const classes = useStyles();
    const handleBlock = async (expert) => {
        const expertId = expert._id

        if (expert.approved) {

            const block = await axiosAdminInstance.post('/block-expert', { expertId })
            getExperts()
            console.log("expert block respose : ", block)

        } else {
            const approve = await axiosAdminInstance.post('/approve-expert', { expertId })
            getExperts()
            console.log("expert approve respose : ", approve)
        }
    }

    const handleClick = (expertId) => {
        navigate('/admin-expert-profile', { state: expertId })
    }

    const getExperts = async () => {

        const response = await axiosAdminInstance.post('/get-experts')
        console.log("get experts", response.data.data)
        const expertsList = response.data.data
        setExperts(expertsList)

    }


    try {
        useEffect(() => {
            getExperts()
        }, [])

    } catch (error) {
        console.log(error);
    }


    return (
        <>
            <TableContainer component={Paper} className="container mx-auto px-4 ">
                <Table className={`${classes.table} w-full`} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell className="px-4 py-2">
                                No.
                            </TableCell>
                            <TableCell className="px-4 py-2">
                                Name
                            </TableCell>
                            <TableCell align="right" className="px-4 py-2">
                                Email
                            </TableCell>
                            <TableCell align="right" className="px-4 py-2">

                            </TableCell>
                            <TableCell align="right" className="px-4 py-2">
                                Approval Status {<br />}(click to change)
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {experts.map((user, index) => (
                            <TableRow key={user._id} className="text-gray-700">
                                <TableCell component="th" scope="row" className="px-4 py-2">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row" className="px-4 py-2">
                                    {user.name}
                                </TableCell>
                                <TableCell align="right" className="px-4 py-2">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right" className="px-4 py-2">
                                    <button onClick={() => handleClick(user._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        View Details
                                    </button>
                                </TableCell>
                                <TableCell align="right" className="px-4 py-2">
                                    <IconButton
                                        color={user.approved ? "primary" : "secondary"}
                                        onClick={() => handleBlock(user)}
                                    >
                                        {user.approved ? <CheckIcon /> : <BlockIcon />}
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdminExperts