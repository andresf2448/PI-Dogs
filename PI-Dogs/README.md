# PI-Dogs

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros

Se desarrolló una SPA (Single Page Application) utilizando React para el Front End y Redux como state management. En los estilos se implementó CSS puro sin uso de librerías externas. La SPA consume datos de una API (The Dog API) a través de un Back End desarrollado en Node.JS utilizando Express, agregando nuevas funcionalidades a la API original. En el proyecto se pueden encontrar filtros (nombre, temperamentos, peso, nombre por orden alfabético, creados) y un formulario para la creación de nuevas razas de perros que se almacenan en una base de datos realizada con Sequelize y PostgreSQL.



