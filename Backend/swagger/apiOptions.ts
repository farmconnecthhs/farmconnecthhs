export const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FarmConnect API',
      description: 'An API for FarmConnect.',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3001/api/v1',
        description: 'Local FarmConnect server.',
      },
    ],
    paths: {
      '/users': {
        get: {
          summary: 'Get all users',
          operationId: 'getAllUsers',
          tags: ['users'],
          responses: {
            '200': {
              description: 'A list of users was successfully retrieved',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
            '400': {
              $ref: '#/components/responses/BadRequest',
            },
            '401': {
              $ref: '#/components/responses/Unauthorized',
            },
            '403': {
              $ref: '#/components/responses/Forbidden',
            },
            '404': {
              $ref: '#/components/responses/NotFound',
            },
            '500': {
              $ref: '#/components/responses/InternalServerError',
            },
          },
        },
        post: {
          summary: 'Create a user',
          operationId: 'createUser',
          tags: ['users'],
          requestBody: {
            description: 'User object that needs to be added',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Created an User object',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            '400': {
              $ref: '#/components/responses/BadRequest',
            },
            '401': {
              $ref: '#/components/responses/Unauthorized',
            },
            '403': {
              $ref: '#/components/responses/Forbidden',
            },
            '404': {
              $ref: '#/components/responses/NotFound',
            },
            '500': {
              $ref: '#/components/responses/InternalServerError',
            },
          },
        },
        put: {
          summary: 'Update a user',
          operationId: 'updateUser',
          tags: ['users'],
          requestBody: {
            description: 'User object that needs to be updated',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Updated an User object',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            '400': {
              $ref: '#/components/responses/BadRequest',
            },
            '401': {
              $ref: '#/components/responses/Unauthorized',
            },
            '403': {
              $ref: '#/components/responses/Forbidden',
            },
            '404': {
              $ref: '#/components/responses/NotFound',
            },
            '500': {
              $ref: '#/components/responses/InternalServerError',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int64',
              example: 1,
            },
            username: {
              type: 'string',
              example: 'Jane Doe',
            },
            firstName: {
              type: 'string',
              example: 'Jane',
            },
            lastName: {
              type: 'string',
              example: 'Doe',
            },
            email: {
              type: 'string',
              example: 'janedoe@example.com',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'password',
            },
            phone: {
              type: 'integer',
              format: 'int64',
              example: 1234567890,
            },
            userStatus: {
              type: 'integer',
              description: 'User Status',
              format: 'int32',
              example: 1,
              enum: [1, 2, 3],
            },
          },
        },
        Farm: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int64',
              example: 1,
            },
            name: {
              type: 'string',
              example: 'Boerderij de Koe',
            },
            email: {
              type: 'string',
              example: 'boerdekoe@example.com',
            },
            phone: {
              type: 'integer',
              format: 'int64',
              example: 1234567890,
            },
          },
        },
        FarmProfile: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int64',
              example: 1,
            },
            thumbnail: {
              type: 'string',
              example: 'https://via.placeholder.com/150',
            },
            address: {
              type: 'string',
              example: 'De Dam 1',
            },
            postalCode: {
              type: 'string',
              example: '1234 AB',
            },
            city: {
              type: 'string',
              example: 'Amsterdam',
            },
            farmDescription: {
              type: 'string',
              example:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            productDescription: {
              type: 'string',
              example:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            email: {
              type: 'string',
              example: 'info@boerderijdekoe.nl',
            },
            website: {
              type: 'string',
              example: 'https://www.boerderijdekoe.nl',
            },
            phone: {
              type: 'integer',
              format: 'int64',
              example: 1234567890,
            },
          },
        },
        logger: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              format: 'int64',
              example: 1,
            },
            date: {
              type: 'string',
              example: '2020-12-31T00:00:00.000Z',
            },
            serviceName: {
              type: 'string',
              example: 'Backend API',
            },
            level: {
              type: 'string',
              example: 'INFO',
            },
            message: {
              type: 'string',
              example: 'This is a log message',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          required: ['code', 'message'],
          properties: {
            code: {
              type: 'integer',
              format: 'int32',
              example: 400,
            },
            message: {
              type: 'string',
              example: 'Bad Request',
            },
          },
        },
      },
      responses: {
        Success: {
          description: 'The operation was successful',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  code: {
                    type: 'integer',
                    format: 'int32',
                    example: 200,
                  },
                  message: {
                    type: 'string',
                    example: 'Success',
                  },
                },
              },
            },
          },
        },
        BadRequest: {
          description: 'The request is malformed or invalid',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
        Unauthorized: {
          description:
            'Authentication is required or the provided credentials are invalid',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
        Forbidden: {
          description:
            'The user does not have the necessary permissions to access the resource',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
        NotFound: {
          description: 'The specified resource was not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
        InternalServerError: {
          description: 'An unexpected server error occurred',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  apis: [],
};
