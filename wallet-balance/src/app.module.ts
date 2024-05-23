import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaController } from './kafka.controller';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        connection: {
          host: 'balance-db',
          user: 'root',
          password: 'root',
          database: 'wallet',
        },
      },
    }),
  ],
  controllers: [AppController, KafkaController],
  providers: [AppService],
})
export class AppModule {}
