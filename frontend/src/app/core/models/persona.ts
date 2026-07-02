export const ARCANAS = [
  'Fool', 'Magician', 'Priestess', 'Empress', 'Emperor', 'Hierophant', 'Lovers',
  'Chariot', 'Justice', 'Hermit', 'Fortune', 'Strength', 'HangedMan', 'Death',
  'Temperance', 'Devil', 'Tower', 'Star', 'Moon', 'Sun', 'Judgement', 'World',
] as const;

export type Arcana = (typeof ARCANAS)[number];

export const ARCANA_LABELS: Record<Arcana, string> = {
  Fool: 'El Loco',
  Magician: 'El Mago',
  Priestess: 'La Sacerdotisa',
  Empress: 'La Emperatriz',
  Emperor: 'El Emperador',
  Hierophant: 'El Hierofante',
  Lovers: 'Los Enamorados',
  Chariot: 'El Carro',
  Justice: 'La Justicia',
  Hermit: 'El Ermitaño',
  Fortune: 'La Rueda de la Fortuna',
  Strength: 'La Fuerza',
  HangedMan: 'El Colgado',
  Death: 'La Muerte',
  Temperance: 'La Templanza',
  Devil: 'El Diablo',
  Tower: 'La Torre',
  Star: 'La Estrella',
  Moon: 'La Luna',
  Sun: 'El Sol',
  Judgement: 'El Juicio',
  World: 'El Mundo',
};

// Emblemas de cada arcano, vía la wiki de Megami Tensei (megamitensei.fandom.com/wiki/Arcana).
export const ARCANA_IMAGES: Record<Arcana, string> = {
  Fool: 'https://static.wikia.nocookie.net/megamitensei/images/5/53/Fool-0.png/revision/latest?cb=20160404201043',
  Magician: 'https://static.wikia.nocookie.net/megamitensei/images/c/cb/Magician-0.png/revision/latest?cb=20160404201629',
  Priestess: 'https://static.wikia.nocookie.net/megamitensei/images/a/ad/Priestess-0.png/revision/latest?cb=20160404201724',
  Empress: 'https://static.wikia.nocookie.net/megamitensei/images/6/63/Empress-0.png/revision/latest?cb=20160404201807',
  Emperor: 'https://static.wikia.nocookie.net/megamitensei/images/e/e6/Emperor-0.png/revision/latest?cb=20160404201848',
  Hierophant: 'https://static.wikia.nocookie.net/megamitensei/images/f/f6/Hierophant-0.png/revision/latest?cb=20160404201947',
  Lovers: 'https://static.wikia.nocookie.net/megamitensei/images/a/a5/Lovers-0.png/revision/latest?cb=20160404202019',
  Chariot: 'https://static.wikia.nocookie.net/megamitensei/images/1/15/Chariot-0.png/revision/latest?cb=20160404202048',
  Justice: 'https://static.wikia.nocookie.net/megamitensei/images/8/83/Justice-0.png/revision/latest?cb=20160404202153',
  Hermit: 'https://static.wikia.nocookie.net/megamitensei/images/a/ab/Hermit-0.png/revision/latest?cb=20160404202218',
  Fortune: 'https://static.wikia.nocookie.net/megamitensei/images/f/f3/Fortune-0.png/revision/latest?cb=20160404202245',
  Strength: 'https://static.wikia.nocookie.net/megamitensei/images/b/b0/Strength-0.png/revision/latest?cb=20160404202121',
  HangedMan: 'https://static.wikia.nocookie.net/megamitensei/images/2/2f/Hanged_Man.png/revision/latest?cb=20160404202318',
  Death: 'https://static.wikia.nocookie.net/megamitensei/images/d/df/Death-0.png/revision/latest?cb=20160404202413',
  Temperance: 'https://static.wikia.nocookie.net/megamitensei/images/2/2d/Temperance-0.png/revision/latest?cb=20160404202449',
  Devil: 'https://static.wikia.nocookie.net/megamitensei/images/4/4b/Devil-0.png/revision/latest?cb=20160404202521',
  Tower: 'https://static.wikia.nocookie.net/megamitensei/images/1/1f/Tower-0.png/revision/latest?cb=20160404202557',
  Star: 'https://static.wikia.nocookie.net/megamitensei/images/1/15/Star-0.png/revision/latest?cb=20160404202628',
  Moon: 'https://static.wikia.nocookie.net/megamitensei/images/c/ce/Moon-0.png/revision/latest?cb=20160404202708',
  Sun: 'https://static.wikia.nocookie.net/megamitensei/images/f/ff/Sun-0.png/revision/latest?cb=20160404202738',
  Judgement: 'https://static.wikia.nocookie.net/megamitensei/images/b/b0/Judgement.png/revision/latest?cb=20160404202809',
  World: 'https://static.wikia.nocookie.net/megamitensei/images/a/a9/World-0.png/revision/latest?cb=20160404202908',
};

export interface PersonaStats {
  fuerza: number;
  magia: number;
  resistencia: number;
  agilidad: number;
  suerte: number;
}

export interface Persona {
  _id: string;
  nombre: string;
  arcana: Arcana;
  nivel: number;
  stats: PersonaStats;
  habilidades: string[];
  imagenUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type PersonaInput = Omit<Persona, '_id' | 'createdAt' | 'updatedAt'>;
