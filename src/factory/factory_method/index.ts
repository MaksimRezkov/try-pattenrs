import { DiscordNotificationFactory, EmailNotificationFactory, TelegaNotificationFactory, WhatsappNotificationFactory } from "./factories";

enum NotificationTypes {
  email = 'email',
  whatsapp = 'whatsapp',
  discord = 'discord',
  telega = 'telega',
}

/** Класс для создания нужной фабрики, инкапсулирует выбор по указанному типу */
class NotificationFactorySelector {
  /** Возвращает нужную фабрику */
  getFactory(notificationType: NotificationTypes) {
    if (notificationType === NotificationTypes.discord) return new DiscordNotificationFactory() ;
    if (notificationType === NotificationTypes.email) return new EmailNotificationFactory();
    if (notificationType === NotificationTypes.whatsapp) return new WhatsappNotificationFactory();
    if (notificationType === NotificationTypes.telega) return new TelegaNotificationFactory();
  };
}

/** Типа клиентский код */
const notificationFactorySelector = new NotificationFactorySelector();

const discordNotificationFactory = notificationFactorySelector.getFactory(NotificationTypes.discord);
const discordNotification = discordNotificationFactory.getNotification();
discordNotification.send('alolololo');
