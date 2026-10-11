# EITP Agent App

Frontend-first Expo / React Native preview for the EITP polling-unit agent workflows.

## Run locally

```sh
npm install
npm run start
```

Use the Expo CLI prompt to open the app on a connected device/emulator, or run `npm run web` for
the browser preview.

## Preview scope

The current screens cover agent sign-in, Polling Unit check-in, result-method selection, manual
result entry, photo/OCR capture and review, incident reporting, submission states, and a receipt.
This is a UI prototype only: authentication, camera/evidence selection, persistence, OCR, uploads,
and report submission are not connected. Example party names are placeholders. Do not enter real
election data or treat the receipt preview as confirmation that a report was received.

Backend integration and the authoritative election result schema are intentionally deferred.
