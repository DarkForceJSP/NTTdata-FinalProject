# Proyecto Final FP Dual - Biblioteca

Aplicación web **full stack** desarrollada para el proyecto final de FP Dual.

El proyecto implementa una aplicación de biblioteca con:

- **Frontend:** Angular 21
- **Backend:** Java + Spring Boot
- **Base de datos:** H2 en memoria
- **Relación 1:M:** un **Autor** tiene muchos **Libros**

---

## 1. Funcionalidades

La aplicación permite:

- Ver un listado de autores.
- Ver el detalle de un autor.
- Ver los libros asociados a un autor.
- Ver un listado completo de libros.
- Crear nuevos autores.
- Crear nuevos libros asociados a un autor.
- Consumir datos desde una API REST.
- Validar formularios en Angular.
- Navegar entre distintas vistas mediante rutas.

---

## 2. Requisitos cumplidos

### Frontend Angular

- Angular 21.
- Componentes **StandAlone**.
- Uso de **Signals** para manejar estado.
- Formularios reactivos.
- Servicios Angular para llamadas HTTP.
- Uso de **Observables** en los servicios.
- Rutas básicas entre vistas.

### Backend Spring Boot

- API REST funcional.
- Operaciones básicas sobre datos.
- Base de datos H2 en memoria.
- Relación 1:M entre dos entidades.
- Persistencia con base de datos relacional.

---

## 3. Modelo de datos

El proyecto usa dos entidades principales:

### Autor

Un autor representa la entidad principal.

Campos:

- `id`
- `nombre`
- `nacionalidad`
- `libros`

### Libro

Un libro representa la entidad hija.

Campos:

- `id`
- `titulo`
- `anioPublicacion`
- `autor`

### Relación

```text
Autor 1 ---- N Libro
```

Es decir:

```text
Un autor puede tener muchos libros.
Un libro pertenece a un único autor.
```

---

## 4. Estructura del proyecto

```text
biblioteca-fp-dual-final/
├── backend/
│   ├── src/main/java/com/example/biblioteca/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   └── BibliotecaApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql
│   └── pom.xml
│
├── frontend/
│   ├── src/app/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── package.json
│   └── angular.json
│
└── README.md
```

---

## 5. Compatibilidad con Java

El backend se ha adaptado para funcionar con **Java 8** y también con **Java 21**.

Para conseguirlo se han hecho estos cambios:

- Se usa **Spring Boot 2.7.18**.
- En `pom.xml` se usa:

```xml
<java.version>1.8</java.version>
```

- Se usan imports `javax.*` en lugar de `jakarta.*`.
- No se usan `record`, porque `record` no existe en Java 8.

---

# 6. Instrucciones de ejecución

> **Importante:** el proyecto tiene dos partes independientes: `backend` y `frontend`.
>
> Cada una se ejecuta desde una terminal distinta.

---

## 6.1. Ejecutar el backend

El backend es la API REST hecha con Spring Boot.

### Paso 1: abrir una terminal

Abre una terminal en la carpeta del backend:

```bash
cd biblioteca-fp-dual-final/backend
```

Si estás en Windows y tienes el proyecto en el escritorio, un ejemplo podría ser:

```bat
cd D:\Users\mipc\Desktop\biblioteca-fp-dual-final\backend
```

### Paso 2: ejecutar Spring Boot

Ejecuta este comando:

```bash
mvn clean spring-boot:run
```

### Paso 3: comprobar que funciona

Cuando el backend esté arrancado, abre el navegador y entra en:

```text
http://localhost:8080/api/autores
```

También puedes probar:

```text
http://localhost:8080/api/libros
```

Si aparece un JSON con autores o libros, el backend está funcionando correctamente.

---

## 6.2. Ejecutar el frontend

El frontend es la aplicación Angular.

> **No cierres la terminal del backend.**
>
> Abre una segunda terminal para ejecutar Angular.

### Paso 1: abrir otra terminal

Entra en la carpeta del frontend:

```bash
cd biblioteca-fp-dual-final/frontend
```

Ejemplo en Windows:

```bat
cd D:\Users\mipc\Desktop\biblioteca-fp-dual-final\frontend
```

### Paso 2: instalar dependencias

La primera vez que ejecutes el frontend, instala las dependencias:

```bash
npm install
```

### Paso 3: arrancar Angular

Después ejecuta:

```bash
npm start
```

O también:

```bash
ng serve --open
```

### Paso 4: abrir la aplicación

Angular se abrirá normalmente de forma automática.

Si no se abre, entra manualmente en:

```text
http://localhost:4200
```

---

## 6.3. Orden correcto de ejecución

Primero se ejecuta el backend y después el frontend.

### Terminal 1: backend

```bash
cd biblioteca-fp-dual-final/backend
mvn clean spring-boot:run
```

### Terminal 2: frontend

```bash
cd biblioteca-fp-dual-final/frontend
npm install
npm start
```

---

## 6.4. Comandos que NO hay que mezclar

Es importante ejecutar cada comando en su carpeta correcta.

### En `backend`

Correcto:

```bash
mvn clean spring-boot:run
```

Incorrecto:

```bash
npm start
```

`npm start` no funciona en `backend` porque la carpeta `backend` no tiene `package.json`.

### En `frontend`

Correcto:

```bash
npm start
```

Incorrecto:

```bash
mvn spring-boot:run
```

`mvn spring-boot:run` no funciona en `frontend` porque la carpeta `frontend` no es un proyecto Maven.

---

## 6.5. URLs importantes

### Backend

```text
http://localhost:8080
```

### API de autores

```text
http://localhost:8080/api/autores
```

### API de libros

```text
http://localhost:8080/api/libros
```

### Frontend Angular

```text
http://localhost:4200
```

### Consola H2

```text
http://localhost:8080/h2-console
```

Datos para entrar en H2:

```text
JDBC URL: jdbc:h2:mem:bibliotecadb
User: sa
Password: dejar vacío
```

---

## 7. Endpoints de la API

### Autores

```text
GET    /api/autores
GET    /api/autores/{id}
POST   /api/autores
GET    /api/autores/{id}/libros
```

### Libros

```text
GET    /api/libros
POST   /api/libros
```

---

## 8. Rutas del frontend

```text
/autores          Listado de autores
/libros           Listado de libros
/autores/nuevo    Formulario para crear autor
/libros/nuevo     Formulario para crear libro
/autores/:id      Detalle de un autor y sus libros
```

---

## 9. Datos de ejemplo

Los datos iniciales se cargan desde:

```text
backend/src/main/resources/data.sql
```

Ejemplos incluidos:

- Miguel de Cervantes.
- Jane Austen.
- Gabriel García Márquez.
- Don Quijote de la Mancha.
- Orgullo y prejuicio.
- Cien años de soledad.
- El amor en los tiempos del cólera.

---

## 10. Posibles errores y soluciones

### Error: `class file has wrong version 61.0, should be 52.0`

Ese error significa que se está intentando ejecutar una versión de Spring Boot que necesita Java moderno usando Java 8.

En esta versión del proyecto ya está corregido porque se usa Spring Boot 2.7.18 y Java 8.

---

### Error: `npm ERR! enoent Could not read package.json`

Ese error suele aparecer si se ejecuta:

```bash
npm start
```

Dentro de la carpeta `backend`.

Solución:

```bash
cd frontend
npm start
```

---

### Error: el frontend no carga datos

Comprueba que el backend está arrancado.

Primero debe funcionar esta URL:

```text
http://localhost:8080/api/autores
```

Después abre Angular:

```text
http://localhost:4200
```

---

### Error: el puerto 4200 está ocupado

Puedes arrancar Angular en otro puerto:

```bash
ng serve --port 4201
```

Y abrir:

```text
http://localhost:4201
```

---

### Error: el puerto 8080 está ocupado

Cierra el proceso que esté usando el puerto 8080 o cambia el puerto en:

```text
backend/src/main/resources/application.properties
```

Por ejemplo:

```properties
server.port=8081
```

Si cambias el puerto del backend, también tendrás que cambiar las URLs de los servicios Angular.

---

## 11. Problemas encontrados durante el desarrollo

Durante el desarrollo se encontraron y solucionaron estos problemas:

- La primera versión usaba Spring Boot 3, que requiere Java 17 o superior.
- Se adaptó el backend a Spring Boot 2.7.18 para compatibilidad con Java 8.
- Se cambiaron imports `jakarta.*` por `javax.*`.
- Se eliminó el uso de `record` para mantener compatibilidad con Java 8.
- En Angular se corrigió el error de inicialización de `FormBuilder` usando `inject(FormBuilder)`.
- Se añadió un listado completo de libros tanto en el backend como en el frontend.
- Se configuró CORS para permitir llamadas desde Angular en `http://localhost:4200`.

---

## 12. Resumen rápido de ejecución

```bash
# Terminal 1
cd backend
mvn clean spring-boot:run
```

```bash
# Terminal 2
cd frontend
npm install
npm start
```

Después abrir:

```text
http://localhost:4200
```
