import { Module } from '@nestjs/common';
import { DiscService } from './disc.service';
import { PowerModule } from '../power/power.module';

@Module({
  providers: [DiscService],
  imports: [PowerModule],
  exports: [DiscService],
})
export class DiscModule {}
