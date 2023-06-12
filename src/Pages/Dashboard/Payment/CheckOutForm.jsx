import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

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
            console.log('payment: ', paymentMethod);
            setCardError('');
        }
    }

    return (
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
                {cardError && <p className="text-red-500 text-center">{cardError}</p>}
                <div className="mt-10 text-center">
                    <button type="submit" className="btn bg-rose-300 btn-sm" disabled={!stripe}>
                        Payment
                    </button>
                </div>
            </form>
    );
};

export default CheckOutForm;