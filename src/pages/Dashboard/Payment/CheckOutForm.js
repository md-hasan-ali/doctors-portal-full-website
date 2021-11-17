import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = ({ appoinment }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error);
        } else {
            setError('')
            console.log(paymentMethod)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#000',
                                '::placeholder': {
                                    color: '#000',
                                },
                            },
                            invalid: {
                                color: '#000',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay ${appoinment.price}
                </button>

            </form>
            {
                error && <p> {error} </p>
            }
        </div>
    );
};

export default CheckOutForm;