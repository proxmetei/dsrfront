import { FileInput } from "ngx-material-file-input";

export interface IAnimal
{
  id: number;
  kind:string;
  breed:string;
  name: string;
  img: FileInput;
  // file: File;
  // fd: FormData;
  img_name: String;
  url: string;
  // data: Buffer;
}
