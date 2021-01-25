import { Iproperty } from './iproperty';

export class Property implements Iproperty {
  Id: number;
  CzyAdoptowany: number;
  Nazwa: string;
  Plec: string;
  Wiek: string;
  Opiekun?: string;
  StanZdrowia?: string;
  StanAdopcji?: string;
  Opis?: string;
  Dodano?: string;
}
