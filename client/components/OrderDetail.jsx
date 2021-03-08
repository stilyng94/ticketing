import React, { useEffect, useState } from "react";
import StripeCheckOut from "react-stripe-checkout";
import useRequest from "../hooks/use-request";
import Router from "next/Router";
import { STRIPE_PK } from "../constants";

const OrderDetail = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    findMsLeft();
    const timerId = setInterval(() => {
      findMsLeft();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  const findMsLeft = () => {
    const msLeft = new Date(order.expiresAt) - new Date();
    setTimeLeft(Math.round(msLeft / 1000));
  };

  const { errors, doRequest } = useRequest({
    method: "post",
    body: { orderId: order.id },
    url: "/api/payments",
    onSuccess: (payment) => {
      if (payment) {
        Router.push(`/orders`);
      }
    },
  });

  if (timeLeft < 0) {
    return <div>Order has Expired</div>;
  }

  return (
    <div>
      {timeLeft} seconds until order expires
      <StripeCheckOut
        stripeKey={STRIPE_PK}
        token={({ id }) => {
          doRequest({ token: id });
        }}
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  );
};

export default OrderDetail;
