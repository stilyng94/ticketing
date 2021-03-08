import {
  BasePublisher,
  NATSubjects,
  ITicketUpdatedEvent,
} from "@lotus_yng_dev_tickets/common";

export class TicketUpdatedPublisher extends BasePublisher<ITicketUpdatedEvent> {
  subject: NATSubjects.TicketUpdated = NATSubjects.TicketUpdated;
}
