import { IAnimal } from '../animal/animal.interface';
export interface IUser
{
  login?: string;
  email?:string;
  password?: string;
  name?: string;
  phone?: string;
  animals?: IAnimal;
  noteId?: number;
}
