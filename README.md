# Heads Up Barbershop — interactive booking demo

A mobile-first Macedonian single-page application built with semantic HTML, CSS and modular JavaScript. No build dependencies are needed.

## Run

With Node.js installed, run `npm start` from this directory, then open http://127.0.0.1:4173. Run `npm test` for booking logic tests.

## Structure

- `dist/index.html`: application shell, navigation and disclaimer.
- `dist/styles.css`: responsive charcoal/bronze design and component styles.
- `dist/model.js`: service catalogue, schedule, conflict checks, dates and statistics.
- `dist/app.js`: booking wizard, validation, confirmation, owner schedule and walk-in actions.
- `tests/model.test.js`: overlap, allocation, cancellations, totals and date tests.

## Demo behavior

Book a service, choose a barber, date and time, and use fictional contact details. The appointment appears instantly in the admin view on its selected date. Complete and cancel appointments, or block a 30-minute walk-in. Bookings persist in sessionStorage for the browser tab and reset on a new date. Reset clears this demo's data only. Data is not sent to a server, other devices or the shop. Google Fonts is the only external design resource; system fonts are the fallback.

Services, prices, staff and availability are illustrative. The customer-supplied rates are 300/200/450/250 MKD. The sample schedule runs 10:00–18:00 and deliberately includes past times today so the demo can be tested at any time. Dates use Europe/Skopje. The admin page is intentionally public with sample data and is not production authentication. SMS/Viber text is a preview, not a sent message.

Before production: verify business details, staff, prices and hours; add authenticated staff access, a database with transactional booking locks, timezone-aware operating rules, rate limiting and phone verification, consent/retention settings, and a real approved messaging integration. No payments or messages are enabled in this demo.

Head’s Up is publicly listed in Strumica at https://digitermin.com/en/salon/head-s-up-barbershop. Directory street addresses and opening hours conflict, so the demo uses only the city. This is an independent concept, not an official business site.
