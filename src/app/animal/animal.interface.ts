import { FileInput } from "ngx-material-file-input";

export interface IAnimal
{
  id: number;
  kind:string;
  breed:string;
  name: string;
  img: FileInput;
}
