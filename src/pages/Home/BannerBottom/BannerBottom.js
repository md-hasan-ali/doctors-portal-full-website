import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const BannerBottom = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Typography variant="h4">
                        Opening Hours
                    </Typography>
                    <Typography variant="h6">
                       Lorem ipsum dolor sit amet.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>

                </Grid>
                <Grid item xs={6} md={4}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default BannerBottom;