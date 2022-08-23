import { Continent } from "./continent.type";
import { Language } from "./language.type";
import { State } from "./state.type";

export type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  capital?: string;
  currency?: string;
  languages: Language[];
  emoji: string;
  emojiU: string;
  states: State[];
};
