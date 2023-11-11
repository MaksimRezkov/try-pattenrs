import { INotification } from "../types";

export class TelegaNotification implements INotification {
  send(message: string) {
    console.log(`send message ${message}`);
  }
}
