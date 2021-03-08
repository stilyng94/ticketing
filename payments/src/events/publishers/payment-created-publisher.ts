import {
  BasePublisher,
  IPaymentCreatedEvent,
  NATSubjects,
} from "@lotus_yng_dev_tickets/common";

export class PaymentCreatedPublisher extends BasePublisher<IPaymentCreatedEvent> {
  subject: NATSubjects.PaymentCreated = NATSubjects.PaymentCreated;
}
