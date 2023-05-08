import { Module } from '@nestjs/common';
import { StatelessController } from './stateless.controller';
import { StatelessService } from './stateless.service';

@Module({
  controllers: [StatelessController],
  providers: [StatelessService]
})
export class StatelessModule {}
