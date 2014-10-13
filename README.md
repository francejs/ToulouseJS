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

Cela dit (toujours si vous avez les droits nécessaires), vous pouvez enregistrer un token
encrypté par Travis afin d'automatiser le publish de vos commits dans la branch master.

_Note: pour commiter sans provoquer un publish, il suffit d'ajouter `[ci skip]` dans votre message de commit._

### Ajouter son token

Vous pouvez soit passer par l'interface GitHub pour [ajouter un token](https://github.com/settings/tokens/new),
soit faire les commandes suivantes (remplacez YOUR_GITHUB_USERNAME)

    $ GH_USERNAME=YOUR_GITHUB_USERNAME
    $ GH_BRANCH=gh-pages

    $ curl -u $GH_USERNAME -d "{\"scopes\":[\"public_repo\"],\"note\":\"push to $GH_BRANCH from travis\"}" https://api.github.com/authorizations

Si la création ne fonctionne pas, vous avez peut-être déjà un token. Si vous ne vous en rappelez pas, regénérez le depuis l'interface GitHub (et cette fois ci, sauvegardez le).

Votre mot de passe GitHub va vous être demandé.
Ensuite vous aurez un résultat du genre

    {
      "id": 123456,
      "url": "https://api.github.com/authorizations/8955171",
      "app": {
        "name": "push to gh-pages from travis (API)",
        "url": "https://developer.github.com/v3/oauth_authorizations/",
        "client_id": "00000000000000000000"
      },
      "token": "YOUR_AWESOME_TOKEN",
      "note": "push to gh-pages from travis",
      "note_url": null,
      "created_at": "2014-05-29T03:55:28Z",
      "updated_at": "2014-05-29T03:55:28Z",
      "scopes": [
        "public_repo"
      ]
    }

Ensuite (remplacez YOUR_AWESOME_TOKEN par celui présent dans le résultat ci-dessus)

    $ GH_REPOSITORY="putaindecode/website"
    $ GH_TOKEN=YOUR_AWESOME_TOKEN

#### Encryption du token

Maintenant il reste à encrypter ce token. Vous avez 2 possibilités:
- soit installer la gem ruby `travis` (qui embarque la commande `encrypt`)
- soit installer le paquet node `travis-encrypt`

##### Via la gem Ruby `travis`

    $ gem install travis
    $ travis encrypt -r $GH_REPOSITORY GH_TOKEN=$GH_TOKEN

##### Via le paquet Node `travis-encrypt`

    $ npm i -g travis-encrypt
    $ travis-encrypt -r $GH_REPOSITORY GH_TOKEN=$GH_TOKEN

Vous n'avez plus qu'à incorporer votre token après les autes dans la section
`env.global` du `.travis.yml` (mettez votre pseudo avant éventuellement,
  plus pratique si maj du token nécessaire).
