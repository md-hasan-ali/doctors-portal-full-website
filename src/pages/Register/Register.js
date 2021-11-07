import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import registerImg from '../../images/login.png'

const Register = () => {
    const { registerUser, isLoadding, user, error } = useAuth();
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('Your Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 12 }} item xs={12} md={7}>
                    <Typography variant='h6'>
                        Please Register
                    </Typography>
                    {!isLoadding && <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type='email'
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            type='password'
                            name="password"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            variant="standard"
                            type='password'
                            name="confirm_password"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ width: '70%', m: 1 }} type='submit' variant='contained' >Register</Button>
                        <NavLink style={{ textDecoration: 'none', textTransform: 'capitalize' }} to="/login">
                            <Button >Already Registerd ? Please Login</Button>
                        </NavLink>
                    </form>}

                    {isLoadding && <CircularProgress style={{ marginTop: '40px' }} />}

                    {user?.email && <Alert severity="success">User Acount Created Successfully...</Alert>}

                    {error && <Alert severity="error">{error}</Alert>}

                </Grid>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%' }} src={registerImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;