import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ContactUs = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ margin: '0 auto' }} item xs={12} md={10}>
                    <Typography variant='h6'>
                        Contact Us
                    </Typography>
                    <Typography variant='h4'>
                        Always Contact With Us
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactUs;