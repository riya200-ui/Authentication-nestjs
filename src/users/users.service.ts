import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'riya',
      email: 'riyapanchal@gmail.com',
      password: 'riyaaa',
    },
    {
      id: 2,
      username: 'dev',
      email: 'devp@gmail.com',
      password: 'dev123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
