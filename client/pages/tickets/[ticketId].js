import TicketDetail from "../../components/TicketDetail";

const TicketShow = ({ ticket }) => {
  return (
    <div>
      <TicketDetail ticket={ticket} />
    </div>
  );
};
TicketShow.getInitialProps = async (ctx, client) => {
  const { ticketId } = ctx.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);
  return { ticket: data };
};

export default TicketShow;
