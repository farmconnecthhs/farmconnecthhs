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