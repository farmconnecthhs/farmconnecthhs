const apiDocs = {
  "openapi": "3.0.0",
  "info": {
    "title": "FarmConnect API",
    "description": "An API for FarmConnect.",
    "license": {
      "name": "MIT",
      "url": "https://spdx.org/licenses/MIT.html"
    },
    "contact": {
      "name": "FarmConnect",
      "url": "https://FarmConnect.com",
      "email": "cms@farmconnect.com"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000/api/v1",
      "description": "Local server FarmConnect server."
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "operationId": "getAllUsers",
        "tags": [
          "users"
        ],
        "responses": {
          "200": {
            "description": "A list of users.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "post": {
        "summary": "Create a user",
        "operationId": "createUser",
        "tags": [
          "users"
        ],
        "requestBody": {
          "description": "User object that needs to be added to the store",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "403": {
            "description": "Forbidden"
          },
          "404": {
            "description": "Not Found"
          },
          "409": {
            "description": "Conflict"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "username": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string",
            "format": "password"
          },
          "phone": {
            "type": "string"
          },
          "userStatus": {
            "type": "integer",
            "description": "User Status",
            "format": "int32",
            "enum": [
              1,
              2,
              3
            ]
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "message": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        }
      }
    }
  }
}

module.exports = apiDocs;