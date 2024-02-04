## Installation

To install the required dependencies, use the following command:

```bash
npm install
```

## ROUTES:
- **User registration (POST)**
	- Endpoint: http://localhost:4002/users/register
    - Request Body: 
        - firstName (string)
        - lastName (string)
        - email (string)
        - password (string)


- **User details (GET)**
    - Endpoint: http://localhost:4002/users/all

- **Update a User (PUT)**
    - Endpoint: http://localhost:4002/users/:userId
    Request Body: 
        - firstName (string)
        - lastName (string)
        - email (string)
        - password (string)
        
- **Delete a User (DELETE)**
    - Endpoint: http://localhost:4002/users/:userId

