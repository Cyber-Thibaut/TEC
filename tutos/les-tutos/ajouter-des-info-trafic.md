---
coverY: 0
---

# Ajouter des Info Trafic

Dans la vie de tous les jours, nous sommes constamment confrontés aux aléas du trafic (train, avion, métro, voiture...) Dans toutes les situations, nous sommes alertés du retard, du problème et même de l'annulation. Dans Train Empire, nous ne gérons pas la partie voyageurs, nous vendons nos billets et ils sont contents. Via MyLines, vous pouvez accentuer votre RP en prévenant vos voyageurs via les infos trafic. Nous allons aujourd'hui découvrir comment les ajouter.

## Information voyageur

Dans MyLines, il y a 4 types d'informations voyageurs

* information
* travaux
* attention
* suppression

Vous pouvez choisir celui qui correspond le mieux au message que vous souhaitez faire passer.

## Ajouter une info trafic

{% hint style="info" %}
Dans Train Empire, vos trains sont nommés via un nom, le numéro de la rame et la classification que vous entrez (celle-ci est notée facultative, mais pour éviter d'annoncer la suppression de tous les trains de votre compagnie, nous vous recommandons de séparer vos différents services via les classifications.)
{% endhint %}

Quand vous créez une info trafic, vous choisissez entre la classification et le nom du trajet, nous commencerons par la classification.

{% hint style="danger" %}
Vous devez respecter rigoureusement le nom de la classification que vous utilisez ! Par exemple, si sur Train Empire, vous mettez `InOui` sur MyLines, vous devez mettre `InOui` et non pas `inoui` ou `INOUI`. En effet, l'outil compare avec rigueur la base de données qu'il reçoit de TE et celle interne à MyLines

Cette règle est la même pour les noms de Train.
{% endhint %}

Une fois le nom ou la classification ajoutée, vous devez ajouter un texte expliquant aux voyageurs le problème.

## Info éphémère

Depuis la Maj 2.2.0, il est possible d'afficher les infos pour une durée limitée, ce qui peut être utile pour des soldes ou pour des travaux. Il faut faire attention à bien renseigner une date, sinon l'info trafic se supprime immédiatement, car l'outil prendra l'heure et la date actuelle.

## Suppression et retard de trains

Depuis la Maj 2.3.0, il est possible d'afficher un retard ou une suppression d'un train dans les panneaux info gare ainsi que directement dans les recherches d'itinéraire. Pour cela, vous devez ajouter une info trafic et cocher la case correspondante. Si vous choisissez un retard de 10 minutes par exemple dans les recherches d'itinéraires, cela s'affichera comme cela : ~~10 h 01~~ 10 h 11 Si vous choisissez une annulation, dans les recherches d'itinéraires, cela s'affichera comme cela : ~~10 h 01~~ _annulé_

Cela s'affichera également sur les panneaux info gares comme IRL.

Si vous rencontrez un problème avec l'info trafic, venez nous voir sur [le serveur de MyLines](https://discord.gg/AfMzyPHDq5) nous vous aiderons ;)
