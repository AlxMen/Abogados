# Lawyers

API for Law Firm

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | YES   |      | User Signup              | `name`, `lastName`, `dni`, `phone`, `email`, `password`, `role` | `token`
POST   | /auth/login      | -     |      | User Login               | `email`, `password`                                             | `token`

### Users Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /appointments | YES | admin / user | Get all appointments of lawyer/client |  | `[appointments Object]`
GET    | /notes | YES | admin | Get all notes of lawyer |  | `[notes Object]`
GET    | /apointments/:clientId | YES | admin | Get all appointments of lawyer with one client | `clientId` | `[appointments Object]` 
GET    | /users/clients | YES | admin | Get all clients of lawyer |  | `[clients Object]`
GET    | /notes/:clientId | YES | admin | Get all notes of lawyer with one client | `clientId` | `[notes Object]`  
POST    | /appointments | YES | admin / user | Post one appointment | `date`, `hour`, `modality`, `ambit`, `client`, `lawyer`, `message` | `new appointments Object`
POST    | /notes | YES | admin | Post one note | `text`, `client`, `lawyer` | `new notes Object`
PUT     | /appointments/:appointId | YES | admin | Put one appointment of lawyer | `appointId`, `date`, `hour` | `modified Object`
DELETE  | /appointments/:appointId | YES | admin / user | Delete one appointment | `appointId` | `delete appointment Object`
DELETE  | /notes/:notesId | YES | admin | Delete one note of lawyer | `notesId` | `delete note Object`

## Tools 🛠️

* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [JsonWebToken](https://www.npmjs.com/package/jwt)
* [Express](https://www.npmjs.com/package/express)
* [Cors](https://www.npmjs.com/package/cors)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Authors ✒️

* **Jenifer Cabrera Betancor** - [JeniferCB](https://github.com/JeniferCB)
* **Nicolás Nahuel Faisca Silva** - [NickNahuel23](https://github.com/NickNahuel23)
* **Alejandro José Cruz Santiago** - [AlxMen](https://github.com/AlxMen)
