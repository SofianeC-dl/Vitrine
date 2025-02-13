# Base de Donnée

Ce fichier sert à expliquer comment lancer la BDD avec l'outil Docker-compose (ou podma-compose)

# Sommaire

- [Installation](#installation)
  - [Postgresql](#postgresql)
  - [Podman]()


# Installation

## Postgresql

### Windows

#### Prérequis
- Windows 10 ou version ulterieur.
- Avoir les droits administrateur sur sa machine.

##### Installation via l'installeur

1. Aller sur le site de [Postgresql](https://www.postgresql.org/download/) et télécharger l'installeur pour la version 17.

2. Executer l'installeur
   - Choix du répertoire d'installation : Sélectionnez l'emplacement souhaité pour installer PostgreSQL. (de préférence `C:\Program Files\PostgreSQL`)

   - Sélection des composants : Choisissez les composants à installer (serveur, **pgAdmin**, outils en ligne de commande, etc.).
   - Configuration de l'utilisateur : Définissez le mot de passe pour l'utilisateur par défaut postgres. <span style="color: red;">Attention</span> : `Ne pas oublier le mot de passe`
   - Port de connexion : Par défaut, le port est configuré à 5432.

3. Une fois l'installation terminée, PostgreSQL 17 sera installé et configuré pour démarrer automatiquement en tant que service Windows.

### MacOs

#### Prérequis
- macOS 10.15 (Catalina) ou ultérieur.
- [Homebrew](https://brew.sh/) installé (recommandé) pour simplifier l'installation.
  
Si Homebrew n'est pas encore installé, exécutez la commande suivante dans le Terminal :
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

##### Installation via Homebrew

1. Mettre à jour Homebrew

```bash
brew update
```

2. Installer Postgresql 17

```bash
brew install postgresql@17
```

3. Lier Postgresql 17 (si nécessaire)

```bash
brew link postgresql@17 --force
```

4. Démarrer le service PostgreSQL :

```bash
brew services start postgresql@17
```

##### Installation via le package officiel
- Rendez-vous sur [la page officielle](https://www.postgresql.org/download/macosx/) de téléchargement pour macOS. Prendre la version 17

- Téléchargez le package d'installation adapté à votre version de macOS.

- Suivez les instructions de l'installateur pour finaliser l'installation.

### Configuration de base et vérification

#### Initialisation de la base de données (pour macOS)

Si l'initialisation n'est pas réalisée automatiquement, vous pouvez l'exécuter manuellement :

```bash
initdb /usr/local/var/postgresql@17
```

#### Démarrage du serveur

- Sur macOS : Le serveur démarre automatiquement via Homebrew avec la commande
```bash
brew services start postgresql@17.
```

- Sur Windows : PostgreSQL s'exécute en tant que service et peut être géré via le "Gestionnaire des services" ou pgAdmin.

#### Vérification de l'installation

- Ouvrir un terminal sur MacOs ou un invité de commande sur Windows et lancer la commande **psql** pour se connecter :

```bash
psql -U postgres
```

- Entrer le mot de passe configué pendant l'installation
- Lancer la commande suivante pour vérifier la version :

```bash
SELECT version();
```

La commande doit retourner la version PostgreSQL 17, confirmant ainsi une installation réussie.