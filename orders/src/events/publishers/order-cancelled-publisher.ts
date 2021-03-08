import {
  BasePublisher,
  NATSubjects,
  IOrderCreatedCancelledEvent,
} from "@lotus_yng_dev_tickets/common";

export class OrderCancelledPublisher extends BasePublisher<IOrderCreatedCancelledEvent> {
  subject: NATSubjects.OrderCancelled = NATSubjects.OrderCancelled;
}
