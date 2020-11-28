import { Iproperty } from './iproperty';

export class Property implements Iproperty {
  Id: number;
  CzyAdoptowany: number;
  Nazwa: string;
  Pleć: string;
  Wiek: string;
  Opiekun?: string;
  StanZdrowia?: string;
  StanAdopcji?: string;
  Opis?: string;
  Dodano?: string;
}
