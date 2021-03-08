import NewTicketForm from "../../components/NewTicketForm";

const NewTicket = () => {
  return (
    <div>
      <NewTicketForm formType={"New Ticket"} url={"/api/tickets"} />
    </div>
  );
};

export default NewTicket;
