import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";

interface CheckoutFormProps {
  amount:number;
  month: string;
}

const CheckoutForm = ({ amount, month }:CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const axios = useAxios();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError("");
    setSuccess("");

    try {
      // 1. Create payment intent
      const { data } = await axios.post("/create-payment-intent", { amount });

      // 2. Confirm card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: CardElement as any,
        },
      });

      if (result.error) {
        setError(result.error.message ?? "Payment failed.");
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setSuccess(`Payment successful for ${month}!`);
          // TODO: save payment record to DB
        }
      }
    } catch (err) {
      setError("Payment failed.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement options={{ style: { base: { fontSize: '16px' } } }}  />
      <button type="submit" disabled={!stripe || processing} className="btn btn-primary">
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
