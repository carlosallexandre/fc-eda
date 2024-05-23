import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

interface BalanceIncomingMessage {
  Name: 'BalanceUpdated';
  Payload: {
    account_id_from: string;
    balance_account_id_from: number;
    account_id_to: string;
    balance_account_id_to: number;
  };
}

@Controller()
export class KafkaController {
  private logger = new Logger(KafkaController.name);

  constructor(private readonly service: AppService) {}

  @EventPattern('balances')
  async handleBalance(@Payload() message: BalanceIncomingMessage) {
    this.logger.debug({ message: 'Consuming event from Kafka' });

    await Promise.all([
      this.service.saveBalance({
        accountId: message.Payload.account_id_from,
        balance: message.Payload.balance_account_id_from,
      }),
      this.service.saveBalance({
        accountId: message.Payload.account_id_to,
        balance: message.Payload.balance_account_id_to,
      }),
    ]);
  }
}
