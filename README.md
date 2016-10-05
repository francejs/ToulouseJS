# [ToulouseJS](http://toulousejs.francejs.org/)

[![Build Status](http://img.shields.io/travis/francejs/ToulouseJS.svg)](https://travis-ci.org/francejs/ToulouseJS)

* [Twitter](https://twitter.com/ToulouseJS)
* [Flickr](http://www.flickr.com/photos/toulousejs/)

## Contribuer à ToulouseJS

Rendez vous sur [le site](http://toulousejs.francejs.org/) pour plus d'informations.

## Contribuer au site

Le site utilise *[Phenomic](http://phenomic.io/)*

### Récupérer le code source

```console
git clone git://github.com/francejs/ToulouseJS.git
```

### Installer

Cette commande nécessite Node.js d'installé sur votre machine

```console
npm install
```

### Démarrer

Cette commande va démarrer le serveur punch et vous ouvrir la page dans votre
navigateur

```console
npm start
```

Le server écoute sur le port 3000 de votre machine. Vous devriez donc déjà avoir
[http://localhost:3000/](http://localhost:3000/) d'ouvert après cette commande.

*[Documentation de Phenomic](http://phenomic.io/)*

Un fois que vous avez testé votre modification, soumettez une Pull Request :)

### Déployer (pas vraiment utile, vu qu'un automatisation est en place)

La commande suivante (lorsque vous avez les droits nécessaires) va construire le site
en version optimisée, et le publier (mise à jour de la branche  `gh-pages`, qui,
grâce à GitHub, suffit à mettre en ligne le site).

```console
npm run deploy
```

⚠️ **Cela dit, tous les commits dans la branche `master` provoqueront une mise en production automatique via [Travis-CI](https://travis-ci.org/).**

_Note: pour commiter sans provoquer un `deploy`, il suffit d'ajouter `[ci skip]` dans votre message de commit._
