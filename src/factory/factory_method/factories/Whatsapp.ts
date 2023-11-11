import { WhatsappNotification } from "../entityes";
import { INotificationFactory } from "../types";

export class WhatsappNotificationFactory implements INotificationFactory {
  getNotification() {
    return new WhatsappNotification();
  }
}
