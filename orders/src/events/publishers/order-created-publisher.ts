import {
  BasePublisher,
  NATSubjects,
  IOrderCreatedEvent,
} from "@lotus_yng_dev_tickets/common";

export class OrderCreatedPublisher extends BasePublisher<IOrderCreatedEvent> {
  subject: NATSubjects.OrderCreated = NATSubjects.OrderCreated;
}
