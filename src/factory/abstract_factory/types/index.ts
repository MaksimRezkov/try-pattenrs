/** Интерфейсы, которые должны реализовать все целевые сущности */
import { INotification, INotificationFactory } from "./notification";
import { IGetUserService, IUser, IUserWithLogin, IUserWithPhone } from "./user";

export {
  INotification,
  IGetUserService,
  IUser,
  IUserWithLogin,
  IUserWithPhone,
  INotificationFactory,
};
