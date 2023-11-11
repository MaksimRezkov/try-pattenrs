import { TelegaNotification } from "../entityes";
import { INotificationFactory } from "../types";

export class TelegaNotificationFactory implements INotificationFactory {
  getNotification() {
    return new TelegaNotification();
  }
}
