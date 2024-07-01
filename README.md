# CrudAngular16

Este proyecto es un sistema de gestión de usuarios que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de usuarios. Está construido con [[Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.  y utiliza [Firebase](https://firebase.google.com/) como backend.

# Funcionalidades

- **new**: Añade nuevos usuarios a la base de datos.
- **List**: Visualiza todos los usuarios registrados.
- **Update**: Edita la información de los usuarios existentes.
- **Delete**: Elimina usuarios de la base de datos.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Requisitos
Una cuenta en Firebase y un proyecto configurado

1. Ve a la [consola de Firebase](https://console.firebase.google.com/).
2. Crea un nuevo proyecto o selecciona uno existente.
3. Añade una aplicación web a tu proyecto de Firebase.
4. Copia la configuración de Firebase que se muestra y pégala en el archivo `src/environments/environment.ts` de este proyecto, debería verse algo así:
5. Asegúrate de que la autenticación y la base de datos están habilitadas en tu configuración de Firebase.
6. Nombre de la coleccion "users" name, username, email

```typescript
export const environment = {
    production: false,
    firebase: {
        apiKey: "apikey",
        authDomain: "domain",
        projectId: "crud",
        storageBucket: "storage",
        messagingSenderId: "123",
        appId: "1:123"
    }
  };
