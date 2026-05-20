# Proyecto Final FP Dual - Biblioteca

Aplicación web **full stack** sencilla para el proyecto final de FP Dual.

## Tecnologías

- **Frontend:** Angular 21
- **Backend:** Java + Spring Boot 2.7.18
- **Base de datos:** H2 en memoria
- **Relación 1:M:** un autor tiene muchos libros

## Compatibilidad Java

El backend está preparado para compilar con **Java 8** y también con **Java 21**:

- `java.version` configurado a `1.8`
- Spring Boot `2.7.18`, compatible con Java 8
- Uso de `javax.*`, no `jakarta.*`
- Sin `record`, para mantener compatibilidad con Java 8

## Funcionalidades

- Listado de autores.
- Detalle de autor con sus libros.
- Listado completo de libros.
- Crear autores.
- Crear libros asociados a autores.
- Formularios reactivos con validaciones.
- Navegación mediante rutas.
- Servicios Angular con Observables.
- Uso de Signals en Angular.
- API REST con Spring Boot.
- Persistencia con H2.

## Estructura

```text
biblioteca-fp-dual-final/
├── backend/
├── frontend/
└── README.md
```

## Ejecutar backend

Abre una terminal en la carpeta `backend`:

```bash
cd backend
mvn clean spring-boot:run
```

El backend queda disponible en:

```text
http://localhost:8080
```

Endpoints principales:

```text
GET  /api/autores
GET  /api/autores/{id}
POST /api/autores
GET  /api/autores/{id}/libros
GET  /api/libros
POST /api/libros
```

Pruebas rápidas:

```text
http://localhost:8080/api/autores
http://localhost:8080/api/libros
```

Consola H2:

```text
http://localhost:8080/h2-console
```

Datos H2:

```text
JDBC URL: jdbc:h2:mem:bibliotecadb
User: sa
Password: dejar vacío
```

## Ejecutar frontend

Abre otra terminal en la carpeta `frontend`:

```bash
cd frontend
npm install
npm start
```

La aplicación Angular se abre en:

```text
http://localhost:4200
```

Rutas frontend:

```text
/autores
/libros
/autores/nuevo
/libros/nuevo
/autores/:id
```

## Problemas encontrados durante el desarrollo

- La primera versión usaba Spring Boot 3 y requería Java 17 o superior. Se adaptó a Spring Boot 2.7.18 para funcionar con Java 8.
- Se cambiaron imports `jakarta.*` por `javax.*`.
- Se sustituyó un `record` por una clase DTO normal compatible con Java 8.
- En Angular se corrigió la inicialización de `FormBuilder` usando `inject(FormBuilder)` para evitar errores de inicialización.
- Se añadió el listado completo de libros en frontend y backend.
