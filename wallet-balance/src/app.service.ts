import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(@InjectConnection() private readonly knex: Knex) {}

  async getBalance(
    accountId: string,
  ): Promise<{ account_id: string; balance: number; last_modified_at: Date }> {
    const result = await this.knex
      .select()
      .from('accounts')
      .where({ id: accountId });

    if (result.length === 0) throw new NotFoundException();

    return {
      account_id: result[0].id,
      balance: result[0].balance,
      last_modified_at: new Date(result[0].last_modified_at),
    };
  }

  async saveBalance(data: {
    accountId: string;
    balance: number;
  }): Promise<void> {
    await this.knex('accounts')
      .insert({
        id: data.accountId,
        balance: data.balance,
        last_modified_at: new Date(),
      })
      .onConflict(['id'])
      .merge();
  }
}
