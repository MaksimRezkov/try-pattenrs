/** Фабрики, возвращающие инстанс нужного класса.
 * В фабриках может быть какая-нибудь доп логика, формирование и получение доп. данных для целевых классов
 */
import { DiscordNotificationFactory } from "./Discord";
import { EmailNotificationFactory } from "./Email";
import { TelegaNotificationFactory } from "./Telega";
import { WhatsappNotificationFactory } from "./Whatsapp";

export {
  DiscordNotificationFactory,
  EmailNotificationFactory,
  TelegaNotificationFactory,
  WhatsappNotificationFactory,
};
