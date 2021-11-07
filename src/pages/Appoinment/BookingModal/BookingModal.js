import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../contexts/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ open, handleBookingClose, booking, date, setSuccessBooking }) => {
    const { user } = useAuth()
    const { name, time } = booking;

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }

    const handleSubmit = (e) => {
        // collect data 
        const appoinment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
        }

        // send to server
        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccessBooking(true)
                    handleBookingClose();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                name='patientName'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                name='email'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Phone Number'
                                onBlur={handleOnBlur}
                                name='Phone'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' variant="contained">Send Message</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;