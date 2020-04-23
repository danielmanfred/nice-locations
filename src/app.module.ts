import { Module } from '@nestjs/common';
import { LocationController } from './location/location.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';

@Module({
  imports: [LocationModule],
  controllers: [LocationController],
  providers: [AppService],
})
export class AppModule {}
