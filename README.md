# [![ToulouseJS](templates/img/toulousejs.png)](http://toulousejs.francejs.org/)

[![Build Status](http://img.shields.io/travis/francejs/ToulouseJS.svg)](https://travis-ci.org/francejs/ToulouseJS)

* [Twitter](https://twitter.com/ToulouseJS)
* [Google+](https://plus.google.com/u/0/communities/114813405129984534292)
* [Flickr](http://www.flickr.com/photos/toulousejs/)

# Contribuer à ToulouseJS

Rendez vous sur [le site](http://toulousejs.francejs.org/) pour plus d'informations.

# Contribuer au site

Le site utilise [Punch](http://laktek.github.com/punch/), un générateur de site static utilisant Node.js.

## Récupérer le code source

    $ git clone git://github.com/francejs/ToulouseJS.git

## Installer Punch (via npm)

Cette commande nécessite Node.js d'installé sur votre machine

    $ npm install

## Démarrer le serveur

Cette commande va démarrer le serveur punch et vous ouvrir la page dans votre
navigateur

    $ npm start

Le server écoute sur le port 3000 de votre machine. Vous devriez donc déjà avoir
[http://localhost:3000/](http://localhost:3000/) d'ouvert après cette commande.

*[Documentation de Punch](https://github.com/laktek/punch/wiki)*

Un fois que vous avez testé votre modification, soumettez une Pull Request :)

## Mise en production

La commande suivante (lorsque vous avez les droits nécessaires) va construire le site
en version optimisée, et le publier (mise à jour de la branche  `gh-pages`, qui,
grâce à GitHub, suffit à mettre en ligne le site).

    $ npm run deploy

**Cela dit, tous les commits dans la branche `master` provoqueront une mise en production automatique via [Travis-CI](https://travis-ci.org/).**

_Note: pour commiter sans provoquer un `deploy`, il suffit d'ajouter `[ci skip]` dans votre message de commit._
