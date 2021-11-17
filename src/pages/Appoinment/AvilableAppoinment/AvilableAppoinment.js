import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvilableAppoinment = ({ date }) => {
    const [successBooking, setSuccessBooking] = useState(false);

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '11:00 Pm - 12: 30 Am',
            price: 125,
            space: '10',
        },
        {
            id: 2,
            name: 'Pediatric Dentistry',
            time: '09:00 Pm - 10: 00 Am',
            price: 250,
            space: '6',
        },
        {
            id: 3,
            name: 'Cosmatic Dentistry',
            time: '05:00 Pm - 07: 00 Pm',
            price: 550,
            space: '12',
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '03:00 Pm - 04: 10 Am',
            price: 220,
            space: '5',
        },
        {
            id: 5,
            name: 'Oral Surgery',
            time: '06:00 Pm - 08: 00 Am',
            price: 200,
            space: '9',
        },
        {
            id: 6,
            name: 'Teeth Cleaning',
            time: '02:00 PM - 03: 00 PM',
            price: 250,
            space: '4',
        },

    ]
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant='h4' sx={{ color: 'info.main', pb: 5 }}>AvilableAppoinment :: {date.toDateString()}</Typography>
            {successBooking && <Alert severity="success">Appoinment Booking Successfully..</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setSuccessBooking={setSuccessBooking}
                    >

                    </Booking>)
                }
            </Grid>
        </Container>

    );
};

export default AvilableAppoinment;