# Rittenregistratie

Zakelijke kilometerregistratie als app op je telefoon. Gegevens blijven op je toestel.

## Online zetten via GitHub Pages
1. Maak op GitHub een nieuwe repository, bijvoorbeeld `ritten`. Gratis GitHub Pages vereist een **openbare** repository; dat is geen probleem, want er staat alleen code in. Je ritten, adressen en eventuele Google-sleutel staan op je telefoon, niet in de repo.
2. Upload alle bestanden uit deze map (Add file → Upload files).
3. Ga naar Settings → Pages → Source: *Deploy from a branch*, kies `main` en `/ (root)`, opslaan.
4. Na een minuut staat de app op `https://<gebruikersnaam>.github.io/ritten/`.

## Op je telefoon zetten
- **iPhone (Safari):** open de link → Deel-knop → *Zet op beginscherm*.
- **Android (Chrome):** open de link → menu → *App installeren*.

## Hoe het werkt
- Adressen zoeken: gratis via OpenStreetMap. Optioneel Google Places voor betere resultaten op bedrijfsnaam.
- Afstanden: snelste route via de openbare OSRM-routeserver. Elk traject wordt onthouden, dus het wordt maar één keer opgevraagd en werkt daarna ook offline.
- De afstand is altijd handmatig aan te passen, en kan ook uit begin- en eindstand van de teller komen.

## Optioneel: Google-sleutel
1. Google Cloud Console → nieuw project → koppel een factureringsaccount (voor persoonlijk gebruik blijf je ruim binnen het gratis tegoed).
2. Schakel **Maps JavaScript API** en **Places API (New)** in.
3. Maak een API-sleutel en beperk die tot websites: `https://<gebruikersnaam>.github.io/*`, en tot die twee API's.
4. Plak de sleutel in de app onder Instellingen.

## Updates
Pas je bestanden aan, verhoog `CACHE` in `sw.js` (bijv. `ritten-v2`) en upload opnieuw. Je gegevens blijven behouden.

## Back-up
Maak regelmatig een back-up via Instellingen. Wis je browsergegevens of wissel je van telefoon, dan zet je die back-up terug.
