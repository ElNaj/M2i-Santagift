# Liste des cadeaux de Noël secret. 
Le but de cet exercice est de mettre en place un projet complet avec Angular et SpringBoot. Nous allons prendre une architecture 3-tiers car elle est la plus simple et propose les meilleures performances.

# Client
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## REMARQUE
Les informations ci-dessus sont génés par Angular.
A savoir pour lancer le projet front (client) :
    - Cloner/Télécharger le projet depuis git sur votre machine
    - Récupérer les nodes-modules : npm install ou npm upadate
    - La partie backend est normalement embarqué dans le projet complet sinon penser à la télécharger aussi 
        et il faudra aussi la lancer, voir rubrique ci-dessous
    - Lancer l'appliacation : ng serve 
    - Vous serez redirigé vers :  `http://localhost:4200/`
    - Quiiter l'application : Ctrl + c

# backend/santagigt
## Run Spring Boot application
Pour lancer le projet back(backend/santagift) :
mvn spring-boot:run

## MongoDB/Docker
Un fichier docker compose est embarqué avec le backend, pour lancer le container mongo et mongo-expresse :
docker-compose up -d
