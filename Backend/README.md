# Development omgeving opzetten


- vul de .env.example in (te vinden in de backend map) en hernoem deze naar .env
- navigeer naar de backend map in de terminal
- npm install
- npm run dev om de server te starten op localhost:3000 (nodemon) changes worden automatisch herladen


# Applicatiestructuur

De hoofdmap van de backend bevat de volgende mappen:
- db: bevat de sequelize configuratie en de modellen
- api: bevat de api routes en controllers

## Database
```text
├───Associations
├───config
├───models
└───modules
    ├───posts
    │   ├───dal
    │   ├───models
    │   └───services
    └───users
        ├───dal
        ├───models
        └───services
```

## API
```text
├───core
├───posts
│   ├───controllers
│   ├───dto
│   ├───interfaces
│   └───routes
├───routes
└───users
    ├───controllers
    ├───dto
    ├───interfaces
    └───routes

```

# API layers

1. Route: Een route in een REST API bepaalt welke actie moet worden uitgevoerd op basis van het HTTP-verzoek dat door de client wordt verzonden. Een route wordt gedefinieerd als een URL met een HTTP-methode (GET, POST, PUT, DELETE, enzovoort). Bijvoorbeeld, een route "/users" kan worden gebruikt om alle gebruikers op te halen met een GET-verzoek, of om een nieuwe gebruiker aan te maken met een POST-verzoek.

```ts
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/users', UserController.createUser);
router.get('/users/:userId', UserController.getUser);

module.exports = router;
```

2. Service: Een service in een REST API bevat de logica om de vereiste acties uit te voeren voor de verschillende verzoeken die via de routes binnenkomen. Het is verantwoordelijk voor de verwerking van gegevens, het valideren van invoer en het retourneren van de resultaten. De service fungeert als een tussenlaag tussen de controller en de DAL en zorgt voor de scheiding van verantwoordelijkheden tussen deze lagen.
```ts
// UserService.js

const UserDAL = require('../dal/UserDAL');

class UserService {
  static async createUser(name, email, password) {
    // Validate user input
    // Hash password
    // Create user in database using UserDAL
    const newUser = await UserDAL.createUser(name, email, hashedPassword);
    return newUser;
  }

  static async getUser(userId) {
    // Get user from database using UserDAL
    const user = await UserDAL.getUser(userId);
    return user;
  }
}

module.exports = UserService;
```
3. Data Access Layer (DAL): Een DAL in een REST API is verantwoordelijk voor het beheren van de communicatie met de database of externe gegevensbronnen. Het bevat logica voor het uitvoeren van CRUD-operaties (Create, Read, Update en Delete) op de gegevens en biedt een abstractie van de database-implementatie. De DAL is verantwoordelijk voor het opslaan en ophalen van gegevens van en naar de database.
```ts
//Onze dal maakt gebruik van sequelize V6
import {User} from "../models/User";
import {UserCreationAttributes} from "../models/User";

export const create = async (payload: UserCreationAttributes): Promise<User> => {
    return await User.create(payload);
}
```
4. Controller: Een controller in een REST API ontvangt de inkomende HTTP-verzoeken van de client en verwerkt deze door de juiste service methode aan te roepen op basis van de route die wordt aangeroepen. De controller is verantwoordelijk voor het afhandelen van de HTTP-verzoeken en het retourneren van de juiste HTTP-statuscodes aan de client.
```ts
// UserController.js

const UserService = require('../services/UserService');

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = await UserService.createUser(name, email, password);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating user' });
    }
  }

  static async getUser(req, res) {
    try {
      const { userId } = req.params;
      const user = await UserService.getUser(userId);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error getting user' });
    }
  }
}

module.exports = UserController;
```
In een REST API werken deze componenten samen om de functionaliteit van de API te bieden. De controller ontvangt het inkomende HTTP-verzoek en routeert deze naar de juiste service methode op basis van de URL-route. De service verwerkt vervolgens het verzoek en roept indien nodig de DAL aan om de gegevens te manipuleren. Wanneer de bewerking is voltooid, retourneert de service het resultaat aan de controller, die de juiste HTTP-statuscode retourneert aan de client.

# DTO's
In een REST API staat DTO voor Data Transfer Object. Het is een object dat wordt gebruikt om gegevens tussen verschillende lagen van de applicatie over te dragen zonder de interne structuur van de objecten bloot te leggen.

Een DTO bevat alleen de relevante gegevens die nodig zijn voor een specifieke actie of taak. Het kan bijvoorbeeld worden gebruikt om gegevens van een client naar de server te verzenden, of om gegevens van de server naar de client te verzenden. Door alleen de benodigde gegevens te verzenden, kan de DTO de grootte van de overgedragen gegevens beperken en de prestaties van de API verbeteren.

DTO's worden vaak gebruikt om de gegevens van een entity model te transformeren naar een ander formaat of een subset van de gegevens te selecteren. Bijvoorbeeld, als een client een lijst van gebruikers opvraagt, kan de server een DTO gebruiken om alleen de naam en e-mail van de gebruikers terug te sturen in plaats van de volledige gebruikersobjecten.

Het gebruik van DTO's kan ook de veiligheid van de applicatie verbeteren, omdat het de interne structuur van de objecten verborgen houdt en voorkomt dat ongewenste gegevens worden blootgesteld aan de client.

```ts
// UserDTO.js
import { Optional} from "sequelize";

// DTO's voor het aanmaken van een gebruiker
export type CreateUserDTO = {
    username: string;
    displayname: string;
    email: string;
}
// DTO's voor het updaten van een gebruiker
export type UpdateUserDTO = Optional<CreateUserDTO, 'email'>

// DTO's voor het filteren van gebruikers
export type FilterUserDTO = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}
```

# Links naar relevante docs
[https://sequelize.org/docs/v6/other-topics/typescript/](https://sequelize.org/docs/v6/other-topics/typescript/)

# Server vs Client components
https://beta.nextjs.org/docs/rendering/server-and-client-components
