# [![ToulouseJS](templates/img/toulousejs.png)](http://www.toulousejs.org/)

* [Twitter](https://twitter.com/ToulouseJS)
* [Google+](https://plus.google.com/u/0/communities/114813405129984534292)
* [Flickr](http://www.flickr.com/photos/toulousejs/)

# Contribuer à ToulouseJS

Rendez vous sur [le site](http://www.toulousejs.org/) pour plus d'informations.

# Contribuer au site

Le site utilise [Punch](http://laktek.github.com/punch/), un générateur de site static utilisant Node.js.

## Récupérer le code source

    $ git clone git://github.com/francejs/ToulouseJS.git

## Installer Punch (via npm)

Cette commande nécessite Node.js d'installé sur votre machine

    $ make init
    
## Démarrer le serveur
    
Cette commande va démarrer le serveur punch et vous ouvrir la page dans votre 
navigateur

    $ make start

Le server écoute sur le port 3000 de votre machine. Vous devriez donc déjà avoir
[http://localhost:3000/](http://localhost:3000/) d'ouvert après cette commande.

*[Documentation de Punch](https://github.com/laktek/punch/wiki)*

Un fois que vous avez testé votre modification, soumettez une Pull Request :)
