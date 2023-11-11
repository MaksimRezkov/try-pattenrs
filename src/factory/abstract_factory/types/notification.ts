import { IGetUserService, IUser } from "./user";

/** Интерфейс сущности, отправляющей уведомления */
export interface INotification<T = IUser> {
  send: (message: string, user: T) => void;
}

/** Интерфейс фабрики для формирования уведомления
 * (может быть абстрактный класс, от которого наследуют конкретные фабрики
 * и переопределяют методы)
 * @type T - определяет, какой сервис будет возвращать getUserService и соотв-но,
 * с какими типами юзеров этот сервис будет работать
 */
export interface INotificationFactory<T = IUser> {
  getNotificationService: () => INotification<T>;
  getUserService: () => IGetUserService<T>;
}
