import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService
  ) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Render('home')
  @Get()
  getHomePage() {

    // return { message: 'Hello world!' };
  }

  @Render('login')
  @Get('/login')
  getLoginPage() {
    // return { message: 'Hello world!' };
  }

  @Render('user')
  @Get('/user')
  async getUserPage() {
    const usersList = await this.usersService.findAll();
    return { users: usersList };
  }
}
