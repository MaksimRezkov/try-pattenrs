import { EmailNotification } from "../entityes";
import { INotificationFactory } from "../types";

export class EmailNotificationFactory implements INotificationFactory {
  getNotification() {
    return new EmailNotification();
  }
}
