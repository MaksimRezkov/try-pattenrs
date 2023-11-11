import { IGetUserService, INotification, INotificationFactory, IUserWithLogin } from "../types";
import {
  EmailNotificationService,
  EmailUserService,
} from "../entityes/";

export class EmailNotificationFactory implements INotificationFactory<IUserWithLogin> {
  getNotificationService(): INotification<IUserWithLogin> {
    return new EmailNotificationService();
  }

  getUserService(): IGetUserService<IUserWithLogin> {
    return new EmailUserService();
  }
}
