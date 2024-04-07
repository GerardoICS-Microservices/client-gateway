import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthcheckController {
  @Get()
  healthcheck() {
    return 'Client Gateway is up and running!';
  }
}
