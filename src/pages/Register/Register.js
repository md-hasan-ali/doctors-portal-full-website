import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('Your Password did not match');
            return;
        }
        e.preventDefault()
    }
    return (
        <Container>
            <Grid sx={{ mt: 12 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6'>
                        Please Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type='email'
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            type='password'
                            name="password"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            variant="standard"
                            type='password'
                            name="confirm_password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: '70%', m: 1 }} type='submit' variant='contained' >Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button >Already Registerd ? Please Login</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;