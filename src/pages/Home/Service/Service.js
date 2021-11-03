import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = (props) => {
    const { desc, name, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;