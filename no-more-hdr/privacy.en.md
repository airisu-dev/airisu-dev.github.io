---
layout: page
title: Privacy Policy for No More HDR
permalink: /no-more-hdr/privacy/
lang: en
---

Effective date: October 4, 2026

No More HDR ("the app") is made by airisu.dev ("we", "us"). The app finds HDR photos in your photo library and makes standard-range (SDR) copies of them. This policy explains what the app does with your information.

**The short version:** your photos are read and processed on your device and are never uploaded by us. We have no accounts. The app shows ads, which are provided by a third-party advertising partner and involve the data described below. It also uses Google Firebase Analytics to understand how the app is used, sends a small amount of anonymous performance data, and checks for app updates.

## Your photos

- **Photos stay on your device.** The app reads your photos only to check whether they contain HDR data and to make SDR copies. This happens on your device. We do not upload, copy to a server, or look at your photos, and we have no server that receives them.
- **iCloud.** If a photo is stored in iCloud rather than on your device, the app may ask the system to download it so it can be checked. That download is done by Apple's Photos system, between your device and your iCloud account. It is not sent to us.
- **Photo library permission.** The app asks for access to your photo library. It uses read access to find HDR photos and write access to save the SDR copies you create. You can choose "Limited Access" and give the app only the photos you select; the app then works only with those photos. You can change this at any time in the iOS Settings app, under No More HDR > Photos. The app also lets you import individual photos with the system photo picker instead of granting library access; only the photos you pick are available to the app.
- **Your originals.** The app does not edit your original photos. It adds new SDR copies. Deleting an original is only done if you choose it, and iOS asks you to confirm.

## What the app stores on your device

The app keeps the following only on your device, inside the app's own storage:

- **A scan index (cache).** For each photo the app has checked, a record of its photo-library identifier, its modification time, whether it has HDR, and when it was checked. It also keeps a list of your albums (identifier, title and photo count) and which photos belong to them, so it can show HDR counts per album. This index contains no image content.
- **A record of the copies the app created** ("Fixed" copies): which photo is a copy, and which photo it came from.
- **App-private copies.** Copies you create may be held inside the app until you choose to save them to your photo library. Photos you import with the picker are also copied into the app's storage, along with their file name, size and a fingerprint (hash) used to avoid importing the same photo twice.
- **Settings and small preferences**, such as your chosen language, save options and whether you have seen the introduction.

None of this is sent to us. All of it is deleted when you uninstall the app.

## Information sent off your device

### Advertising

The app shows ads from Google AdMob ("our advertising partner"). To load and show ads, and to measure and limit how often they appear, the partner's software in the app may collect and use:

- your device's advertising identifier (IDFA), only if you allow tracking when the app asks;
- your IP address and approximate location derived from it (not precise location);
- device information such as model, operating system and language, and information about how you interact with ads;
- identifiers and usage data about the app and the ads you see.

Ads may be personalized if you allow tracking, and are non-personalized if you decline. You can change this at any time in iOS Settings > Privacy & Security > Tracking, and limit ad personalization in iOS Settings > Privacy & Security > Apple Advertising. If you are in the European Economic Area, the UK or another region that requires it, the app asks for your consent before showing personalized ads. The advertising partner handles this data under its own privacy policy: [https://policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites). None of your photos or photo information is ever shared with the advertising partner.

### Analytics

The app uses Google Firebase Analytics, provided by Google, to help us understand which features are used and how the app performs, so we can improve it. Firebase Analytics may collect:

- an app-instance identifier generated for this installation, and your device's vendor identifier (IDFV);
- events about how you use the app (for example, screens opened and features used). We do not send photos, photo names, or anything from inside your photos;
- device and app information such as model, operating system and version, language, app version, and approximate location derived from your IP address (not precise location);
- if you allow tracking when the app asks, your advertising identifier (IDFA).

This data is used for analytics and, where you allow it, to help measure and personalize ads. Google processes it under its own terms: [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) and [https://policies.google.com/privacy](https://policies.google.com/privacy). You can limit it in iOS Settings > Privacy & Security > Tracking.

### Performance data

The app sends anonymous performance measurements (for example, how long the app takes to start and to open screens) to one of our service providers, where we can see them. Each report includes:

- the app name, version and build, and the app update it is running;
- your device model and iOS version, and your language setting;
- the name of the screens visited, timing values, and a random identifier created by the app on your device when it first runs, used to group reports from the same installation.

This identifier is not your Apple ID, your advertising identifier or anything tied to who you are. We do not combine it with any other data and we do not use it to track you. It is not sent when the app is run in development. Our service provider handles this data under its own terms and privacy policy.

### Update checks

The app can receive small updates to its code over the air, so we can fix bugs without a new release in the App Store. When the app starts, it contacts our update service to ask whether an update is available, and downloads it if so. Like any internet request, this reveals your IP address to the server, and the request includes the app's version, platform and update details. No photos or photo information are included. Updates never change the permissions the app has.

### Reports and messages you choose to send

The app has "Report a problem" and "Contact developer" links in Settings. These open your email app with a draft addressed to [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com). A problem report draft is pre-filled with the app version and your iOS version so we can help you. Nothing is sent until you press Send in your email app, and you can edit or delete anything in the draft first, including what you attach. We will see your email address and anything you choose to include, and we use it only to reply to you and to fix the problem. We do not add you to any list.

### Sharing

If you use Share on a photo, the app hands it to the iOS share sheet, and the photo goes wherever you choose to send it. The app itself does not send it anywhere.

### Links

The Privacy Policy and Support links in Settings open a web page in your browser. Those sites have their own practices.

## What we do not do

- We do not have user accounts.
- We do not sell your information.
- We do not share the contents of your photos with anyone.
- We do not track you across other companies' apps and websites unless you allow it when the app asks (see Advertising above).
- We do not collect your name, contacts, precise location, or the contents of your photos.

## Your choices and control

- **Photo access:** change or revoke it in iOS Settings > No More HDR > Photos.
- **Clear scan data:** in the app, go to Settings > Cache. "Clear scan cache" deletes the scan index and rechecks your library. "Clear app cache" also deletes any app-private copies not yet saved to your library and forgets which photos are marked as Fixed. Photos you already saved to your library are not deleted.
- **Imported photos:** Settings > Imported photos > "Remove all imported photos" deletes the copies kept inside the app. Your photo library is not changed.
- **Delete everything:** uninstalling the app deletes all the data it keeps on your device. Copies you saved to your photo library are your photos and stay there until you delete them.
- **Analytics:** you can stop the app sharing the advertising identifier at any time in iOS Settings > Privacy & Security > Tracking. If you would like your analytics data deleted, contact us at [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) with the details we need to find it.
- **Ads and tracking:** change your choice in iOS Settings > Privacy & Security > Tracking, or turn off personalized ads there. Reset your advertising identifier in the same place.
- **Performance data:** because the data is anonymous and not linked to you, we cannot look up or delete the records of a particular person. If you have questions, contact us at [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com).

## Children

The app is not directed at children under 13 (or the minimum age in your country), and we do not knowingly collect personal information from anyone. It has no accounts and does not ask for personal details. Ads shown in the app are not directed at children. If you believe a child has sent us personal information, for example in an email, contact us at [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) and we will delete it.

## Changes to this policy

If we change how the app handles information, we will update this page and the effective date above. If a change is significant, we will also say so in the app's release notes.

## Contact

Questions or requests about this policy: [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com)

airisu.dev

