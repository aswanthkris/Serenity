import React, { useState } from "react";
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
import { useEffect } from "react";
import { axiosAdminInstance } from "../../Instance/Axios";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function AdminUsers() {

    const [users, setUsers] = useState([])
    console.log("users in state are : ", users);
    // const navigate = useNavigate()




    const handleBlock = async (item) => {
        const userId = item._id

        console.log("block status is : ", users);
        if (item.block) {

            const unblock = await axiosAdminInstance.post('/unblock-user', { userId })
            console.log("expert unblock respose : ", unblock)
            getUsers()
        } else {
            const block = await axiosAdminInstance.post('/block-user', { userId })
            console.log("expert block respose : ", block)
            getUsers()

        }
    }


    const classes = useStyles();


    const getUsers = async () => {

        const response = await axiosAdminInstance.post('/get-users')
        console.log("get users", response.data.data)
        const expertsList = response.data.data
        setUsers(expertsList)

    }


    try {
        useEffect(() => {

            getUsers()
        }, [])

    } catch (error) {
        console.log(error);
    }

    return (
        <TableContainer component={Paper} className="container mx-auto px-4 ">
            <Table className={`${classes.table} w-full`} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-4 py-2">Name</TableCell>
                        <TableCell align="right" className="px-4 py-2">
                            Email
                        </TableCell>
                        <TableCell align="right" className="px-4 py-2">
                            Block Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id} className="text-gray-700">
                            <TableCell component="th" scope="row" className="px-4 py-2">
                                {user.name}
                            </TableCell>
                            <TableCell align="right" className="px-4 py-2">
                                {user.email}
                            </TableCell>
                            <TableCell align="right" className="px-4 py-2">
                                <IconButton
                                    color={user.block ? "secondary" : "primary"}
                                    onClick={() => handleBlock(user)}
                                >
                                    {user.block ? <BlockIcon /> : <CheckIcon />}
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default AdminUsers;