import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appoinmentBg = {
    background: `url(${appointment})`,
    marginTop: '150px',
    marginBottom: '80px',
    backgroundColor: 'rgba(45,58,75,.75)',
    backgroundBlendMode: 'darken, luminosity',


}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" style={{ color: 'lightblue', marginBottom: '30px' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h3" style={{ color: 'white' }}>
                            Make an Appoinment Tody
                        </Typography>
                        <Typography variant="h6" style={{ color: 'white', fontSize: '16px', fontWeight: 'normal', margin: '30px 0' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam quidem blanditiis vero nulla, debitis possimus perferendis omnis vitae? Ad!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'lightblue' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;