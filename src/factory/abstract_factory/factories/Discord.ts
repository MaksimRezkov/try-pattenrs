import { IGetUserService, INotification, INotificationFactory, IUserWithLogin } from "../types";
import {
  DiscordNotificationService,
  DiscordUserService,
} from "../entityes/";

export class DiscordNotificationFactory implements INotificationFactory<IUserWithLogin> {
  getNotificationService(): INotification<IUserWithLogin> {
    return new DiscordNotificationService();
  }

  getUserService(): IGetUserService<IUserWithLogin> {
    return new DiscordUserService();
  }
}
