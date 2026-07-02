# Velvet Compendium

Mini-proyecto de formación front: compendio de Personas (universo Atlus/Sega) al estilo Velvet Room, con menús inspirados en Persona 5 Royale / Persona 3 Reload.

## Estructura

- `backend/` — API REST (Node.js + Express + MongoDB/Mongoose)
- `frontend/` — Angular (pendiente)
- `docker-compose.yml` — levanta MongoDB en local

## Arranque

```bash
# 1. Base de datos
docker compose up -d

# 2. Backend
cd backend
npm install
npm run seed   # carga Personas de ejemplo (solo hace falta una vez, o cuando quieras resetear datos)
npm run dev    # http://localhost:3000

# 3. Frontend (pendiente)
cd frontend
npm install
ng serve       # http://localhost:4200
```

## API

Base: `http://localhost:3000/api/personas`

| Método | Ruta              | Descripción                          |
|--------|-------------------|---------------------------------------|
| GET    | `/`                | Lista todas las Personas (`?arcana=X` filtra) |
| GET    | `/:id`             | Una Persona por id                    |
| POST   | `/`                | Crea una Persona                      |
| PUT    | `/:id`             | Actualiza una Persona                 |
| DELETE | `/:id`             | Borra una Persona                     |
