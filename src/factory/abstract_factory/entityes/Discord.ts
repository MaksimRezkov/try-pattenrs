import { IGetUserService, IUserWithLogin, INotification } from "../types";

/** Класс сущности, отправляющей уведолмения в дискорде */
export class DiscordNotificationService implements INotification<IUserWithLogin> {

  send(message: string, user: IUserWithLogin) {
    const url = `url by ${user.login}`
    console.log(`send message ${message} to ${user.name} ${url}`);
  }
}

/** Класс сущности, формирующей данные пользователя дискорд */
export class DiscordUserService implements IGetUserService<IUserWithLogin> {
  fetchUser(id: number) {
    /** some fetching user for disc */
    return {
      id,
      name: 'discord user',
      login: 'discordUserLogin'
    }
  };

  getUser(id: number) {
    return this.fetchUser(id);
  }
}
