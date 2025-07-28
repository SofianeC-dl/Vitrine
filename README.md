Installation et première connection Base

Prérequis : avoir postgres sur son pc d'installé

Se connecter sur postgres :
create user vitrine_user with encrypted password 'vitrine1234';

CREATE ROLE doit s'afficher

création du user :
create database project_vitrine with owner = vitrine_user;
CREATE DATABASE doit s'afficher

Enfin, connection à la base depuis l'interface intellij