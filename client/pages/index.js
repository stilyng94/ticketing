import TicketList from "../components/TicketList";

const Home = ({ tickets }) => {
  return (
    <div>
      <TicketList tickets={tickets} />
    </div>
  );
};

Home.getInitialProps = async (ctx, client) => {
  const { data } = await client.get("/api/tickets");
  return { tickets: data };
};

export default Home;
