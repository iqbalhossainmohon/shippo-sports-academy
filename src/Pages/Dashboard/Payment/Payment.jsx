import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectClass from "../../../hooks/useSelectClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useSelectClass();
    const total = cart.reduce( (sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}/>
            </Elements>
        </div>
    );
};

export default Payment;