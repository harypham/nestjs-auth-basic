import { Module } from '@nestjs/common';
import { StatefulController } from './stateful.controller';
import { StatefulService } from './stateful.service';

@Module({
  controllers: [StatefulController],
  providers: [StatefulService]
})
export class StatefulModule {}
