import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error: ', error);
            setCardError(error.message);
        }
        else {
            console.log('payment method :', paymentMethod);
            setCardError('');
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'anonymous'
                    }
                }
            }
        )
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent :', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

        }
    }

    return (
        <>
            <form className="w-1/2 mx-auto mt-12" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className="mt-10 text-center">
                    <button type="submit" className="btn bg-rose-300 btn-sm"
                        disabled={!stripe || !clientSecret || processing}>
                        Payment
                    </button>
                </div>
            </form>

            {cardError && <p className="text-red-500 text-center mt-10">{cardError}</p>}
            {transactionId && <p className="text-green-500 text-center mt-10">Transaction Complete With Transaction Id: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;