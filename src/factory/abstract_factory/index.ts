import {
  DiscordNotificationFactory,
  EmailNotificationFactory,
  WhatsappNotificationFactory,
} from "./factories";
import { IGetUserService, INotification, IUserWithLogin, IUserWithPhone } from "./types";

/** Типа клиентский код */

interface IAppService {
  sendNotification: (userId: number, message: string) => void;
}
class DiscordService implements IAppService {
  private discordFactory: DiscordNotificationFactory;
  private discordNotificationService: INotification;
  private discordUserService: IGetUserService<IUserWithLogin>;

  constructor() {
    this.discordFactory = new DiscordNotificationFactory();
    this.discordNotificationService = this.discordFactory.getNotificationService();
    this.discordUserService = this.discordFactory.getUserService();
  }

  sendNotification(userId: number, message: string) {
    const user = /** await */ this.discordUserService.getUser(userId); // IUserWithPhone
    this.discordNotificationService.send(message, user);
  }
}

class EmailService implements IAppService {
  private emailFactory: EmailNotificationFactory;
  private emailNotificationService: INotification;
  private emailUserService: IGetUserService<IUserWithLogin>;

  constructor() {
    this.emailFactory = new EmailNotificationFactory();
    this.emailNotificationService = this.emailFactory.getNotificationService();
    this.emailUserService = this.emailFactory.getUserService();
  }

  sendNotification(userId: number, message: string) {
    const user = /** await */ this.emailUserService.getUser(userId); // IUserWithPhone
    this.emailNotificationService.send(message, user);
  }
}

class WhatsappService implements IAppService {
  private whatsappFactory: WhatsappNotificationFactory;
  private whatsappNotificationService: INotification;
  private whatsappUserService: IGetUserService<IUserWithPhone>;

  constructor() {
    this.whatsappFactory = new WhatsappNotificationFactory();
    this.whatsappNotificationService = this.whatsappFactory.getNotificationService();
    this.whatsappUserService = this.whatsappFactory.getUserService();
  }

  sendNotification(userId: number, message: string) {
    const user = /** await */ this.whatsappUserService.getUser(userId); // IUserWithPhone
    this.whatsappNotificationService.send(message, user);
  }
}

/** Dependensy inversion */
class AppService implements IAppService {
  constructor(private appService: IAppService) {}

  sendNotification(userId: number, message: string) {
    this.appService.sendNotification(userId, message);
  }
}

const appService = new AppService(new DiscordService()); // new EmailService() new WhatsappService()
appService.sendNotification(Math.floor(Math.random() * 1000), 'Hello');
