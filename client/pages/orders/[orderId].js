import OrderDetail from "../../components/OrderDetail";

const OrderShow = ({ order, currentUser }) => {
  return (
    <div>
      <OrderDetail order={order} currentUser={currentUser} />
    </div>
  );
};

OrderShow.getInitialProps = async (ctx, client) => {
  const { orderId } = ctx.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
  return { order: data };
};

export default OrderShow;
