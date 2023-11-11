import { INotification } from "../types";

export class DiscordNotification implements INotification {

  send(message: string) {
    console.log(`send message ${message}`);
  }
}
