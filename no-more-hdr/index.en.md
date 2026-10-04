---
layout: page
title: "No More HDR: Support"
permalink: /no-more-hdr/
lang: en
---

No More HDR finds photos that carry hidden HDR brightness (the "flash" some photos give when you send them to someone) and makes SDR copies that look the same on every screen. Your photos never leave your device.

Need help? Email us at [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com), or see [how to report a problem](#how-to-report-a-problem).

## How to use it

1. **Scan your library.** On first launch, choose **Check my library** and allow photo access. The app checks your photos in the background. You can follow progress and pause it in **Settings > HDR Scan**.
2. **Show only HDR photos.** Use the **HDR** toggle in the Library to see just the photos that have HDR. They carry an HDR tag.
3. **Select and remove HDR.** Tap **Select**, pick photos (or **Select all HDR**), then tap **Remove HDR**. Keep the app open while it runs.
4. **Save as copies.** The app works on copies, so your originals are not changed. New copies appear in your **Fixed** list. When you are ready, tap **Save to library** to add them to your Photos library. After a run you can also choose to delete the original HDR photos. They go to Recently Deleted, where you can bring them back for 30 days.
5. **Check your results.** The **Fixed** toggle shows the SDR copies the app has made, each marked FIXED.
6. **Imported photos (limited access, or no access).** If you share only some photos with the app, or none, use **Import** (or **Pick photos**) to choose photos yourself. No More HDR checks them and keeps the ones that have HDR in **Imported**, where you can fix them the same way. Imported photos are copies kept inside the app; your Photos library is not changed.

## FAQ

**Why does a photo show as HDR?**
Many modern phone photos store extra brightness information (a "gain map") alongside the normal image. On a bright HDR-capable screen the photo can look much brighter than the rest of the screen. The HDR tag means the app found that information in the photo.

**What does "Fixed" mean?**
A Fixed photo is an SDR copy that No More HDR made. It has no HDR information, so it looks the same on every screen.

**Are my originals modified?**
No. The app only makes copies. Your originals stay exactly where they are unless you choose to delete them after a run.

**Does it work with iCloud photos?**
If a photo's full-size original is only in iCloud and not on your phone, the app shows a cloud icon instead of checking it. The scan never downloads photos. You can open the photo and tap **Download and check**, or download it in Photos, and it will be checked like any other. When the app needs an iCloud original to fix it, it downloads it for you (this needs an internet connection).

**What is limited photo access?**
iOS lets you share only selected photos with an app. In that case No More HDR sees only the photos you shared. Go to **Settings > Photo access** to manage the selection, or to allow your whole library. You can also use **Import** to check photos from outside your selection.

**How do I change the language?**
No More HDR follows the language set for it in iOS. Open **Settings > Language > Change language** to jump to the system setting. English and Vietnamese are supported.

**How do I clear the cache?**
Open **Settings > Cache**.
- **Clear scan cache** rechecks all your photos for HDR.
- **Clear app cache** also deletes any Fixed copies you have not yet saved to your library, forgets the Fixed tag on photos already saved, and rechecks everything. Save the copies you want to keep first.

**Will scanning drain my battery or heat up my phone?**
Checking a large library can make your device warm and use some battery. Open **Settings > HDR Scan** and tap **Pause** to stop. Scanning resumes when you tap **Unpause** or restart the app.

**Why can't some photos be fixed?**
The app leaves a photo alone, and tells you why, when:
- it has no HDR to remove;
- it is a Live Photo (not supported yet);
- the file type, or the kind of HDR, is not supported yet;
- Photos will not let it be edited (try saving a copy);
- the original is in iCloud and could not be downloaded;
- there is not enough free space;
- the result did not pass the app's check, so the photo was left unchanged;
- the file could not be read or written.

Some of these, such as free space or an iCloud download, can work on a second try. Use **Try the ones that might work** on the results screen.

**The app can't see my photos.**
Open **Settings > Photo access**. If access is Limited or Not allowed, tap **Manage selected photos** or **Change system setting** and allow access (Full access lets it check your whole library). If you would rather not give access, use **Import** to pick photos yourself.

## How to report a problem

In the app, open **Settings > Report a problem**. It opens an email to us with your app version and iOS version already filled in. Please add:

- your iOS version and device model (for example iPhone 16 Pro);
- the type of photo (for example a standard photo, Live Photo, screenshot, iCloud photo or imported photo) and what happened;
- what you expected to happen, and any message you saw.

You can also use the [problem report form](https://tally.so/r/KYqpBg) or email [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) directly. Please do not send private photos unless we ask for one.

## More

- [Privacy Policy](/no-more-hdr/privacy/)
