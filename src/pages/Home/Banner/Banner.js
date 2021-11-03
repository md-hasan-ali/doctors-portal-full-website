import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bgImg from '../../../images/bg.png'
import chir from '../../../images/chair.png'

const BannerBg = {
    background: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}
const centerAlign = {
    display: 'flex',
    alignItems: 'center',
    height: '450px',

}

const Banner = () => {
    return (
        <Container style={BannerBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ textAlign: 'left', ...centerAlign }}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' style={{ color: 'gray', fontSize: '16px', margin: '30px 0' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quasi optio nesciunt delectus saepe quam? Nisi laudantium quis dolor sapiente.
                        </Typography>
                        <Button variant="contained">Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={centerAlign}>
                    <img style={{
                        width: '450px'
                    }} src={
                        chir
                    } alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;