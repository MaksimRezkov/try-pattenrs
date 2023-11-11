import { INotification } from "../types";

export class EmailNotification implements INotification {
  send(message: string) {
    console.log(`send message ${message}`);
  }
}
