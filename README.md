# Abogados

api para despacho de abogados

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | YES   |      | User Signup              | `name`, `lastName`, `dni`, `phone`, `email`, `password`, `role` | `token`
POST   | /auth/login      | -     |      | User Login               | `email`, `password`                                             | `token`

### Users Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /appointments | YES | admin / user | Get all citas of lawyer/client | - |
GET    | /notes | YES | admin | Get all notas of lawyer | - |
GET    | /apointments/:clientId | YES | admin | Get all citas of lawyer with one client | - | `appointId` 
GET    | /users/clients | YES | admin | Get all clients of lawyer | - |
GET    | /notes/:clientId | YES | admin | Get all notas of lawyer with one client | - | `appointId` 
POST    | /appointments | YES | admin / user | Post one cita | - |
POST    | /notes | YES | admin | Post one note | - |
PUT     | /appointments/:appointId | YES | admin | Put one cita of lawyer | - | `appointId`
DELETE  | /appointments/:appointId | YES | admin / user | Delete one cita | - | `appointId`
DELETE  | /notes/:notesId | YES | admin | Delete one nota of lawyer | - | `notesId`

## Tools 🛠️

* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Morgan](https://www.npmjs.com/package/morgan)

## Authors ✒️

* **Jenifer Cabrera Betancor** - [JeniferCB](https://github.com/JeniferCB)
* **Nicolás Nahuel Faisca Silva** - [NickNahuel23](https://github.com/NickNahuel23)
* **Alejandro José Cruz Santiago** - [AlxMen](https://github.com/AlxMen)
