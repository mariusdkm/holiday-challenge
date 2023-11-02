# [holiday.unexcellent.com](https://holiday.unexcellent.com)

Meine Einreichung für die Check24 GenDev Holiday Challenge


## Installation (ohne Docker)
```bash
# Install dependencies
npm ci
npm run build
```

## Datenbank aufsetzen
1. `.env` Datei nach dem `.env.example` erstellen
2. `npx prisma migrate dev --name init` ausführen
3. Die SQL Befehle in `prisma/import_offers.sql` ausführen


## Starten (ohne Docker)
```bash
# Start the server
node build
```


## Installation (mit Docker)
```bash
# Build the image
docker build -t holiday .
```

## Datenbank aufsetzen
1. `.env` Datei nach dem `.env.example` erstellen
2. Mit dem Docker Compose die Postgresql datenbank starten
   `docker compose up db -d`
3. `npx prisma migrate dev --name init` ausführen
4. Die SQL Befehle in `prisma/import_offers.sql` ausführen


## Starten (mit Docker)
```bash
# Start the container
docker run -p 3000:3000 holiday
```
Dann im Browser [http://localhost:3000](http://localhost:3000) öffnen.
