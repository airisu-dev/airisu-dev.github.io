---
layout: page
title: "No More HDR : Assistance"
permalink: /no-more-hdr/
lang: fr
share-description: "No More HDR repère les photos à la luminosité HDR cachée et en crée des copies calmes, à l'apparence normale, traitées entièrement sur votre appareil."
---

No More HDR repère les photos qui contiennent une luminosité HDR cachée (l'« éclair » que donnent certaines photos lorsque vous les envoyez à quelqu'un) et crée des copies SDR qui s'affichent de la même façon sur tous les écrans. Vos photos ne quittent jamais votre appareil.

Besoin d'aide ? Écrivez-nous à [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com), ou consultez [comment signaler un problème](#how-to-report-a-problem).

## Comment l'utiliser

1. **Analysez votre photothèque.** Au premier lancement, choisissez **Vérifier ma photothèque** et autorisez l'accès aux photos. L'app vérifie vos photos en arrière-plan. Vous pouvez suivre la progression et la mettre en pause dans **Réglages > Analyse HDR**.
2. **Affichez uniquement les photos HDR.** Utilisez le bouton **HDR** de la photothèque pour ne voir que les photos qui ont du HDR. Elles portent une étiquette HDR.
3. **Sélectionnez et retirez le HDR.** Touchez **Sélectionner**, choisissez des photos (ou **Sélectionner toutes les photos HDR**), puis touchez **Retirer le HDR**. Gardez l'app ouverte pendant le traitement.
4. **Enregistrez en tant que copies.** L'app travaille sur des copies : vos originaux ne sont donc pas modifiés. Les nouvelles copies apparaissent dans votre liste **Corrigées**. Quand vous êtes prêt, touchez **Enregistrer dans la photothèque** pour les ajouter à votre photothèque Photos. Après un traitement, vous pouvez aussi choisir de supprimer les photos HDR originales. Elles sont déplacées dans Supprimés récemment, où vous pouvez les récupérer pendant 30 jours.
5. **Vérifiez vos résultats.** Le bouton **Corrigées** affiche les copies SDR créées par l'app, chacune marquée CORRIGÉE.
6. **Photos importées (accès limité ou aucun accès).** Si vous ne partagez que certaines photos avec l'app, ou aucune, utilisez **Importer** (ou **Choisir des photos**) pour choisir vous-même les photos. No More HDR les vérifie et conserve celles qui ont du HDR dans **Importées**, où vous pouvez les corriger de la même façon. Les photos importées sont des copies conservées dans l'app ; votre photothèque Photos n'est pas modifiée.

## FAQ

**Pourquoi une photo est-elle signalée comme HDR ?**
De nombreuses photos de téléphones récents stockent des informations de luminosité supplémentaires (une « gain map ») en plus de l'image normale. Sur un écran lumineux compatible HDR, la photo peut paraître beaucoup plus brillante que le reste de l'écran. L'étiquette HDR signifie que l'app a trouvé ces informations dans la photo.

**Que signifie « Corrigée » ?**
Une photo corrigée est une copie SDR créée par No More HDR. Elle ne contient aucune information HDR et s'affiche donc de la même façon sur tous les écrans.

**Mes originaux sont-ils modifiés ?**
Non. L'app ne crée que des copies. Vos originaux restent exactement où ils sont, sauf si vous choisissez de les supprimer après un traitement.

**Est-ce que cela fonctionne avec les photos iCloud ?**
Si l'original en pleine taille d'une photo se trouve uniquement dans iCloud et non sur votre téléphone, l'app affiche une icône de nuage au lieu de la vérifier. L'analyse ne télécharge jamais de photos. Vous pouvez ouvrir la photo et toucher **Télécharger et vérifier**, ou la télécharger dans Photos, et elle sera vérifiée comme les autres. Quand l'app a besoin d'un original iCloud pour le corriger, elle le télécharge pour vous (une connexion internet est nécessaire).

**Qu'est-ce que l'accès limité aux photos ?**
iOS vous permet de ne partager que certaines photos avec une app. Dans ce cas, No More HDR ne voit que les photos que vous avez partagées. Allez dans **Réglages > Accès aux photos** pour gérer la sélection ou pour autoriser toute votre photothèque. Vous pouvez aussi utiliser **Importer** pour vérifier des photos extérieures à votre sélection.

**Comment changer la langue ?**
No More HDR suit la langue définie pour l'app dans iOS. Ouvrez **Réglages > Langue > Changer de langue** pour accéder au réglage système. Langues prises en charge : anglais, vietnamien, espagnol, portugais (Brésil), japonais, allemand, français, chinois (simplifié), chinois (traditionnel), coréen, indonésien, russe, turc, italien et thaï.

**Comment vider le cache ?**
Ouvrez **Réglages > Cache**.
- **Vider le cache d’analyse** revérifie le HDR de toutes vos photos.
- **Vider le cache de l’app** supprime aussi les copies corrigées que vous n'avez pas encore enregistrées dans votre photothèque, retire la mention Corrigée des photos déjà enregistrées et revérifie tout. Enregistrez d'abord les copies que vous souhaitez garder.

**L'analyse va-t-elle vider ma batterie ou faire chauffer mon téléphone ?**
La vérification d'une grande photothèque peut faire chauffer votre appareil et consommer un peu de batterie. Ouvrez **Réglages > Analyse HDR** et touchez **Pause** pour l'arrêter. L'analyse reprend lorsque vous touchez **Reprendre** ou redémarrez l'app.

**Pourquoi certaines photos ne peuvent-elles pas être corrigées ?**
L'app laisse une photo telle quelle, et vous en explique la raison, lorsque :
- elle n'a pas de HDR à retirer ;
- c'est une Live Photo (pas encore prise en charge) ;
- le type de fichier, ou le type de HDR, n'est pas encore pris en charge ;
- Photos ne permet pas de la modifier (essayez d'enregistrer une copie) ;
- l'original est dans iCloud et n'a pas pu être téléchargé ;
- l'espace libre est insuffisant ;
- le résultat n'a pas passé la vérification de l'app, la photo a donc été laissée inchangée ;
- le fichier n'a pas pu être lu ou écrit.

Certains de ces cas, comme l'espace libre ou un téléchargement iCloud, peuvent fonctionner à la seconde tentative. Utilisez **Essayer celles qui pourraient fonctionner** sur l'écran des résultats.

**L'app ne voit pas mes photos.**
Ouvrez **Réglages > Accès aux photos**. Si l'accès est Limité ou Non autorisé, touchez **Gérer les photos sélectionnées** ou **Modifier le réglage système** et autorisez l'accès (l'accès Complet lui permet de vérifier toute votre photothèque). Si vous préférez ne pas donner l'accès, utilisez **Importer** pour choisir vous-même les photos.

## Comment signaler un problème {#how-to-report-a-problem}

Dans l'app, ouvrez **Réglages > Signaler un problème**. Un e-mail s'ouvre à notre attention, avec la version de l'app et la version d'iOS déjà renseignées. Merci d'ajouter :

- votre version d'iOS et le modèle de votre appareil (par exemple iPhone 16 Pro) ;
- le type de photo (par exemple une photo standard, une Live Photo, une capture d'écran, une photo iCloud ou une photo importée) et ce qui s'est passé ;
- ce que vous attendiez, et tout message que vous avez vu.

Vous pouvez aussi utiliser le [formulaire de signalement de problème](https://tally.so/r/KYqpBg) ou écrire directement à [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com). Merci de ne pas envoyer de photos privées, sauf si nous vous en demandons une.

## Plus

- [Politique de confidentialité](/no-more-hdr/privacy/)
- [Signaler un problème](/no-more-hdr/report/)
