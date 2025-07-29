import StripeProvider from "../../context/StripeProvider";
import CheckoutForm from "./CheckoutForm";

const MakePayment = () => {

  const amount = 1000;

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      <StripeProvider>
        <CheckoutForm
          amount={amount}
        ></CheckoutForm>
      </StripeProvider>
    </div>
  );
};

export default MakePayment;

