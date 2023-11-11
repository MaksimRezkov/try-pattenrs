/** классы, создающие конкретные целевые объекты.
 * Реализуется только создание инстансов с нужными даннми и интерфейсом
 */
import { DiscordNotification } from "./Discord";
import { EmailNotification } from "./Email";
import { TelegaNotification } from "./Telega";
import { WhatsappNotification } from "./Whatsapp";

export {
  DiscordNotification,
  EmailNotification,
  TelegaNotification,
  WhatsappNotification,
};
