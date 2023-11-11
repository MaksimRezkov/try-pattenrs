import { DiscordNotificationFactory } from "./Discord";
import { EmailNotificationFactory } from "./Email";
import { WhatsappNotificationFactory } from "./Whatsapp";

/** Фабрики инкапсулируют работу с сервисами Юзеров и уведомлений.
 * Фабрики объединяют сервисы по приложениям - Дискорд, Телега и тд.
 */
export {
  DiscordNotificationFactory,
  EmailNotificationFactory,
  WhatsappNotificationFactory,
};
