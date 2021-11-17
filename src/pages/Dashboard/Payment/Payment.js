import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JwO7NCjVgQn0ngRbgeQKHQqjv30yWjFbyz1K3fSbpuLtEpDLw9193zf3cTAsyb8ssQH66As8QTcH3kSMSUkStrL00YJSb6J5M');

const Payment = () => {
    const { appoinmentId } = useParams();
    const [appoinment, setAppoinment] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/appoinments/${appoinmentId}`)
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [appoinmentId])

    console.log(appoinment)
    return (
        <div>
            <h2>Payment for Id: {appoinment.patientName} for {appoinment.serviceName} </h2>
            <h4>Pay : ${appoinment.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    appoinment={appoinment}
                ></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;