import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/loading/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  // console.log(booking);
  const { treatment, price, appointmentDate, slot } = booking;
  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment} </h3>
      <p>
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
