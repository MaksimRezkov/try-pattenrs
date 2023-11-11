/** Интерфейс, который должны реализовать все целевые сущности */
export interface INotification {
  send: (message: string) => void;
}

/** Итерфейс фабрик с фабричным методом, который вернёт инстанс нужного целевого класса
 * (может быть также абстрактный класс, методы которого переопределяют наследники)
 */
export interface INotificationFactory {
  getNotification: () => INotification;
}
