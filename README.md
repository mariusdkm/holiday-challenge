# [holiday.bahnvorhersage.de](https://holiday.bahnvorhersage.de)

Meine Einreichung für die Check24 GenDev Holiday Challenge


## Installation (ohne Docker)
```bash
# Install dependencies
npm ci
npm run build
```

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

## Starten (mit Docker)
```bash
# Start the container
docker run -p 3000:3000 holiday
```
Dann im Browser [http://localhost:3000](http://localhost:3000) öffnen.
