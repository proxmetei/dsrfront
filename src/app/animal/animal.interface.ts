import { FileInput } from "ngx-material-file-input";
import {IDocument} from '../document/document.interface';
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
  document: IDocument; 
  userId: number;
  myId: number;
}
