import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';
import loginImg from '../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isLoadding, loginUser, error, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 16 }} xs={12} md={7}>
                    <Typography variant='body1'>
                        Login
                    </Typography>
                    {!isLoadding && <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            type="password"
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: '70%', m: 2 }} type="submit" variant="contained" >Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button >New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    <p>-------------------Or------------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{ width: '70%', m: 2 }} variant="contained" >Google SignIn</Button>

                    {isLoadding && <CircularProgress style={{ marginTop: '40px' }} />}

                    {user?.email && <Alert severity="success">User Login Successfully...</Alert>}

                    {error && <Alert severity="error">{error}</Alert>}

                </Grid>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;