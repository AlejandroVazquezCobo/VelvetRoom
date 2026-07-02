import mongoose from 'mongoose';

export const ARCANAS = [
  'Fool', 'Magician', 'Priestess', 'Empress', 'Emperor', 'Hierophant', 'Lovers',
  'Chariot', 'Justice', 'Hermit', 'Fortune', 'Strength', 'HangedMan', 'Death',
  'Temperance', 'Devil', 'Tower', 'Star', 'Moon', 'Sun', 'Judgement', 'World',
];

const statsSchema = new mongoose.Schema(
  {
    fuerza: { type: Number, default: 1, min: 1, max: 99 },
    magia: { type: Number, default: 1, min: 1, max: 99 },
    resistencia: { type: Number, default: 1, min: 1, max: 99 },
    agilidad: { type: Number, default: 1, min: 1, max: 99 },
    suerte: { type: Number, default: 1, min: 1, max: 99 },
  },
  { _id: false },
);

const personaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    arcana: { type: String, required: true, enum: ARCANAS },
    nivel: { type: Number, required: true, min: 1, max: 99 },
    stats: { type: statsSchema, default: () => ({}) },
    habilidades: { type: [String], default: [] },
    imagenUrl: { type: String, default: '' },
  },
  { timestamps: true },
);

export default mongoose.model('Persona', personaSchema);
