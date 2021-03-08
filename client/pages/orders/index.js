import React from "react";
import OrdersList from "../../components/OrdersList";

const OrdersIndex = ({ orders }) => {
  return (
    <div>
      <OrdersList orders={orders} />
    </div>
  );
};

Orders.getInitialProps = async (ctx, client) => {
  const { data } = await client.get(`/api/orders`);
  return { orders: data };
};

export default OrdersIndex;
