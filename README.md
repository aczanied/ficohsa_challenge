
# Ficohsa Challenge

Ficosha Challenge, es una prueba de codigo para medir aptitudes del candidato a Backend Developer Node.
A continuación se detalla una guía para la descarga y evaluacion del reto.


## Tech Stack

**Server:** Node, Express, Mongo DB

**Cloud:** Azure WebApps, CI/CD 


## Demo

https://ficohsachallenge.azurewebsites.net/


## Ejecutar en Local.

Clonar el proyecto

```bash
  git clone https://github.com/aczanied/ficohsa_challenge.git
```

Ir al directorio del proyecto descargado.

```bash
  cd my-project
```

Instalar las dependencias

```bash
  npm install
```

Se recomienda utilizar nodemon para la ejecucion del proyecto, en caso de no tener instalado
ejectutar el siguiente comando:

```bash
  npm i -g nodemon
```
Ejecutar el Servidor

```bash
  nodemon app
```


## Ejecutar las pruebas

Se utiliza Jest para el entorno de pruebas. 
Para ejecutar las pruebas, ejecutar el siguiente comando:

```bash
npm test
```

Si desea revisar la cobertura de pruebas, puede ejecutar el siguiente comando:

```bash
npx jest --coverage
```
## Documentacion de las APIs

#### Validar Mutante

```http
  POST /api/mutant/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `dna` | `string[]` | **Required**. Cadena de ADN para verificar si es mutante. |

#### Estadisticas de Mutante

```http
  GET /api/stats/
```
Devuelve el listado de ADN evaluados o no como mutantes.


## Feedback

Gracias por la revisión, si tiene alguna sugerencia no dude en enviarla a  aczanied@outlook.com


## Liceciamiento

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

