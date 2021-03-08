import {
  BasePublisher,
  IExpirationCompleteEvent,
  NATSubjects,
} from "@lotus_yng_dev_tickets/common";

export class ExpirationCompletePublisher extends BasePublisher<IExpirationCompleteEvent> {
  subject: NATSubjects.ExpirationCompleted = NATSubjects.ExpirationCompleted;
}
