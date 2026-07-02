import Persona from '../models/persona.model.js';

export async function listarPersonas(req, res) {
  try {
    const filtro = {};
    if (req.query.arcana) filtro.arcana = req.query.arcana;

    const personas = await Persona.find(filtro).sort({ arcana: 1, nivel: 1 });
    res.json(personas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function obtenerPersona(req, res) {
  try {
    const persona = await Persona.findById(req.params.id);
    if (!persona) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json(persona);
  } catch (err) {
    res.status(400).json({ error: 'id inválido' });
  }
}

export async function crearPersona(req, res) {
  try {
    const persona = await Persona.create(req.body);
    res.status(201).json(persona);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function actualizarPersona(req, res) {
  try {
    const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!persona) return res.status(404).json({ error: 'Persona no encontrada' });
    res.json(persona);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function borrarPersona(req, res) {
  try {
    const persona = await Persona.findByIdAndDelete(req.params.id);
    if (!persona) return res.status(404).json({ error: 'Persona no encontrada' });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'id inválido' });
  }
}
