import { Controller, Get, Logger, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/balances')
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getBalance(
    @Param('id') accountId: string,
  ): Promise<{ account_id: string; balance: number }> {
    return this.appService.getBalance(accountId);
  }
}
