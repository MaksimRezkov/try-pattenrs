import { INotification } from "../types";

export class WhatsappNotification implements INotification {
  send(message: string) {
    console.log(`send message ${message}`);
  }
}
