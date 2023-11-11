import { IGetUserService, INotification, INotificationFactory, IUserWithPhone } from "../types";
import {
  WhatsappNotificationService,
  WhatsappUserService,
} from "../entityes/";

export class WhatsappNotificationFactory implements INotificationFactory<IUserWithPhone> {
  getNotificationService(): INotification<IUserWithPhone> {
    return new WhatsappNotificationService();
  }

  getUserService(): IGetUserService<IUserWithPhone> {
    return new WhatsappUserService();
  }
}
