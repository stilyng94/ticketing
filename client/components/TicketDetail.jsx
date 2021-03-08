import React from "react";
import useRequest from "../hooks/use-request"
import Router from "next/Router"

const TicketDetail = ({ ticket }) => {
  const {errors,doRequest} = useRequest({
    method:"POST",
    body:{ticketId:ticket.id},
    url:"api/orders",
    onSuccess:(order) => {
      if(order){
        Router.push(`/orders/[orderId]`,as=`/orders/${order.id}`)
      }
    }
  });

  const onPurchase = () => {
    await doRequest();
    return
  }

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>{ticket.price}</h4>

      <button className="btn btn-primary" type="button" onClick={onPurchase}>
        Purchase
      </button>
    </div>
  );
};

export default TicketDetail;
