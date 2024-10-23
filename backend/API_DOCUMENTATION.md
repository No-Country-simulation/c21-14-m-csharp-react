# API Documentation

## User API

### 1. Registro de Usuario

- **Método**: `POST`

- **URL**: `/api/v1/auth/register`

- **Descripción**: Este endpoint permite registrar un nuevo usuario en la plataforma. Recibe varios datos personales, incluyendo los campos opcionales para perfil de fitness.

- **Parámetros del cuerpo (JSON)**:

```json
{
  "name": "John Doe",

  "email": "johndoe@example.com",

  "password": "12345678", // la contraseña debe de tener como mínimo 8 carácteres

  "phone": "+11234567890", // El celular debe tener el formato con prefijo por país

  "country": "USA",

  "documentId": "A1234567",

  "profileUrl": "images.com/johndoe.jpg"
}
```

- **Respuesta exitosa (200)**:

```json
{
  "name": "John Doe",

  "email": "johndoe@example.com"
}
```

- **Posibles errores**:

- `400 Bad Request`: Si el usuario ya existe o si alguno de los campos obligatorios no es válido.

- `500 Internal Server Error`: Si ocurre un error interno durante la creación del usuario.

### 2. Inicio de Sesión de Usuario

- **Método**: `POST`

- **URL**: `/api/v1/auth/login`

- **Descripción**: Este endpoint autentica a un usuario existente utilizando su correo electrónico y contraseña. Devuelve un token JWT para usar en rutas protegidas.

- **Parámetros del cuerpo (JSON)**:

```json
{
  "email": "johndoe@example.com",

  "password": "12345678"
}
```

- **Respuesta exitosa (200)**:

```json
{
  "token": "jwt_token_here",

  "email": "johndoe@example.com"
}
```

- **Posibles errores**:

- `401 Unauthorized`: Si el correo electrónico o la contraseña no son válidos.

- `500 Internal Server Error`: Si ocurre un error durante el proceso de autenticación.

### 3. Perfil de Usuario

- **Método**: `GET`

- **URL**: `/api/v1/auth/profile`

- **Descripción**: Este endpoint permite al usuario autenticado acceder a su perfil de usuario. Se requiere un token JWT en el encabezado.

- **Encabezados**:

- `Authorization: Bearer <token>`

- **Respuesta exitosa (200)**:

```json
{
  "name": "John Doe",

  "email": "johndoe@example.com",

  "phone": "+11234567890",

  "country": "USA",

  "documentId": "A1234567",

  "profileUrl": "images.com/johndoe.jpg"
}
```

- **Posibles errores**:

- `401 Unauthorized`: Si el token JWT no es válido o ha expirado.

- `500 Internal Server Error`: Si ocurre un error al recuperar el perfil del usuario.

### 3. Actualizar perfil de Usuario

- **Método**: `PUT`

- **URL**: `/api/v1/auth/profile`

- **Descripción**: Este endpoint permite al usuario editar su perfil

- **Encabezados**:

- `Authorization: Bearer <token>`

- **Parámetros del cuerpo (JSON)**:

```json
{
  // todos los parametros son opcionales, pero debe enviarse al menos 1

  "name": "John Doe",

  "email": "johndoe@example.com",

  "phone": "+11234567890",

  "country": "USA",

  "documentId": "A1234567",

  "profileUrl": "images.com/johndoe.jpg"
}
```

- **Respuesta exitosa (200)**:

```json
{
  "name": "John Doe",

  "email": "johndoe@example.com",

  "phone": "+11234567890",

  "country": "USA",

  "documentId": "A1234567",

  "profileUrl": "images.com/johndoe.jpg"
}
```

- **Posibles errores**:

- `400 Bad Request`: Si no se envía ningun dato en el body

- `401 Unauthorized`: Si el token JWT no es válido o ha expirado.

- `500 Internal Server Error`: Si ocurre un error al recuperar el perfil del usuario.

## Properties API

### 1. Crear una propiedad

- **Método**: `POST`
- **URL**: `/api/v1/properties`
- **Descripción**:
  Este endpoint permite al administrador agregar una propiedad
- **Encabezados**:

`Authorization: Bearer <token>`

- **Parámetros del cuerpo (JSON)**:

```json
{
  "name": "Torre Pacifica",

  "type": "commercial",

  "country": "México",

  "city": "Guadalajara",

  "location": "MTXP+23, Av. Vallarta, Guadalajara, JAL 45138",

  "description": "Edificio de oficinas y locales comerciales",

  "minAmount": 5000,

  "area": 5250,

  "time": 36,

  "profit": 15,

  "status": "Terminado",

  "photosUrl": "https://example.com/images/torre-pacifica.jpg"
}
```

- **Respuesta exitosa (200)**:

```json
{
  "id": 7,

  "adminId": 1,

  "name": "Torre Pacifica",

  "type": "commercial",

  "country": "México",

  "city": "Guadalajara",

  "location": "MTXP+23, Av. Vallarta, Guadalajara, JAL 45138",

  "description": "Edificio de oficinas y locales comerciales",

  "minAmount": 5000,

  "area": 5250,

  "time": 36,

  "profit": 15,

  "status": "Terminado",

  "photosUrl": "https://example.com/images/torre-pacifica.jpg",

  "createdAt": "2024-10-21T13:40:13.393Z",

  "updatedAt": "2024-10-21T13:40:13.393Z"
}
```

**Posibles errores**:

- `500 Internal Server Error`: Si ocurre un error al crear la propiedad

### 2. Obtener propiedades disponibles

- **Método**: `GET`
- **URL**: `/api/v1/properties`
- **Descripción**: Este endpoint permite al usuario o administrador ver todas las propiedades disponibles.
- **Query Parameters:**

  - **`name`** (`string`, opcional): Filtra las propiedades basadas en el nombre
  - **`country`** (`string`, opcional): Filtra las propiedades basadas en el país donde se encuentra

- **Example:**

  ```bash
  api/v1/properties?country=méxico&name=torre
  ```

- **Respuesta exitosa (200)**:

  ```json
  [
    {
      "id": 1,
      "adminId": 1,
      "name": "Torre Pacifica",
      "type": "commercial",
      "country": "México",
      "city": "Guadalajara",
      "location": "MTXP+23, Av. Vallarta, Guadalajara, JAL 45138",
      "description": "Edificio de oficinas y locales comerciales",
      "minAmount": 5000,
      "area": 5250,
      "time": 36,
      "profit": 15,
      "status": "Terminado",
      "photosUrl": "https://example.com/images/torre-pacifica.jpg",
      "createdAt": "2024-10-21T13:40:13.393Z",
      "updatedAt": "2024-10-21T13:40:13.393Z"
    }
  ]
  ```

**Posibles errores**:

- `500 Internal Server Error`: Si ocurre un error al recuperar las propiedades

### 3. Obtener una propiedad por ID

- **Método**: `GET`
- **URL**: `/api/v1/properties/:id`
- **Descripción**: Obtiene una propiedad específica por su `id`.
- **Path Parameters:**

  - **`id`** (`number`, requerido): El ID de la propiedad.

- **Ejemplo de Request:**

  ```bash
  /api/v1/properties/1
  ```

- **Ejemplo de Response (200 OK):**

  ```json
  {
    "id": 1,
    "name": "Torre Pacifica",
    "type": "comercial",
    "country": "México",
    "city": "Guadalajara",
    "location": "MTXP+23, Av. Vallarta, Guadalajara, JAL 45138",
    "description": "Edificio de oficinas y locales comerciales",
    "minAmount": 5000,
    "area": 5250,
    "time": 36,
    "profit": 15,
    "status": "Terminado",
    "photosUrl": "https://example.com/images/torre-pacifica.jpg"
  }
  ```

## Notas adicionales

1.  **Autorización**:

- Todos los endpoints relacionados con el perfil requieren autorización mediante un token JWT válido que se envía en los encabezados HTTP con el formato `Bearer <token>`.

2.  **Validaciones**:

- Se utiliza `class-validator` para validar los datos de entrada. Por ejemplo, el correo debe ser un formato válido, y la contraseña debe tener al menos 6 caracteres.

## Formato de Respuesta para Errores

Todos los endpoints manejan errores con respuestas JSON estandarizadas que incluyen un código de estado HTTP y un mensaje descriptivo del error.

- **Formato de error**:

```json
{
  "statusCode": 400,

  "message": "User already exists",

  "error": "Bad Request"
}
```