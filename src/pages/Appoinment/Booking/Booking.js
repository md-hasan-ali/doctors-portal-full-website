import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setSuccessBooking }) => {
    const [open, setOpen] = React.useState(false);
    const handleBookingOpen = () => setOpen(true);
    const handleBookingClose = () => setOpen(false);
    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5, }}>
                    <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>

                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>

                    <Typography gutterBottom component="div">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appoinment</Button>
                </Paper>
            </Grid >
            <BookingModal
                date={date}
                open={open}
                handleBookingClose={handleBookingClose}
                booking={booking}
                setSuccessBooking={setSuccessBooking}
            >

            </BookingModal>
        </>
    );
};

export default Booking;