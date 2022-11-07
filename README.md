# Abogados

api para despacho de abogados

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | YES   |      | User Signup              | `name`, `lastName`, `dni`, `phone`, `email`, `password`, `role`, `admininfo`, `citas` | `token`
POST   | /auth/login      | -     |      | User Login               | `email`, `password`                                                                   | `token`

### Users Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /users/:id/citas | YES | admin / user | Get all citas of lawyer/client | - | `id`
GET    | /users/:id/notas | YES | admin | Get all notas of lawyer | - | `id`
GET    | /users/:id/citas/:clienteId | YES | admin | Get all citas of lawyer with one client | - | `id`, `clientId` 
GET    | /users/:id/clientes | YES | admin | Get all clients of lawyer | - | `id` 
GET    | /users/:id/notas/:clienteId | YES | admin | Get all notas of lawyer with one client | - | `id`, `clientId` 
POST    | /users/:id/citas | YES | admin / user | Post one cita | - | `id`
POST    | /users/:id/notas | YES | admin | Post one note | - | `id`
PUT     | /users/:id/citas/:citaId | YES | admin | Put one cita of lawyer | - | `id` ,`citaId`
DELETE  | /users/:id/citas/:citaId | YES | admin / user | Delete one cita | - | `id` ,`citaId`
DELETE  | /users/:id/notas/:notaId | YES | admin | Delete one nota of lawyer | - | `id` ,`notaId`

## Tools 🛠️

* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Morgan](https://www.npmjs.com/package/morgan)

## Authors ✒️

* **Jenifer Cabrera Betancor** - [JeniferCB](https://github.com/JeniferCB)
* **Nicolás Nahuel Faisca Silva** - [NickNahuel23](https://github.com/NickNahuel23)
* **Alejandro José Cruz Santiago** - [AlxMen](https://github.com/AlxMen)
