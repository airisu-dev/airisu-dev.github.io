---
layout: page
title: "No More HDR: Support"
permalink: /no-more-hdr/
lang: de
share-description: "Schluss mit Fotos, die den Bildschirm zu hell machen. Finde verstecktes HDR in deiner Mediathek und speichere normale Kopien. Deine Originale bleiben sicher."
---

Aufgenommene Fotos lassen dein Handy beim Ansehen oder Posten viel zu hell leuchten. Das ist verstecktes HDR: zusätzliche Helligkeit, die im Foto gespeichert ist. No More HDR findet diese Fotos und wandelt sie in normale SDR-Kopien um. Deine Fotos verlassen dein Gerät nie.

Brauchst du Hilfe? Schreib uns an [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) oder lies, [wie du ein Problem meldest](#how-to-report-a-problem).

## So funktioniert es

1. **Mediathek scannen.** Wähle beim ersten Start **Meine Mediathek prüfen** und erlaube den Zugriff auf Fotos. Die App prüft deine Fotos im Hintergrund. Den Fortschritt kannst du in **Einstellungen > HDR-Scan** verfolgen und dort auch pausieren.
2. **Nur HDR-Fotos anzeigen.** Mit dem Schalter **HDR** in der Mediathek siehst du nur die Fotos mit HDR. Sie tragen ein HDR-Label.
3. **Auswählen und HDR entfernen.** Tippe auf **Auswählen**, wähle Fotos aus (oder **Alle HDR auswählen**) und tippe dann auf **HDR entfernen**. Lass die App geöffnet, solange sie arbeitet.
4. **Als Kopien sichern.** Die App arbeitet mit Kopien, daher bleiben deine Originale unverändert. Neue Kopien erscheinen in deiner Liste **Korrigiert**. Wenn du bereit bist, tippe auf **In Mediathek sichern**, um sie deiner Fotomediathek hinzuzufügen. Nach einem Durchlauf kannst du auch die ursprünglichen HDR-Fotos löschen. Sie landen in „Zuletzt gelöscht“, wo du sie 30 Tage lang wiederherstellen kannst.
5. **Ergebnisse prüfen.** Der Schalter **Korrigiert** zeigt die von der App erstellten SDR-Kopien, jeweils mit dem Label KORRIGIERT.
6. **Importierte Fotos (eingeschränkter oder kein Zugriff).** Wenn du nur einige oder gar keine Fotos mit der App teilst, nutze **Importieren** (oder **Fotos auswählen**), um Fotos selbst auszuwählen. No More HDR prüft sie und behält die Fotos mit HDR unter **Importiert**, wo du sie auf dieselbe Weise korrigieren kannst. Importierte Fotos sind Kopien, die in der App gespeichert bleiben; deine Fotomediathek wird nicht verändert.

## FAQ

**Warum wird ein Foto als HDR angezeigt?**
Viele moderne Handyfotos speichern zusätzliche Helligkeitsinformationen (eine „Gain Map“) neben dem normalen Bild. Auf einem hellen HDR-fähigen Bildschirm kann das Foto deutlich heller wirken als der Rest des Bildschirms. Das HDR-Label bedeutet, dass die App diese Informationen im Foto gefunden hat.

**Was bedeutet „Korrigiert“?**
Ein korrigiertes Foto ist eine SDR-Kopie, die No More HDR erstellt hat. Sie enthält keine HDR-Informationen und sieht deshalb auf jedem Bildschirm gleich aus.

**Werden meine Originale verändert?**
Nein. Die App erstellt nur Kopien. Deine Originale bleiben genau dort, wo sie sind, es sei denn, du entscheidest dich, sie nach einem Durchlauf zu löschen.

**Funktioniert es mit iCloud-Fotos?**
Wenn das Original eines Fotos in voller Größe nur in iCloud und nicht auf deinem Handy liegt, zeigt die App ein Wolkensymbol, statt es zu prüfen. Der Scan lädt nie Fotos herunter. Du kannst das Foto öffnen und auf **Herunterladen und prüfen** tippen oder es in Fotos herunterladen, dann wird es wie jedes andere geprüft. Wenn die App ein iCloud-Original zum Korrigieren braucht, lädt sie es für dich herunter (dafür ist eine Internetverbindung nötig).

**Was ist eingeschränkter Fotozugriff?**
Mit iOS kannst du nur ausgewählte Fotos mit einer App teilen. In diesem Fall sieht No More HDR nur die Fotos, die du freigegeben hast. Unter **Einstellungen > Fotozugriff** kannst du die Auswahl verwalten oder deine gesamte Mediathek freigeben. Mit **Importieren** kannst du außerdem Fotos außerhalb deiner Auswahl prüfen.

**Wie ändere ich die Sprache?**
No More HDR folgt der Sprache, die du in iOS dafür eingestellt hast. Öffne **Einstellungen > Sprache > Sprache ändern**, um direkt zur Systemeinstellung zu springen. Unterstützte Sprachen: Englisch, Vietnamesisch, Spanisch, Portugiesisch (Brasilien), Japanisch, Deutsch, Französisch, Chinesisch (vereinfacht), Chinesisch (traditionell), Koreanisch, Indonesisch, Russisch, Türkisch, Italienisch und Thai.

**Wie leere ich den Cache?**
Öffne **Einstellungen > Cache**.
- **Scan-Cache leeren** prüft alle deine Fotos erneut auf HDR.
- **App-Cache leeren** löscht außerdem alle korrigierten Kopien, die du noch nicht in deiner Mediathek gesichert hast, vergisst das Label „Korrigiert“ bei bereits gesicherten Fotos und prüft alles erneut. Sichere zuerst die Kopien, die du behalten möchtest.

**Verbraucht das Scannen Akku oder erhitzt es mein Handy?**
Das Prüfen einer großen Mediathek kann dein Gerät erwärmen und etwas Akku verbrauchen. Öffne **Einstellungen > HDR-Scan** und tippe auf **Pausieren**, um zu stoppen. Der Scan wird fortgesetzt, wenn du auf **Fortsetzen** tippst oder die App neu startest.

**Warum lassen sich manche Fotos nicht korrigieren?**
Die App lässt ein Foto unverändert und sagt dir, warum, wenn:
- es kein HDR enthält, das sich entfernen ließe;
- es ein Live Photo ist (noch nicht unterstützt);
- der Dateityp oder die Art des HDR noch nicht unterstützt wird;
- Fotos die Bearbeitung nicht zulässt (versuche, eine Kopie zu sichern);
- das Original in iCloud liegt und nicht heruntergeladen werden konnte;
- nicht genug freier Speicherplatz vorhanden ist;
- das Ergebnis die Prüfung der App nicht bestanden hat und das Foto daher unverändert blieb;
- die Datei nicht gelesen oder geschrieben werden konnte.

Manche dieser Fälle, etwa fehlender Speicherplatz oder ein iCloud-Download, klappen beim zweiten Versuch. Nutze dafür **Erneut versuchen, wo es klappen könnte** auf dem Ergebnisbildschirm.

**Die App kann meine Fotos nicht sehen.**
Öffne **Einstellungen > Fotozugriff**. Wenn der Zugriff eingeschränkt oder nicht erlaubt ist, tippe auf **Ausgewählte Fotos verwalten** oder **Systemeinstellung ändern** und erlaube den Zugriff (mit vollem Zugriff kann die App deine gesamte Mediathek prüfen). Wenn du lieber keinen Zugriff geben möchtest, wähle Fotos mit **Importieren** selbst aus.

## So meldest du ein Problem {#how-to-report-a-problem}

Öffne in der App **Einstellungen > Problem melden**. Es öffnet sich eine E-Mail an uns, in der deine App-Version und deine iOS-Version bereits eingetragen sind. Bitte ergänze:

- deine iOS-Version und dein Gerätemodell (zum Beispiel iPhone 16 Pro);
- die Art des Fotos (zum Beispiel Standardfoto, Live Photo, Bildschirmfoto, iCloud-Foto oder importiertes Foto) und was passiert ist;
- was du erwartet hast und welche Meldung du gesehen hast.

Du kannst auch das [Formular zur Problemmeldung](https://tally.so/r/KYqpBg) nutzen oder direkt an [airisu-dev@gmail.com](mailto:airisu-dev@gmail.com) schreiben. Bitte schicke keine privaten Fotos, es sei denn, wir bitten darum.

## Mehr

- [Datenschutzerklärung](/no-more-hdr/privacy/)
- [Problem melden](/no-more-hdr/report/)
