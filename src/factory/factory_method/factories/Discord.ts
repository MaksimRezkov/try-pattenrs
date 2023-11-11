import { DiscordNotification } from "../entityes";
import { INotificationFactory } from "../types";

export class DiscordNotificationFactory implements INotificationFactory {
  getNotification() {
    return new DiscordNotification();
  }
}
