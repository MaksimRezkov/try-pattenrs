export interface IUser {
  id: number;
  name: string;
}

export interface IUserWithLogin extends IUser {
  login: string;
}

export interface IUserWithPhone extends IUser {
  phone: number;
}

/** Интерфейс сущности, формирующей данные пользователя, которому уходит уведомлние */
export interface IGetUserService<T = IUser> {
  fetchUser: (id: number) => T;
  getUser: (id: number) => T;
}
