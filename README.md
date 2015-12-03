# Webapps3-Project

Dit project dient als eindwerk voor het vak Webapplicaties 3. De webapplicatie omvat een 'Whisky review platform' met login en
registratie mogelijkheid. Er is een primitief crud systeem geimplementeerd voor een geregistreerde user.

### Technologie

MEAN stack: MongoDB, Node.js, Express, and AngularJS.

# Installatie

## Installatie van de nodige tools gulp and bower:

```
npm install -g gulp bower

```

## Installatie nodige dependencies

```
npm install
bower install

```

## Run

```
grunt serve

```

## Seeding

Populeer DB met sample data zodra de server start
* om uit te schakelen, editeer config/environment/development.js, en zet naar `seedDB: false`.

## Users

User  | Email   | Password
-------- | ---  | ----
Test User | test@test.com | test
Admin    | admin@admin.com |  admin
