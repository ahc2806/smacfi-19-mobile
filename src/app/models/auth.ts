import User from './user';

export default interface Auth {
  jwt: string;
  user: User;
}