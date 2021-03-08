import {
  BasePublisher,
  NATSubjects,
  ITicketCreatedEvent,
} from "@lotus_yng_dev_tickets/common";

export class TicketCreatedPublisher extends BasePublisher<ITicketCreatedEvent> {
  subject: NATSubjects.TicketCreated = NATSubjects.TicketCreated;
}
