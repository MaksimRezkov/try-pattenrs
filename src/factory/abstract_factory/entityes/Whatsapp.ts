import { IGetUserService, IUserWithPhone, INotification } from "../types";

/** Класс сущности, отправляющей уведолмения в дискорде */
export class WhatsappNotificationService implements INotification<IUserWithPhone> {

  send(message: string, user: IUserWithPhone) {
    const phoneNumber = `phoneNumber by ${user.phone}`
    console.log(`send message ${message} to ${user.name} ${phoneNumber}`);
  }
}

/** Класс сущности, формирующей данные пользователя дискорд */
export class WhatsappUserService implements IGetUserService<IUserWithPhone> {
  fetchUser(id: number) {
    /** some fetching user for disc */
    return {
      id,
      name: 'Whatsapp user',
      phone: Math.floor(Math.random() * 100000),
    }
  };

  getUser(id: number) {
    return this.fetchUser(id);
  }
}
