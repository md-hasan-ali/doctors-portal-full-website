import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvilableAppoinment = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '10',
        },
        {
            id: 2,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '6',
        },
        {
            id: 3,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '12',
        },
        {
            id: 4,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '5',
        },
        {
            id: 5,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '9',
        },
        {
            id: 6,
            name: 'Teeth Orthodontics',
            time: '05:00 Pm - 07: 00 Am',
            space: '4',
        },

    ]
    return (
        <Container sx={{ py: 5 }}>
            <Typography variant='h4' sx={{ color: 'info.main', pb: 5 }}>AvilableAppoinment :: {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                    >

                    </Booking>)
                }
            </Grid>
        </Container>

    );
};

export default AvilableAppoinment;